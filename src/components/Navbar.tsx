"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { useQuoteBasket } from "@/store/useQuoteBasket";
import { useEffect, useState } from "react";
import QuoteDrawer from "@/components/QuoteDrawer";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useQuoteBasket((state) => state.totalItems());
  const openDrawer = useQuoteBasket((state) => state.openDrawer);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white border-b border-brand-light transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Biotech Orthomart"
              width={140}
              height={40}
              style={{ width: "auto", height: "2.5rem" }}
            />
          </Link>

          <nav className="hidden space-x-8 lg:flex">
            <Link
              href="/"
              className="font-sans font-medium text-sm text-brand-dark hover:text-brand-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="font-sans font-medium text-sm text-brand-dark hover:text-brand-blue transition-colors"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="font-sans font-medium text-sm text-brand-dark hover:text-brand-blue transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="font-sans font-medium text-sm text-brand-dark hover:text-brand-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-sans font-medium text-sm text-brand-dark hover:text-brand-blue transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:bg-brand-surface rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-brand-dark" />
            </button>

            {/* Quote basket icon — opens drawer */}
            <button
              onClick={openDrawer}
              className="relative p-2 hover:bg-brand-surface rounded-full transition-colors"
              aria-label="Open quote basket"
            >
              <ShoppingBag className="h-5 w-5 text-brand-dark" />
              {mounted && totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-brand-dark">
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              href="/quote"
              className="hidden lg:block bg-brand-blue text-white font-sans font-semibold text-sm px-5 py-2 rounded-full hover:bg-brand-blue/90 transition-colors"
            >
              Request Quote
            </Link>

            <button
              className="lg:hidden p-2 hover:bg-brand-surface rounded-full transition-colors"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5 text-brand-dark" />
            </button>
          </div>
        </div>
      </header>

      <QuoteDrawer />
    </>
  );
}
