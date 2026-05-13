"use client";

import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import products from "@/data/products.json";
import { useCart } from "@/store/useCart";

export default function ShopPage() {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="flex flex-col">
      <section className="bg-brand-surface border-b border-brand-light py-14">
        <div className="container mx-auto px-4">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">Products</p>
          <h1 className="font-serif text-5xl text-brand-dark mb-3">Everything we carry</h1>
          <p className="font-sans text-brand-muted">
            {products.length} products · CE/FDA approved · sourced from world-class manufacturers
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex gap-2 flex-wrap">
            {['All Categories', 'Implant', 'Orthotic', 'Brace'].map(cat => (
              <button key={cat} className="px-4 py-1.5 rounded-full text-sm font-sans font-medium bg-brand-surface text-brand-muted hover:text-brand-dark hover:bg-brand-light transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <article key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer border border-brand-light">
              <div className="relative aspect-square bg-brand-surface overflow-hidden flex items-center justify-center p-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 z-10 bg-brand-blue text-white text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-1.5">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl text-brand-dark leading-snug mb-2 group-hover:text-brand-blue transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-brand-muted line-clamp-2 mb-4 flex-1">
                  {product.description}
                </p>
                <button
                  onClick={() => addItem({ ...product, quantity: 1 })}
                  className="w-full font-sans font-semibold text-sm py-2.5 rounded-lg border border-brand-blue text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200"
                >
                  Add to Quote
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
