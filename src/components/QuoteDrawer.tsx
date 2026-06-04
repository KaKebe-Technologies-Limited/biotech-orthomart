"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, MessageCircle } from "lucide-react";
import { useQuoteBasket } from "@/store/useQuoteBasket";
import { useEffect } from "react";

export default function QuoteDrawer() {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, totalItems } =
    useQuoteBasket();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const whatsappUrl = () => {
    const productList = items
      .map((i) => `${i.name} × ${i.quantity}`)
      .join("%0A");
    return `https://wa.me/256791987356?text=Hello%20Biotech%20Orthomart%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20the%20following%3A%0A${productList}`;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark/40 z-40 backdrop-blur-sm"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        <header className="flex items-center justify-between p-6 border-b border-brand-light">
          <h2 className="font-serif text-2xl text-brand-dark">
            Your Quote ({totalItems()} {totalItems() === 1 ? "item" : "items"})
          </h2>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-full hover:bg-brand-surface transition-colors"
            aria-label="Close quote drawer"
          >
            <X className="w-5 h-5 text-brand-dark" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-brand-muted" />
              </div>
              <p className="font-sans text-brand-muted text-sm">
                No items in your quote yet.
              </p>
              <button
                onClick={closeDrawer}
                className="mt-4 font-sans text-sm font-medium text-brand-blue hover:underline"
              >
                Browse Products
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-brand-surface rounded-lg shrink-0 relative overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                    alt={item.name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-brand-gold">
                    {item.category}
                  </p>
                  <p className="font-sans font-medium text-brand-dark text-sm truncate">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex items-center gap-1 bg-brand-surface rounded-full px-1 py-0.5 border border-brand-light">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-white rounded-full transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-brand-dark" />
                      </button>
                      <span className="w-6 text-center font-sans text-sm font-semibold text-brand-dark">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-white rounded-full transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-brand-dark" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-brand-muted hover:text-red-500 text-xs ml-auto transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <footer className="p-6 border-t border-brand-light space-y-3">
            <p className="font-sans text-xs text-brand-muted text-center">
              No payment required — we&apos;ll contact you with pricing
            </p>
            <Link
              href="/quote"
              onClick={closeDrawer}
              className="block w-full bg-brand-blue text-white font-sans font-semibold text-center py-3.5 rounded-full hover:bg-brand-blue/90 transition-colors"
            >
              Submit Quote Request
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border border-green-600 text-green-700 font-sans font-semibold py-3 rounded-full hover:bg-green-50 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Request via WhatsApp
            </a>
          </footer>
        )}
      </aside>
    </>
  );
}
