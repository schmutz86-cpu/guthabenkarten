import Link from 'next/link';
import products from '@/data/products.json';
import { CartButton } from '@/components/CartButton';

export default function HomePage() {
  const featured = products.filter(p => p.tags.includes('beliebt')).slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
            Guthabenkarten.ch
          </Link>
          <CartButton />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Guthabenkarten.ch
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Gaming, Streaming & Shopping Cards – Sofort per E-Mail – 100% Sicher
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <span className="bg-green-500/20 text-green-300 px-6 py-3 rounded-full text-sm font-semibold border border-green-500/30">
            ✓ Sofortlieferung (30-60 Sek.)
          </span>
          <span className="bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold border border-blue-500/30">
            ✓ CHF Preise - Keine Gebühren
          </span>
          <span className="bg-purple-500/20 text-purple-300 px-6 py-3 rounded-full text-sm font-semibold border border-purple-500/30">
            ✓ 24/7 Verfügbar
          </span>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          🔥 Beliebteste Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/produkt/${product.id}`}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all hover:scale-105 border border-white/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20"
            >
              {/* Product Image Placeholder */}
              <div className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl h-48 mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-white/60 text-6xl font-bold group-hover:scale-110 transition-transform">
                  {product.brand}
                </div>
                <span className="absolute top-3 right-3 bg-yellow-500/90 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  Beliebt
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {product.description.de}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-300">
                  {product.price.toFixed(2)} CHF
                </span>
                <span className="text-green-400 text-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Verfügbar
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Alle Guthabenkarten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/produkt/${product.id}`}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white/80 font-bold text-xs">{product.brand.slice(0, 2)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate group-hover:text-purple-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-xs capitalize">{product.category}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-xs mb-3 line-clamp-2">
                {product.description.de}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-purple-300 font-bold">
                  {product.price.toFixed(2)} CHF
                </span>
                {product.inStock && (
                  <span className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Verfügbar
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-3">Sofortlieferung</h3>
            <p className="text-gray-300">
              Code per E-Mail in 30-60 Sekunden. Keine Wartezeit, sofort einsatzbereit.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-6xl mb-4">🇨🇭</div>
            <h3 className="text-2xl font-bold text-white mb-3">Swiss Made</h3>
            <p className="text-gray-300">
              CHF Preise, Schweizer Zahlungsmethoden (Twint), keine Umrechnungsgebühren.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-3">100% Sicher</h3>
            <p className="text-gray-300">
              Sichere Zahlung via Stripe, geprüfte Codes, Geld-zurück-Garantie.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h4 className="text-white font-bold text-xl mb-3">Guthabenkarten.ch</h4>
              <p className="text-gray-300 text-sm mb-4">
                Ihr Schweizer Online-Shop für Gaming, Streaming und Shopping Guthabenkarten. 
                Sofortlieferung, sicher und einfach – 24/7 verfügbar.
              </p>
              <p className="text-gray-400 text-xs">
                Made with ❤️ in Switzerland
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Support</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><Link href="/faq" className="hover:text-purple-300 transition-colors">FAQ</Link></li>
                <li><Link href="/kontakt" className="hover:text-purple-300 transition-colors">Kontakt</Link></li>
                <li><Link href="/rueckerstattung" className="hover:text-purple-300 transition-colors">Rückerstattung</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Rechtliches</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li><Link href="/agb" className="hover:text-purple-300 transition-colors">AGB</Link></li>
                <li><Link href="/datenschutz" className="hover:text-purple-300 transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-purple-300 transition-colors">Impressum</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            © 2026 Guthabenkarten.ch. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
