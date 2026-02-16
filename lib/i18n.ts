// Multi-language support for Swiss Gamer Cards
// Languages: German (DE), French (FR), Italian (IT), English (EN)

export type Language = 'de' | 'fr' | 'it' | 'en';

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
      siteName: 'Swiss Gamer Cards',
      tagline: 'Gaming Gift Cards - Sofort per E-Mail - 100% Sicher',
      instantDelivery: 'Sofortlieferung (30 Sek.)',
      chfPrices: 'CHF Preise - Keine Gebühren',
      available247: '24/7 Verfügbar',
      addToCart: 'In den Warenkorb',
      selectDenomination: 'Wähle einen Betrag',
      deliveryTime: '30-60 Sekunden',
      secure: 'Sicher',
      backToHome: 'Zurück zur Startseite',
      currency: 'CHF',
    },
    product: {
      description: 'Beschreibung',
      denominations: 'Verfügbare Beträge',
      howItWorks: 'So funktioniert es',
      step1: 'Wähle deinen Betrag',
      step2: 'Sicher bezahlen',
      step3: 'Code sofort per E-Mail erhalten',
      features: 'Vorteile',
      instantDeliveryDesc: 'Code innerhalb von 30-60 Sekunden per E-Mail',
      securePaymentDesc: 'Sichere Zahlung mit Stripe',
      validCodesDesc: 'Geprüfte und gültige Gift Card Codes',
    },
    home: {
      hero: '🎮 Swiss Gamer Cards',
      heroSubtitle: 'Gaming Gift Cards - Sofort per E-Mail - 100% Sicher',
      featuredProducts: 'Beliebteste Gift Cards',
      allProducts: 'Alle Gift Cards',
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
      tagline: 'Ihr Schweizer Online-Shop für Gaming Gift Cards. Sofortlieferung, sicher und einfach.',
      support: 'Support',
      faq: 'FAQ',
      contact: 'Kontakt',
      refund: 'Rückerstattung',
      legal: 'Rechtliches',
      terms: 'AGB',
      privacy: 'Datenschutz',
      impressum: 'Impressum',
      copyright: '© 2026 Swiss Gamer Cards. Made with ❤️ in Switzerland.',
    },
  },
  
  en: {
    common: {
      siteName: 'Swiss Gamer Cards',
      tagline: 'Gaming Gift Cards - Instant Email Delivery - 100% Secure',
      instantDelivery: 'Instant Delivery (30 Sec.)',
      chfPrices: 'CHF Prices - No Fees',
      available247: '24/7 Available',
      addToCart: 'Add to Cart',
      selectDenomination: 'Select an Amount',
      deliveryTime: '30-60 seconds',
      secure: 'Secure',
      backToHome: 'Back to Home',
      currency: 'CHF',
    },
    product: {
      description: 'Description',
      denominations: 'Available Amounts',
      howItWorks: 'How It Works',
      step1: 'Choose your amount',
      step2: 'Pay securely',
      step3: 'Receive code instantly via email',
      features: 'Features',
      instantDeliveryDesc: 'Code delivered via email within 30-60 seconds',
      securePaymentDesc: 'Secure payment with Stripe',
      validCodesDesc: 'Verified and valid gift card codes',
    },
    home: {
      hero: '🎮 Swiss Gamer Cards',
      heroSubtitle: 'Gaming Gift Cards - Instant Email Delivery - 100% Secure',
      featuredProducts: 'Featured Gift Cards',
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
      copyright: '© 2026 Swiss Gamer Cards. Made with ❤️ in Switzerland.',
    },
  },
  
  fr: {
    common: {
      siteName: 'Swiss Gamer Cards',
      tagline: 'Cartes Cadeaux Gaming - Livraison Instantanée - 100% Sécurisé',
      instantDelivery: 'Livraison Instantanée (30 Sec.)',
      chfPrices: 'Prix en CHF - Sans Frais',
      available247: 'Disponible 24/7',
      addToCart: 'Ajouter au Panier',
      selectDenomination: 'Sélectionner un Montant',
      deliveryTime: '30-60 secondes',
      secure: 'Sécurisé',
      backToHome: 'Retour à l\'Accueil',
      currency: 'CHF',
    },
    product: {
      description: 'Description',
      denominations: 'Montants Disponibles',
      howItWorks: 'Comment ça Marche',
      step1: 'Choisissez votre montant',
      step2: 'Payez en toute sécurité',
      step3: 'Recevez le code instantanément par email',
      features: 'Avantages',
      instantDeliveryDesc: 'Code livré par email en 30-60 secondes',
      securePaymentDesc: 'Paiement sécurisé avec Stripe',
      validCodesDesc: 'Codes de cartes cadeaux vérifiés et valides',
    },
    home: {
      hero: '🎮 Swiss Gamer Cards',
      heroSubtitle: 'Cartes Cadeaux Gaming - Livraison Instantanée - 100% Sécurisé',
      featuredProducts: 'Cartes Cadeaux Populaires',
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
      copyright: '© 2026 Swiss Gamer Cards. Made with ❤️ in Switzerland.',
    },
  },
  
  it: {
    common: {
      siteName: 'Swiss Gamer Cards',
      tagline: 'Gift Card Gaming - Consegna Istantanea - 100% Sicuro',
      instantDelivery: 'Consegna Istantanea (30 Sec.)',
      chfPrices: 'Prezzi in CHF - Senza Commissioni',
      available247: 'Disponibile 24/7',
      addToCart: 'Aggiungi al Carrello',
      selectDenomination: 'Seleziona un Importo',
      deliveryTime: '30-60 secondi',
      secure: 'Sicuro',
      backToHome: 'Torna alla Home',
      currency: 'CHF',
    },
    product: {
      description: 'Descrizione',
      denominations: 'Importi Disponibili',
      howItWorks: 'Come Funziona',
      step1: 'Scegli il tuo importo',
      step2: 'Paga in modo sicuro',
      step3: 'Ricevi il codice istantaneamente via email',
      features: 'Vantaggi',
      instantDeliveryDesc: 'Codice consegnato via email entro 30-60 secondi',
      securePaymentDesc: 'Pagamento sicuro con Stripe',
      validCodesDesc: 'Codici gift card verificati e validi',
    },
    home: {
      hero: '🎮 Swiss Gamer Cards',
      heroSubtitle: 'Gift Card Gaming - Consegna Istantanea - 100% Sicuro',
      featuredProducts: 'Gift Card Popolari',
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
      copyright: '© 2026 Swiss Gamer Cards. Made with ❤️ in Switzerland.',
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.de; // Default to German
}
