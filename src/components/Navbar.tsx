"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { useCart } from "@/store/useCart";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const totalItems = useCart((state) => state.totalItems());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.jpg" alt="Logo" className="h-10 w-auto" />
          <span className="hidden text-xl font-bold text-brand-blue sm:block">
            Biotech Orthomart
          </span>
        </Link>

        <nav className="hidden space-x-8 lg:flex">
          <Link href="/" className="text-sm font-medium hover:text-brand-blue">Home</Link>
          <Link href="/shop" className="text-sm font-medium hover:text-brand-blue">Store</Link>
          <Link href="/services" className="text-sm font-medium hover:text-brand-blue">Services</Link>
          <Link href="/about" className="text-sm font-medium hover:text-brand-blue">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-brand-blue">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5 text-brand-dark" />
          </button>
          <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
            <ShoppingBag className="h-5 w-5 text-brand-dark" />
            {mounted && totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="h-5 w-5 text-brand-dark" />
          </button>
        </div>
      </div>
    </header>
  );
}
