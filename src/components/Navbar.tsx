"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useQuoteBasket } from "@/store/useQuoteBasket";
import { useEffect, useState } from "react";
import QuoteDrawer from "@/components/QuoteDrawer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useQuoteBasket((state) => state.totalItems());
  const openDrawer = useQuoteBasket((state) => state.openDrawer);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden space-x-8 lg:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans font-medium text-sm text-brand-dark hover:text-brand-blue transition-colors"
              >
                {label}
              </Link>
            ))}
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
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 hover:bg-brand-surface rounded-full transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen
                ? <X className="h-5 w-5 text-brand-dark" />
                : <Menu className="h-5 w-5 text-brand-dark" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav className="absolute top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-2xl flex flex-col pt-20 pb-8 px-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-brand-surface transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-brand-dark" />
            </button>
            <div className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans font-medium text-lg text-brand-dark hover:text-brand-blue py-3 border-b border-brand-light transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href="/quote"
              onClick={() => setMobileOpen(false)}
              className="mt-8 bg-brand-blue text-white font-sans font-semibold text-sm px-5 py-3 rounded-full hover:bg-brand-blue/90 transition-colors text-center"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}

      <QuoteDrawer />
    </>
  );
}
