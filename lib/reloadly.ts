/**
 * Reloadly Gift Cards API Client
 * Docs: https://www.reloadly.com/docs
 */

interface ReloadlyConfig {
  clientId: string;
  clientSecret: string;
  audience: string;
  baseUrl: string;
}

interface ReloadlyToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}

interface ReloadlyProduct {
  productId: number;
  productName: string;
  countryIsoCode: string;
  currencyCode: string;
  brand: {
    brandId: number;
    brandName: string;
  };
  recipientCurrencyCode: string;
  minRecipientDenomination: number;
  maxRecipientDenomination: number;
  senderFee: number;
  senderCurrencyCode: string;
  discountPercentage: number;
}

interface ReloadlyOrder {
  transactionId: number;
  status: string;
  product: {
    productId: number;
    productName: string;
    countryCode: string;
    quantity: number;
    unitPrice: number;
    total: number;
    currencyCode: string;
    brand: {
      brandId: number;
      brandName: string;
    };
  };
  recipientEmail: string;
  pinCode?: string;
  cardNumber?: string;
  cardSerialNumber?: string;
  expiryDate?: string;
  redemptionInstructions?: string;
}

interface OrderItem {
  productId: string;
  productName: string;
  denomination: number;
  quantity: number;
  platform?: string;
}

// Product ID mapping: our ID -> Reloadly productId
// Note: Reloadly only supports EUR products for Germany
const RELOADLY_PRODUCT_MAP: Record<string, number> = {
  // Streaming (RANGE products - support FX)
  'netflix-30': 12, // Netflix EUR 30
  'spotify-30': 89, // Spotify EUR 30
  'google-play-50': 10, // Google Play EUR 50
  'apple-50': 11, // Apple EUR 50
  
  // Gaming (FIXED products - no FX, EUR only)
  'steam-50': 1, // Steam EUR 50
  'playstation-50': 2, // PlayStation EUR 50
  'xbox-50': 3, // Xbox EUR 50
  'nintendo-50': 4, // Nintendo EUR 50
  'roblox-25': 5, // Roblox EUR 25
};

// Get configuration based on environment
function getConfig(): ReloadlyConfig {
  const isProduction = process.env.RELOADLY_ENV === 'production';
  
  if (isProduction) {
    return {
      clientId: process.env.RELOADLY_CLIENT_ID!,
      clientSecret: process.env.RELOADLY_CLIENT_SECRET!,
      audience: 'https://giftcards.reloadly.com',
      baseUrl: 'https://giftcards.reloadly.com',
    };
  }
  
  // Sandbox
  return {
    clientId: process.env.RELOADLY_SANDBOX_CLIENT_ID || 'HNOVxMX8yieImVA1rmDXfm1c8z01mHgV',
    clientSecret: process.env.RELOADLY_SANDBOX_CLIENT_SECRET || '12xCJiSzcd-RrDjpTNla2Y1Tiksqqj-FbD0nEST8DSQqKGr13gSUfKfYsGnKoNn',
    audience: 'https://giftcards-sandbox.reloadly.com',
    baseUrl: 'https://giftcards-sandbox.reloadly.com',
  };
}

// Token cache
let cachedToken: ReloadlyToken | null = null;
let tokenExpiry: number = 0;

/**
 * Get OAuth2 access token from Reloadly
 */
async function getAccessToken(): Promise<string> {
  const now = Date.now();
  
  // Return cached token if still valid (with 5 min buffer)
  if (cachedToken && now < tokenExpiry - 300000) {
    return cachedToken.access_token;
  }
  
  const config = getConfig();
  
  const response = await fetch('https://auth.reloadly.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      grant_type: 'client_credentials',
      audience: config.audience,
    }),
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Reloadly auth failed: ${error}`);
  }
  
  cachedToken = await response.json();
  tokenExpiry = now + (cachedToken!.expires_in * 1000);
  
  return cachedToken!.access_token;
}

/**
 * Get all available products for a country
 */
export async function getProducts(countryCode: string = 'DE'): Promise<ReloadlyProduct[]> {
  const token = await getAccessToken();
  const config = getConfig();
  
  const response = await fetch(`${config.baseUrl}/countries/${countryCode}/products`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/com.reloadly.giftcards-v1+json',
    },
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  
  return response.json();
}

/**
 * Order a gift card
 */
export async function orderGiftCard(
  productId: number,
  quantity: number,
  unitPrice: number,
  recipientEmail: string,
  customIdentifier?: string
): Promise<ReloadlyOrder> {
  const token = await getAccessToken();
  const config = getConfig();
  
  const response = await fetch(`${config.baseUrl}/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/com.reloadly.giftcards-v1+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      productId,
      quantity,
      unitPrice,
      customIdentifier: customIdentifier || `order-${Date.now()}`,
      recipientEmail,
      preOrder: false,
    }),
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to order gift card: ${error}`);
  }
  
  return response.json();
}

/**
 * Check if a product can be fulfilled via Reloadly
 */
export function canFulfillViaReloadly(productId: string): boolean {
  return productId in RELOADLY_PRODUCT_MAP;
}

/**
 * Get Reloadly product ID for our product
 */
export function getReloadlyProductId(productId: string): number | null {
  return RELOADLY_PRODUCT_MAP[productId] || null;
}

/**
 * Fulfill an order via Reloadly
 * Returns order details with gift card codes
 */
export async function fulfillOrder(
  items: OrderItem[],
  customerEmail: string,
  orderId: string
): Promise<{
  success: boolean;
  orders: ReloadlyOrder[];
  errors: string[];
}> {
  const orders: ReloadlyOrder[] = [];
  const errors: string[] = [];
  
  for (const item of items) {
    const reloadlyProductId = getReloadlyProductId(item.productId);
    
    if (!reloadlyProductId) {
      errors.push(`Product ${item.productId} not available via Reloadly`);
      continue;
    }
    
    try {
      // Order each item
      for (let i = 0; i < item.quantity; i++) {
        const order = await orderGiftCard(
          reloadlyProductId,
          1, // quantity per order
          item.denomination,
          customerEmail,
          `${orderId}-${item.productId}-${i + 1}`
        );
        orders.push(order);
      }
    } catch (error: any) {
      errors.push(`Failed to order ${item.productName}: ${error.message}`);
    }
  }
  
  return {
    success: errors.length === 0,
    orders,
    errors,
  };
}

/**
 * Format gift card codes for email
 */
export function formatCodesForEmail(orders: ReloadlyOrder[]): string {
  return orders.map(order => {
    const parts = [
      `🎮 ${order.product.productName}`,
      `   Code: ${order.pinCode || order.cardNumber || 'N/A'}`,
    ];
    
    if (order.cardSerialNumber) {
      parts.push(`   Serial: ${order.cardSerialNumber}`);
    }
    
    if (order.expiryDate) {
      parts.push(`   Valid until: ${order.expiryDate}`);
    }
    
    if (order.redemptionInstructions) {
      parts.push(`   Instructions: ${order.redemptionInstructions}`);
    }
    
    return parts.join('\n');
  }).join('\n\n');
}

// Export types
export type { ReloadlyProduct, ReloadlyOrder, OrderItem };
