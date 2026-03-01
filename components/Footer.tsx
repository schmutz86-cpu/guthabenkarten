'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { useSiteConfig } from '@/lib/config';
import { getDomainSpecificContent } from '@/lib/i18n';

export default function Footer() {
  const { language, t } = useLanguage();
  const site = useSiteConfig();
  const domainContent = getDomainSpecificContent(site.domain, language);

  // Determine which trust badges to show based on domain
  const isGermanSite = site.domain.includes('sofortvoucher');
  const isSwissSite = site.domain.includes('guthabenkarten');

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      {/* Trust Badges */}
      <div className="border-b border-slate-800 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Secure Connection */}
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-xl">🔒</span>
              <span className="text-xs sm:text-sm font-medium">
                {language === 'de' ? 'Sichere Verbindung' : 'Secure Connection'}
              </span>
            </div>

            {/* Instant Delivery */}
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-xl">⚡</span>
              <span className="text-xs sm:text-sm font-medium">
                {language === 'de' ? 'Digitale Lieferung' : 'Digital Delivery'}
              </span>
            </div>

            {/* German Support */}
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-xl">🇩🇪</span>
              <span className="text-xs sm:text-sm font-medium">
                {language === 'de' ? 'Deutschsprachiger Support' : 'German Support'}
              </span>
            </div>

            {/* Location Badge */}
            {isGermanSite && (
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-xl">🇩🇪</span>
                <span className="text-xs sm:text-sm font-medium">
                  {language === 'de' ? 'Für Deutschland' : 'For Germany'}
                </span>
              </div>
            )}
            {isSwissSite && (
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-xl">🇨🇭</span>
                <span className="text-xs sm:text-sm font-medium">
                  {language === 'de' ? 'Für die Schweiz' : 'For Switzerland'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-b border-slate-800 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <span className="text-slate-400 text-xs">
              {language === 'de' ? 'Sichere Zahlung:' : 'Secure Payment:'}
            </span>
            {isGermanSite && (
              <>
                <span className="bg-slate-700 px-2 py-1 rounded text-xs font-medium text-white">SOFORT</span>
                <span className="bg-slate-700 px-2 py-1 rounded text-xs font-medium text-white">Giropay</span>
              </>
            )}
            {isSwissSite && (
              <span className="bg-red-700 px-2 py-1 rounded text-xs font-medium text-white">TWINT</span>
            )}
            <span className="bg-blue-700 px-2 py-1 rounded text-xs font-medium text-white">PayPal</span>
            <span className="bg-slate-700 px-2 py-1 rounded text-xs font-medium text-white">Visa</span>
            <span className="bg-slate-700 px-2 py-1 rounded text-xs font-medium text-white">Mastercard</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">{site.name}</h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              {domainContent.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm mb-2 sm:mb-3">{t.footer.support}</h4>
            <ul className="text-slate-400 text-xs sm:text-sm space-y-1 sm:space-y-2">
              <li><Link href="/faq" className="hover:text-white">{t.footer.faq}</Link></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-white">{t.footer.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm mb-2 sm:mb-3">{t.footer.legal}</h4>
            <ul className="text-slate-400 text-xs sm:text-sm space-y-1 sm:space-y-2">
              <li><Link href="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link href="/agb" className="hover:text-white">{t.footer.terms}</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white">{t.footer.privacy}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-4 sm:pt-6 text-center text-slate-500 text-xs">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
