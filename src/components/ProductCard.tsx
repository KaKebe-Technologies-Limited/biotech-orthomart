"use client";

import Image from "next/image";
import {
  Activity,
  Shield,
  PersonStanding,
  Wrench,
  Package,
  Stethoscope,
} from "lucide-react";
import { toast } from "sonner";
import { useQuoteBasket } from "@/store/useQuoteBasket";

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  badge?: string;
}

const categoryIcons: Record<string, React.ElementType> = {
  Implant: Activity,
  Implants: Activity,
  Orthotic: Shield,
  Orthotics: Shield,
  Brace: Shield,
  Orthoses: Shield,
  Crutches: PersonStanding,
  Prosthetics: PersonStanding,
  "Mobility Aids": PersonStanding,
  "Surgical Instruments": Stethoscope,
  Consumables: Package,
  Trauma: Wrench,
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, openDrawer } = useQuoteBasket();
  const CategoryIcon = categoryIcons[product.category] ?? Package;

  function handleAddToQuote() {
    addItem({
      id: product.id,
      name: product.name,
      image: product.image,
      category: product.category,
      quantity: 1,
    });
    toast(`${product.name} added to quote`, {
      description: product.category,
      action: {
        label: "View quote",
        onClick: openDrawer,
      },
      duration: 3000,
    });
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer border border-brand-light">
      <div className="relative aspect-[4/3] bg-brand-surface overflow-hidden flex items-center justify-center">
        <Image
          src={product.image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-6 scale-100 group-hover:scale-105 transition-transform duration-300"
          alt={product.name}
        />

        {product.badge && (
          <span className="absolute top-3 left-3 z-20 bg-brand-blue text-white text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
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
          onClick={handleAddToQuote}
          className="w-full font-sans font-semibold text-sm py-2.5 rounded-lg border border-brand-blue text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200"
        >
          Add to Quote
        </button>
      </div>
    </article>
  );
}
