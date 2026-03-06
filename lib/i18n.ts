// Multi-language support for Swiss Gamer Cards
// Languages: German (DE), French (FR), Italian (IT), English (EN)
// Supports domain-specific content (guthabenkarten.ch vs sofortvoucher.de)

export type Language = 'de' | 'fr' | 'it' | 'en';
export type SiteDomain = 'guthabenkarten.ch' | 'sofortvoucher.de';

export interface Translations {
  common: {
    siteName: string;
    tagline: string;
    instantDelivery: string;
    chfPrices: string;
    available247: string;
    addToCart: string;
    selectDenomination: string;
    deliveryTime: string;
    secure: string;
    backToHome: string;
    currency: string;
  };
  product: {
    description: string;
    denominations: string;
    whatYouCanBuy: string;
    examples: string;
    deliveryInfo: string;
    deliveryMethod: string;
    region: string;
    paymentMethods: string;
    howItWorks: string;
    step1: string;
    step2: string;
    step3: string;
    features: string;
    instantDeliveryDesc: string;
    securePaymentDesc: string;
    validCodesDesc: string;
  };
  home: {
    hero: string;
    heroSubtitle: string;
    featuredProducts: string;
    allProducts: string;
  };
  features: {
    instantTitle: string;
    instantDesc: string;
    swissMadeTitle: string;
    swissMadeDesc: string;
    secureTitle: string;
    secureDesc: string;
  };
  footer: {
    tagline: string;
    support: string;
    faq: string;
    contact: string;
    refund: string;
    legal: string;
    terms: string;
    privacy: string;
    impressum: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    common: {
      siteName: 'Guthabenkarten.ch',
      tagline: 'Gaming Guthabenkarten - Sofort per E-Mail - 100% Sicher',
      instantDelivery: 'Sofortlieferung (30 Sek.)',
      chfPrices: 'CHF Preise - Keine Gebühren',
      available247: '24/7 Verfügbar',
      addToCart: 'In den Warenkorb',
      selectDenomination: 'Wähle einen Betrag',
      deliveryTime: '30-60 Sekunden',
      secure: 'Sicher',
      backToHome: 'Home',
      currency: 'CHF',
    },
    product: {
      description: 'Beschreibung',
      denominations: 'Wofür kann ich es verwenden?',
      whatYouCanBuy: 'Was du kaufen kannst',
      examples: 'Beispiele:',
      deliveryInfo: 'Lieferung & Sicherheit',
      deliveryMethod: 'Zustellung: Per E-Mail mit Anleitung',
      region: 'Region',
      paymentMethods: 'Zahlung: Kreditkarte, Twint, PayPal',
      howItWorks: 'So funktioniert\'s',
      step1: 'Wähle Menge und leg in den Warenkorb',
      step2: 'Bezahle sicher mit Twint oder Karte',
      step3: 'Code kommt sofort in deine E-Mail',
      features: 'Garantie',
      instantDeliveryDesc: 'Code innerhalb von 30-60 Sekunden per E-Mail',
      securePaymentDesc: 'Sichere Zahlung mit Stripe',
      validCodesDesc: 'Geprüfte und gültige Gift Card Codes',
    },
    home: {
      hero: '🎮 Guthabenkarten.ch',
      heroSubtitle: 'Gaming, Streaming & Shopping Cards: Sofort per E-Mail. 100% Sicher.',
      featuredProducts: 'Beliebteste Cards',
      allProducts: 'Alle Guthabenkarten',
    },
    features: {
      instantTitle: 'Sofortlieferung',
      instantDesc: 'Code per E-Mail in 30-60 Sekunden. Kein Warten.',
      swissMadeTitle: 'Swiss Made',
      swissMadeDesc: 'CHF Preise, Schweizer Zahlungsmethoden, keine Umrechnungsgebühren.',
      secureTitle: '100% Sicher',
      secureDesc: 'Sichere Zahlung, geprüfte Codes, Geld-zurück-Garantie.',
    },
    footer: {
      tagline: 'Ihr Schweizer Online-Shop für Gaming Guthabenkarten. Sofortlieferung, sicher und einfach.',
      support: 'Support',
      faq: 'FAQ',
      contact: 'Kontakt',
      refund: 'Rückerstattung',
      legal: 'Rechtliches',
      terms: 'AGB',
      privacy: 'Datenschutz',
      impressum: 'Impressum',
      copyright: '© 2026 Guthabenkarten.ch',
    },
  },
  
