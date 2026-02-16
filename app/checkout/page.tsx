'use client';

import { useState } from 'react';
import { useCart } from '@/lib/CartContext';
import { useLanguage } from '@/lib/LanguageContext';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // TODO: Integrate with Stripe payment
    // For now, just show success
    alert(`Order placed! Email: ${formData.email}\nTotal: CHF ${totalPrice.toFixed(2)}\n\n(Payment integration coming soon)`);
    
    clearCart();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/cart')}
            className="text-blue-300 hover:text-blue-200 mb-4 flex items-center gap-2"
          >
            ← Back to Cart
          </button>
          <h1 className="text-4xl font-bold text-white">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Info */}
              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-6">Customer Information</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                    <p className="text-slate-400 text-sm mt-1">
                      Gift codes will be sent to this email
                    </p>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
                
                <div className="bg-yellow-900/20 border border-yellow-600/50 rounded-lg p-4 mb-4">
                  <p className="text-yellow-300 text-sm">
                    🚧 <strong>Coming Soon:</strong> Stripe payment integration will be added here
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-slate-300">Powered by</span>
                  <div className="bg-white rounded px-3 py-1 text-purple-600 font-bold">
                    Stripe
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-slate-600"
                  />
                  <span className="text-slate-300 text-sm">
                    I accept the <a href="/terms" className="text-blue-400 hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>. I understand that gift codes are non-refundable once delivered.
                  </span>
                </label>
                {errors.acceptTerms && (
                  <p className="text-red-400 text-sm mt-2 ml-8">{errors.acceptTerms}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all"
              >
                Place Order - {t.common.currency} {totalPrice.toFixed(2)} →
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.denomination}`}
                    className="flex justify-between text-sm"
                  >
                    <div>
                      <div className="text-white font-semibold">{item.productName}</div>
                      <div className="text-slate-400">
                        {t.common.currency} {item.denomination} × {item.quantity}
                      </div>
                    </div>
                    <div className="text-white font-semibold">
                      {t.common.currency} {(item.denomination * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-700 pt-4 space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal:</span>
                  <span>{t.common.currency} {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Processing:</span>
                  <span className="text-green-400">FREE</span>
                </div>
                <div className="border-t border-slate-700 pt-3 flex justify-between">
                  <span className="text-xl font-bold text-white">Total:</span>
                  <span className="text-2xl font-bold text-white">
                    {t.common.currency} {totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    <span className="text-sm text-slate-300">Delivery in 30-60 seconds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔒</span>
                    <span className="text-sm text-slate-300">Secure payment with Stripe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm text-slate-300">100% valid codes guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
