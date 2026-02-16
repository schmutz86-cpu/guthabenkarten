import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import products from '@/data/products.json';
import { AddToCartButton } from '@/components/AddToCartButton';
import { ProductBadges } from '@/components/ProductBadges';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    return {
      title: 'Produkt nicht gefunden',
    };
  }

  return {
    title: `${product.name} | Guthabenkarten.ch`,
    description: product.description.de,
    openGraph: {
      title: product.name,
      description: product.description.de,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Produkt nicht gefunden</h1>
          <Link href="/" className="text-purple-300 hover:text-purple-100 underline">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
            Guthabenkarten.ch
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <main className="container mx-auto px-4 py-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="relative aspect-[3/2] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/40 text-6xl font-bold">
                  {product.brand}
                </div>
              </div>
            </div>
            <ProductBadges product={product} />
          </div>

          {/* Product Info */}
          <div className="text-white space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-300 text-lg">{product.description.de}</p>
            </div>

            {/* Price */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-5xl font-bold">{product.price.toFixed(2)}</span>
                  <span className="text-2xl ml-2">CHF</span>
                </div>
                {product.inStock && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Verfügbar
                  </span>
                )}
              </div>
              <AddToCartButton product={product} />
            </div>

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 space-y-4">
              <h2 className="text-xl font-semibold mb-4">Produktdetails</h2>
              
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Sofortige Lieferung: {product.deliveryTime}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Per E-Mail zugestellt</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Region: {product.region}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Sichere Zahlung mit Stripe</span>
              </div>
            </div>

            {/* How it works */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">So funktioniert's</h2>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>Produkt in den Warenkorb legen</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Sicher mit Kreditkarte oder Twint bezahlen</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Code sofort per E-Mail erhalten</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span>Code einlösen und geniessen!</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
