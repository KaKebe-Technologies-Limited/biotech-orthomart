"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

const CATEGORIES: { label: string; value: string }[] = [
  { label: "All", value: "All" },
  { label: "Implants", value: "Implant" },
  { label: "Orthotics", value: "Orthotic" },
  { label: "Braces", value: "Brace" },
  { label: "Crutches", value: "Crutches" },
  { label: "Prosthetics", value: "Prosthetics" },
  { label: "Surgical Instruments", value: "Surgical Instruments" },
  { label: "Consumables", value: "Consumables" },
];

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const initialQuery = searchParams.get("q");

  const [activeCategory, setActiveCategory] = useState(
    initialCategory && CATEGORIES.some((c) => c.value === initialCategory) ? initialCategory : "All"
  );
  const [searchQuery, setSearchQuery] = useState(initialQuery ?? "");

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

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
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-sans font-medium transition-all",
                  activeCategory === value
                    ? "bg-brand-dark text-white shadow-sm"
                    : "bg-brand-surface text-brand-muted hover:text-brand-dark hover:bg-brand-light"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-10 py-2 bg-brand-surface border border-brand-light rounded-full text-sm font-sans focus:outline-none focus:border-brand-blue transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:bg-brand-light rounded-full transition-colors"
              >
                <X className="h-3 w-3 text-brand-muted" />
              </button>
            )}
          </div>
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
