import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { fulfillOrder, canFulfillViaReloadly } from '@/lib/reloadly';
import { sendGiftCodes, sendAdminAlert, sendManualFulfillmentRequest } from '@/lib/email';

function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(secretKey, {
    apiVersion: '2024-12-18.acacia' as any,
  });
}

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const signature = req.headers.get('stripe-signature') || '';

  let event: Stripe.Event;
  const stripe = getStripe();

  try {
    if (!endpointSecret) {
      throw new Error('STRIPE_WEBHOOK_SECRET is not set');
    }
    event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  // Handle successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    try {
      // Get order details
      const metadata = session.metadata || {};
      const orderItems = JSON.parse(metadata.orderItems || '[]');
      const customerEmail = session.customer_email;
      
      console.log('✅ Payment confirmed for:', customerEmail);
      console.log('🛒 Order items:', orderItems);
      console.log('💰 Amount:', session.amount_total, 'CHF');
      
      if (!customerEmail) {
        throw new Error('No customer email provided in session');
      }
      
      // Separate items into auto-fulfillable and manual
      const autoItems = [];
      const manualItems = [];
      
      for (const item of orderItems) {
        if (canFulfillViaReloadly(item.productId)) {
          autoItems.push(item);
        } else {
          manualItems.push(item);
        }
      }

      // 1. Process auto-fulfillable items via Reloadly
      if (autoItems.length > 0) {
        try {
          const result = await fulfillOrder(autoItems, customerEmail!, session.id);
          
          if (result.success) {
            console.log('✅ Reloadly fulfillment successful for:', autoItems.length, 'items');
            // Send codes to customer
            await sendGiftCodes(customerEmail!, result.orders);
          } else {
            console.error('❌ Reloadly partial failure:', result.errors);
            // Alert admin about failure
            await sendAdminAlert('Reloadly Fulfillment Failed', JSON.stringify({
              orderId: session.id,
              customer: customerEmail,
              errors: result.errors,
              items: autoItems
            }, null, 2));
            
            // Treat failed auto items as manual
            manualItems.push(...autoItems); 
          }
        } catch (error) {
          console.error('💥 Critical Reloadly error:', error);
          await sendAdminAlert('Reloadly Critical Error', JSON.stringify({
             orderId: session.id,
             error: String(error)
          }, null, 2));
          manualItems.push(...autoItems);
        }
      }

      // 2. Handle manual items (or failed auto items)
      if (manualItems.length > 0) {
        console.log('⚠️ Manual fulfillment required for:', manualItems.length, 'items');
        await sendManualFulfillmentRequest(session.id, customerEmail!, manualItems);
      }
      
    } catch (error) {
      console.error('Failed to process order:', error);
    }
  }

  if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    console.log('❌ Payment failed:', paymentIntent.id);
  }

  return NextResponse.json({ received: true });
}
