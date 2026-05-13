"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/store/useCart";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, totalItems } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-brand-surface rounded-full">
            <ShoppingBag className="h-12 w-12 text-brand-muted" />
          </div>
        </div>
        <h1 className="font-serif text-3xl text-brand-dark mb-4">Your quote basket is empty</h1>
        <p className="font-sans text-brand-muted mb-8">Browse our products and add items to request a quote.</p>
        <Link
          href="/shop"
          className="inline-block bg-brand-blue text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-brand-blue/90 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl text-brand-dark mb-12">Your Quote ({totalItems()} items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white border border-brand-light rounded-2xl">
              <div className="h-24 w-24 bg-brand-surface rounded-xl flex items-center justify-center p-4 relative overflow-hidden shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-serif text-lg text-brand-dark">{item.name}</h3>
              </div>
              <div className="flex items-center gap-4 bg-brand-surface p-2 rounded-full border border-brand-light">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 hover:bg-white rounded-full transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-sans font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-white rounded-full transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-brand-muted hover:text-red-500 p-2 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-brand-surface p-8 rounded-3xl border border-brand-light h-fit">
          <h2 className="font-serif text-xl text-brand-dark mb-6">Quote Summary</h2>
          <p className="font-sans text-sm text-brand-muted mb-8">
            No payment required — we'll contact you with pricing after reviewing your quote request.
          </p>
          <Link
            href="/checkout"
            className="w-full bg-brand-blue text-white font-sans font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-colors"
          >
            Submit Quote Request <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/shop"
            className="w-full mt-4 text-center block font-sans text-sm font-medium text-brand-muted hover:text-brand-blue transition-colors"
          >
            Continue Browsing
          </Link>
        </div>
      </div>
    </div>
  );
}
