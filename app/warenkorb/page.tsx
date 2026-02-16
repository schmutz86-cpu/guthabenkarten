'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type CartItem = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  brand: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadCart();
    
    const handleCartUpdate = () => loadCart();
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const loadCart = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!mounted) {
    return null; // Avoid hydration mismatch
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

      {/* Cart Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Warenkorb</h1>

        {cart.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
            <svg className="w-24 h-24 mx-auto mb-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-white text-xl mb-6">Dein Warenkorb ist leer</p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all transform hover:scale-105"
            >
              Jetzt einkaufen
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex gap-4"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white/60 font-bold text-sm">{item.brand}</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-purple-300 font-bold text-xl mb-4">
                      {item.price.toFixed(2)} {item.currency}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center justify-center font-bold"
                          aria-label="Menge verringern"
                        >
                          −
                        </button>
                        <span className="w-12 text-center text-white font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-colors flex items-center justify-center font-bold"
                          aria-label="Menge erhöhen"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Entfernen
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-red-400 hover:text-red-300 transition-colors text-sm flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Warenkorb leeren
              </button>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 sticky top-4">
                <h2 className="text-xl font-semibold text-white mb-4">Zusammenfassung</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Zwischensumme</span>
                    <span>{total.toFixed(2)} CHF</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>MwSt. (inkl.)</span>
                    <span>{(total * 0.077).toFixed(2)} CHF</span>
                  </div>
                  <div className="border-t border-white/20 pt-3 flex justify-between text-white text-xl font-bold">
                    <span>Total</span>
                    <span>{total.toFixed(2)} CHF</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/50 mb-4">
                  Zur Kasse
                </button>

                <Link
                  href="/"
                  className="block text-center text-purple-300 hover:text-purple-100 text-sm transition-colors"
                >
                  ← Weiter einkaufen
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-white/20 space-y-3 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Sichere Zahlung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Sofortige Lieferung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Per E-Mail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
