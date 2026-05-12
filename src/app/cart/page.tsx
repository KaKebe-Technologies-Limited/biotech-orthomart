"use client";

import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/store/useCart";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-gray-100 rounded-full">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Your cart is empty</h1>
        <p className="text-brand-muted mb-8">Looks like you haven't added any orthopaedic supplies yet.</p>
        <Link
          href="/shop"
          className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-dark mb-12">Shopping Cart ({totalItems()})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-md-2 space-y-6 lg:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white border rounded-2xl">
              <div className="h-24 w-24 bg-gray-50 rounded-xl flex items-center justify-center p-4">
                <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-lg text-brand-dark">{item.name}</h3>
                <p className="text-brand-blue font-semibold mt-1">UGX {item.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-full border">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 hover:bg-white rounded-full transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-bold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 hover:bg-white rounded-full transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="text-right min-w-[120px]">
                <p className="font-bold text-lg">UGX {(item.price * item.quantity).toLocaleString()}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-600 p-2"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gray-50 p-8 rounded-3xl border h-fit">
          <h2 className="text-xl font-bold text-brand-dark mb-6">Order Summary</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-brand-muted">
              <span>Subtotal</span>
              <span>UGX {totalPrice().toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-brand-muted">
              <span>Delivery</span>
              <span className="text-brand-green font-medium">Calculated at checkout</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-xl text-brand-dark">
              <span>Total</span>
              <span>UGX {totalPrice().toLocaleString()}</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="w-full bg-brand-orange text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
          >
            Proceed to Checkout <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/shop"
            className="w-full mt-4 text-center block text-sm font-medium text-brand-muted hover:text-brand-blue"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
