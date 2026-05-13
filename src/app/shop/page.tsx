"use client";

import { useState, useMemo } from "react";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Implants",
  "Orthotics",
  "Prosthetics",
  "Mobility Aids",
  "Surgical Instruments",
  "Consumables",
  "Orthoses",
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col">
      {/* Page header band */}
      <section className="bg-brand-surface border-b border-brand-light py-14">
        <div className="container mx-auto px-4">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
            Products
          </p>
          <h1 className="font-serif text-5xl text-brand-dark mb-3">
            Everything we carry
          </h1>
          <p className="font-sans text-brand-muted">
            {products.length} products · CE/FDA approved · sourced from
            world-class manufacturers
          </p>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-20 bg-white border-b border-brand-light shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-sans font-medium transition-all",
                activeCategory === cat
                  ? "bg-brand-dark text-white shadow-sm"
                  : "bg-brand-surface text-brand-muted hover:text-brand-dark hover:bg-brand-light"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-sans text-brand-muted">
              No products in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
