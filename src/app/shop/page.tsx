"use client";

import Link from "next/link";
import { Plus, ShoppingCart } from "lucide-react";
import products from "@/data/products.json";
import { useCart } from "@/store/useCart";

export default function ShopPage() {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Our Products</h1>
          <p className="text-brand-muted mt-2">Discover our premium range of orthopaedic solutions.</p>
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border rounded-lg bg-white">
            <option>All Categories</option>
            <option>Implant</option>
            <option>Orthotic</option>
            <option>Brace</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-8">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border">
                {product.category}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-brand-dark group-hover:text-brand-blue transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-brand-muted mt-2 line-clamp-2">
                {product.description}
              </p>
              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="font-bold text-xl text-brand-blue">
                  UGX {product.price.toLocaleString()}
                </span>
                <button
                  onClick={() => addItem({ ...product, quantity: 1 })}
                  className="p-3 bg-brand-orange text-white rounded-full hover:scale-110 transition-transform active:scale-95"
                  title="Add to cart"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