  en: {
    common: {
      siteName: 'Guthabenkarten.ch',
      tagline: 'Gaming Gift Cards - Instant Email Delivery - 100% Secure',
      instantDelivery: 'Instant Delivery (30 Sec.)',
      chfPrices: 'CHF Prices - No Fees',
      available247: '24/7 Available',
      addToCart: 'Add to Cart',
      selectDenomination: 'Select an Amount',
      deliveryTime: '30-60 seconds',
      secure: 'Secure',
      backToHome: 'Home',
      currency: 'CHF',
    },
    product: {
      description: 'Description',
      denominations: 'What can I use it for?',
      whatYouCanBuy: 'What you can buy',
      examples: 'Examples:',
      deliveryInfo: 'Delivery & Security',
      deliveryMethod: 'Delivery: Via email with instructions',
      region: 'Region',
      paymentMethods: 'Payment: Credit card, Twint, PayPal',
      howItWorks: 'How it works',
      step1: 'Choose quantity and add to cart',
      step2: 'Pay securely with Twint or card',
      step3: 'Code arrives instantly via email',
      features: 'Guarantee',
      instantDeliveryDesc: 'Code delivered via email within 30-60 seconds',
      securePaymentDesc: 'Secure payment with Stripe',
      validCodesDesc: 'Verified and valid gift card codes',
    },
    home: {
      hero: '🎮 Guthabenkarten.ch',
      heroSubtitle: 'Gaming, Streaming & Shopping Cards: Instant Email Delivery. 100% Secure.',
      featuredProducts: 'Popular Cards',
      allProducts: 'All Gift Cards',
    },
    features: {
      instantTitle: 'Instant Delivery',
      instantDesc: 'Code via email in 30-60 seconds. No waiting.',
      swissMadeTitle: 'Swiss Made',
      swissMadeDesc: 'CHF prices, Swiss payment methods, no conversion fees.',
      secureTitle: '100% Secure',
      secureDesc: 'Secure payment, verified codes, money-back guarantee.',
    },
    footer: {
      tagline: 'Your Swiss online shop for gaming gift cards. Instant delivery, secure and easy.',
      support: 'Support',
      faq: 'FAQ',
      contact: 'Contact',
      refund: 'Refund Policy',
      legal: 'Legal',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      impressum: 'Imprint',
      copyright: '© 2026 Guthabenkarten.ch',
    },
  },
  
