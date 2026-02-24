// Multi-domain configuration
// Detects which site is being accessed based on hostname

export type SiteConfig = {
  domain: string;
  name: string;
  currency: 'CHF' | 'EUR';
  locale: 'de-CH' | 'de-DE';
  supplier: 'tillo' | 'reloadly';
  email: string;
  legal: {
    company: string;
    address: string;
    country: string;
  };
};

export const sites: Record<string, SiteConfig> = {
  'guthabenkarten.ch': {
    domain: 'guthabenkarten.ch',
    name: 'Guthabenkarten.ch',
    currency: 'CHF',
    locale: 'de-CH',
    supplier: 'tillo', // Waiting for approval
    email: 'info@guthabenkarten.ch',
    legal: {
      company: 'Guthabenkarten.ch',
      address: '5303 Würenlos, Schweiz',
      country: 'Schweiz',
    },
  },
  'sofortvoucher.de': {
    domain: 'sofortvoucher.de',
    name: 'sofortvoucher.de',
    currency: 'EUR',
    locale: 'de-DE',
    supplier: 'reloadly',
    email: 'info@sofortvoucher.de',
    legal: {
      company: 'sofortvoucher.de',
      address: 'Deutschland',
      country: 'Deutschland',
    },
  },
};

// Default to Swiss site
const defaultSite = sites['guthabenkarten.ch'];

export function getSiteConfig(host: string | null): SiteConfig {
  if (!host) return defaultSite;
  
  // Remove www. prefix and port
  const cleanHost = host.replace(/^www\./, '').split(':')[0];
  
  return sites[cleanHost] || defaultSite;
}

// For client-side use
export function useSiteConfig(): SiteConfig {
  if (typeof window === 'undefined') return defaultSite;
  return getSiteConfig(window.location.host);
}
