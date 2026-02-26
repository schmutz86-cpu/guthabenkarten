import nodemailer from 'nodemailer';
import { ReloadlyOrder } from './reloadly';

if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.warn('⚠️ SMTP credentials not configured - email sending will fail');
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'asmtp.mail.hostpoint.ch',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'info@guthabenkarten.ch',
    pass: process.env.SMTP_PASS, // No fallback - must be set
  },
  tls: {
    rejectUnauthorized: false
  }
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Guthabenkarten.ch Support" <${process.env.SMTP_USER || 'info@guthabenkarten.ch'}>`,
      to,
      subject,
      text: text || html.replace(/<[^>]*>?/gm, ''), // fallback plain text
      html,
    });
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

export async function sendGiftCodes(to: string, orders: ReloadlyOrder[]) {
  const codesHtml = orders.map(order => `
    <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 5px; background-color: #f9f9f9;">
      <h3 style="margin-top: 0; color: #333;">${order.product.productName}</h3>
      <p style="font-size: 18px; font-weight: bold; color: #007bff; background: #eef; padding: 10px; border-radius: 4px; display: inline-block;">
        Code: ${order.pinCode || order.cardNumber || 'N/A'}
      </p>
      ${order.cardSerialNumber ? `<p style="margin: 5px 0; color: #666;">Serial: ${order.cardSerialNumber}</p>` : ''}
      ${order.expiryDate ? `<p style="margin: 5px 0; color: #666;">Valid until: ${order.expiryDate}</p>` : ''}
      ${order.redemptionInstructions ? `<div style="margin-top: 10px; font-size: 14px; color: #555;"><strong>Instructions:</strong><br/>${order.redemptionInstructions}</div>` : ''}
    </div>
  `).join('');

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h1 style="color: #2c3e50;">Deine Bestellung ist da! 🎮</h1>
      <p>Danke für deinen Einkauf bei Guthabenkarten.ch.</p>
      <p>Hier sind deine Codes:</p>
      
      ${codesHtml}
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
        <p>Bei Fragen antworte einfach auf diese E-Mail.</p>
        <p>&copy; 2026 Guthabenkarten.ch</p>
      </div>
    </div>
  `;

  return sendEmail({
    to,
    subject: 'Deine Guthabenkarten Codes 🎮',
    html,
  });
}

export async function sendAdminAlert(subject: string, details: string) {
  const adminEmail = process.env.ADMIN_EMAIL || 'schmutz86@gmail.com';
  
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #e74c3c;">⚠️ Admin Alert</h2>
      <p><strong>Subject:</strong> ${subject}</p>
      <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;">${details}</pre>
    </div>
  `;

  return sendEmail({
    to: adminEmail,
    subject: `[ADMIN] ${subject}`,
    html,
  });
}

export async function sendManualFulfillmentRequest(orderId: string, customerEmail: string, items: any[]) {
  const itemsHtml = items.map(item => `<li>${item.productName} x${item.quantity} (${item.denomination} CHF)</li>`).join('');
  
  const html = `
    <div style="font-family: Arial, sans-serif;">
      <h2 style="color: #e67e22;">✋ Manual Fulfillment Required</h2>
      <p>Order <strong>${orderId}</strong> could not be automatically fulfilled.</p>
      <p><strong>Customer:</strong> ${customerEmail}</p>
      <ul>${itemsHtml}</ul>
      <p>Please manually purchase/retrieve these codes and email them to the customer.</p>
    </div>
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL || 'schmutz86@gmail.com',
    subject: `[ACTION REQUIRED] Manual Fulfillment for Order ${orderId}`,
    html,
  });
}