  fr: {
    common: {
      siteName: 'Guthabenkarten.ch',
      tagline: 'Cartes Cadeaux Gaming - Livraison Instantanée - 100% Sécurisé',
      instantDelivery: 'Livraison Instantanée (30 Sec.)',
      chfPrices: 'Prix en CHF - Sans Frais',
      available247: 'Disponible 24/7',
      addToCart: 'Ajouter au Panier',
      selectDenomination: 'Sélectionner un Montant',
      deliveryTime: '30-60 secondes',
      secure: 'Sécurisé',
      backToHome: 'Accueil',
      currency: 'CHF',
    },
    product: {
      description: 'Description',
      denominations: 'Pour quoi puis-je l\'utiliser ?',
      whatYouCanBuy: 'Ce que vous pouvez acheter',
      examples: 'Exemples :',
      deliveryInfo: 'Livraison & Sécurité',
      deliveryMethod: 'Livraison: Par email avec instructions',
      region: 'Région',
      paymentMethods: 'Paiement: Carte, Twint, PayPal',
      howItWorks: 'Comment ça marche',
      step1: 'Choisissez la quantité et ajoutez au panier',
      step2: 'Payez en toute sécurité avec Twint ou carte',
      step3: 'Le code arrive instantanément par email',
      features: 'Garantie',
      instantDeliveryDesc: 'Code livré par email en 30-60 secondes',
      securePaymentDesc: 'Paiement sécurisé avec Stripe',
      validCodesDesc: 'Codes de cartes cadeaux vérifiés et valides',
    },
    home: {
      hero: '🎮 Guthabenkarten.ch',
      heroSubtitle: 'Cartes Gaming, Streaming & Shopping: Livraison instantanée. 100% Sécurisé.',
      featuredProducts: 'Cartes Populaires',
      allProducts: 'Toutes les Cartes Cadeaux',
    },
    features: {
      instantTitle: 'Livraison Instantanée',
      instantDesc: 'Code par email en 30-60 secondes. Pas d\'attente.',
      swissMadeTitle: 'Swiss Made',
      swissMadeDesc: 'Prix en CHF, méthodes de paiement suisses, sans frais de conversion.',
      secureTitle: '100% Sécurisé',
      secureDesc: 'Paiement sécurisé, codes vérifiés, garantie de remboursement.',
    },
    footer: {
      tagline: 'Votre boutique en ligne suisse pour cartes cadeaux gaming. Livraison instantanée, sécurisée et facile.',
      support: 'Support',
      faq: 'FAQ',
      contact: 'Contact',
      refund: 'Remboursement',
      legal: 'Mentions Légales',
      terms: 'Conditions Générales',
      privacy: 'Politique de Confidentialité',
      impressum: 'Mentions Légales',
      copyright: '© 2026 Guthabenkarten.ch',
    },
  },
  
