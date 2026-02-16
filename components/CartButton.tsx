'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CartButton() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    updateCount();
    
    const handleCartUpdate = () => updateCount();
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const updateCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
    setItemCount(total);
  };

  return (
    <Link
      href="/warenkorb"
      className="relative flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-xl transition-all hover:scale-105"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span className="text-white font-semibold">Warenkorb</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