  it: {
    common: {
      siteName: 'Guthabenkarten.ch',
      tagline: 'Gift Card Gaming - Consegna Istantanea - 100% Sicuro',
      instantDelivery: 'Consegna Istantanea (30 Sec.)',
      chfPrices: 'Prezzi in CHF - Senza Commissioni',
      available247: 'Disponibile 24/7',
      addToCart: 'Aggiungi al Carrello',
      selectDenomination: 'Seleziona un Importo',
      deliveryTime: '30-60 secondi',
      secure: 'Sicuro',
      backToHome: 'Home',
      currency: 'CHF',
    },
    product: {
      description: 'Descrizione',
      denominations: 'Per cosa posso usarlo?',
      whatYouCanBuy: 'Cosa puoi comprare',
      examples: 'Esempi:',
      deliveryInfo: 'Consegna & Sicurezza',
      deliveryMethod: 'Consegna: Via email con istruzioni',
      region: 'Regione',
      paymentMethods: 'Pagamento: Carta, Twint, PayPal',
      howItWorks: 'Come funziona',
      step1: 'Scegli la quantità e aggiungi al carrello',
      step2: 'Paga in modo sicuro con Twint o carta',
      step3: 'Il codice arriva istantaneamente via email',
      features: 'Garanzia',
      instantDeliveryDesc: 'Codice consegnato via email entro 30-60 secondi',
      securePaymentDesc: 'Pagamento sicuro con Stripe',
      validCodesDesc: 'Codici gift card verificati e validi',
    },
    home: {
      hero: '🎮 Guthabenkarten.ch',
      heroSubtitle: 'Carte Gaming, Streaming & Shopping: Consegna immediata. 100% Sicuro.',
      featuredProducts: 'Carte Popolari',
      allProducts: 'Tutte le Gift Card',
    },
    features: {
      instantTitle: 'Consegna Istantanea',
      instantDesc: 'Codice via email in 30-60 secondi. Nessuna attesa.',
      swissMadeTitle: 'Swiss Made',
      swissMadeDesc: 'Prezzi in CHF, metodi di pagamento svizzeri, senza commissioni di conversione.',
      secureTitle: '100% Sicuro',
      secureDesc: 'Pagamento sicuro, codici verificati, garanzia di rimborso.',
    },
    footer: {
      tagline: 'Il tuo negozio online svizzero per gift card gaming. Consegna istantanea, sicura e facile.',
      support: 'Supporto',
      faq: 'FAQ',
      contact: 'Contatto',
      refund: 'Rimborso',
      legal: 'Note Legali',
      terms: 'Termini e Condizioni',
      privacy: 'Privacy Policy',
      impressum: 'Colophon',
      copyright: '© 2026 Guthabenkarten.ch',
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.de;
}

// Domain-specific overrides for German market
export function getDomainSpecificContent(domain: string, lang: Language = 'de') {
  const isGermanSite = domain.includes('sofortvoucher.de');
  
  // German site translations (sofortvoucher.de)
  if (isGermanSite) {
    if (lang === 'de') {
      return {
        features: {
          instantTitle: 'Sofortlieferung',
          instantDesc: 'Code per E-Mail in 30-60 Sekunden. Kein Warten.',
          localTitle: 'Deutscher Support',
          localDesc: 'EUR Preise, deutsche Zahlungsmethoden, kein Währungsumtausch.',
          secureTitle: '100% Sicher',
          secureDesc: 'Sichere Zahlung, geprüfte Codes, Geld-zurück-Garantie.',
          flag: '🇩🇪',
        },
        paymentMethods: 'Zahlung: Kreditkarte, PayPal, SOFORT, Giropay',
        tagline: 'Ihr deutscher Online-Shop für Gaming Guthabenkarten. Sofortlieferung, sicher und einfach.',
      };
    }
    return {
      features: {
        instantTitle: 'Instant Delivery',
        instantDesc: 'Code via email in 30-60 seconds. No waiting.',
        localTitle: 'German Support',
        localDesc: 'EUR prices, German payment methods, no currency conversion.',
        secureTitle: '100% Secure',
        secureDesc: 'Secure payment, verified codes, money-back guarantee.',
        flag: '🇩🇪',
      },
      paymentMethods: 'Payment: Credit card, PayPal, SOFORT, Giropay',
      tagline: 'Your German online shop for gaming gift cards. Instant delivery, secure and easy.',
    };
  }
  
  // Swiss site (default)
  if (lang === 'de') {
    return {
      features: {
        instantTitle: 'Sofortlieferung',
        instantDesc: 'Code per E-Mail in 30-60 Sekunden. Kein Warten.',
        localTitle: 'Schweizer Support',
        localDesc: 'CHF Preise, Schweizer Zahlungsmethoden, kein Währungsumtausch.',
        secureTitle: '100% Sicher',
        secureDesc: 'Sichere Zahlung, geprüfte Codes, Geld-zurück-Garantie.',
        flag: '🇨🇭',
      },
      paymentMethods: 'Zahlung: Kreditkarte, TWINT, PayPal',
      tagline: 'Ihr Schweizer Online-Shop für Gaming Guthabenkarten. Sofortlieferung, sicher und einfach.',
    };
  }
  return {
    features: {
      instantTitle: 'Instant Delivery',
      instantDesc: 'Code via email in 30-60 seconds. No waiting.',
      localTitle: 'Swiss Support',
      localDesc: 'CHF prices, Swiss payment methods, no currency conversion.',
      secureTitle: '100% Secure',
      secureDesc: 'Secure payment, verified codes, money-back guarantee.',
      flag: '🇨🇭',
    },
    paymentMethods: 'Payment: Credit card, TWINT, PayPal',
    tagline: 'Your Swiss online shop for gaming gift cards. Instant delivery, secure and easy.',
  };
}
