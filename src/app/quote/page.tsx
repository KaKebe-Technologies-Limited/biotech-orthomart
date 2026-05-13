"use client";

import { useQuoteBasket } from "@/store/useQuoteBasket";
import { useEffect, useState } from "react";
import { MessageCircle, ChevronRight, FileText, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function QuotePage() {
  const [mounted, setMounted] = useState(false);
  const { items } = useQuoteBasket();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    message: "",
    method: "form",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const whatsappUrl = () => {
    const productList = items
      .map((i) => `${i.name} × ${i.quantity}`)
      .join("%0A");
    const msg = `Hello Biotech Orthomart, I'd like to request a quote for the following:%0A${productList}%0A%0AName: ${encodeURIComponent(formData.name)}%0AOrganisation: ${encodeURIComponent(formData.organisation)}%0APhone: ${encodeURIComponent(formData.phone)}`;
    return `https://wa.me/256392392921?text=${msg}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.method === "whatsapp") {
      window.open(whatsappUrl(), "_blank");
    } else {
      alert("Quote request submitted. Our team will contact you shortly.");
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-brand-surface rounded-full">
            <ShoppingBag className="h-12 w-12 text-brand-muted" />
          </div>
        </div>
        <h1 className="font-serif text-3xl text-brand-dark mb-4">
          Your quote basket is empty
        </h1>
        <p className="font-sans text-brand-muted mb-8">
          Browse our products and add items to request a quote.
        </p>
        <Link
          href="/products"
          className="inline-block bg-brand-blue text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-brand-blue/90 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
        Quote Request
      </p>
      <h1 className="font-serif text-4xl text-brand-dark mb-2">
        Submit Quote Request
      </h1>
      <p className="font-sans text-brand-muted mb-12">
        Fill in your details and we&apos;ll get back to you with pricing.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="font-sans text-lg font-semibold text-brand-dark mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white text-sm">
                1
              </span>
              Your Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="p-4 border border-brand-light rounded-xl bg-brand-surface focus:ring-2 focus:ring-brand-blue outline-none font-sans"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="p-4 border border-brand-light rounded-xl bg-brand-surface focus:ring-2 focus:ring-brand-blue outline-none font-sans"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="p-4 border border-brand-light rounded-xl bg-brand-surface focus:ring-2 focus:ring-brand-blue outline-none font-sans"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Organisation / Hospital (optional)"
                className="p-4 border border-brand-light rounded-xl bg-brand-surface focus:ring-2 focus:ring-brand-blue outline-none font-sans"
                value={formData.organisation}
                onChange={(e) =>
                  setFormData({ ...formData, organisation: e.target.value })
                }
              />
            </div>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-brand-dark mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white text-sm">
                2
              </span>
              Additional Notes
            </h2>
            <textarea
              placeholder="Any specific requirements or questions?"
              rows={3}
              className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface focus:ring-2 focus:ring-brand-blue outline-none font-sans"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-brand-dark mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white text-sm">
                3
              </span>
              How would you like to proceed?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label
                className={`flex items-center gap-4 p-6 border rounded-2xl cursor-pointer transition-all ${
                  formData.method === "form"
                    ? "border-brand-blue bg-brand-blue/5"
                    : "border-brand-light hover:border-brand-blue/40"
                }`}
              >
                <input
                  type="radio"
                  name="method"
                  className="hidden"
                  checked={formData.method === "form"}
                  onChange={() => setFormData({ ...formData, method: "form" })}
                />
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FileText className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-brand-dark">
                    Email Quote Request
                  </p>
                  <p className="font-sans text-xs text-brand-muted">
                    We&apos;ll reply within 24 hours
                  </p>
                </div>
              </label>

              <label
                className={`flex items-center gap-4 p-6 border rounded-2xl cursor-pointer transition-all ${
                  formData.method === "whatsapp"
                    ? "border-brand-blue bg-brand-blue/5"
                    : "border-brand-light hover:border-brand-blue/40"
                }`}
              >
                <input
                  type="radio"
                  name="method"
                  className="hidden"
                  checked={formData.method === "whatsapp"}
                  onChange={() =>
                    setFormData({ ...formData, method: "whatsapp" })
                  }
                />
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <MessageCircle className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-brand-dark">
                    WhatsApp
                  </p>
                  <p className="font-sans text-xs text-brand-muted">
                    Chat directly with our team
                  </p>
                </div>
              </label>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-brand-blue text-white font-sans font-semibold py-5 rounded-2xl text-lg flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-colors"
          >
            {formData.method === "whatsapp"
              ? "Send via WhatsApp"
              : "Submit Quote Request"}
            <ChevronRight className="h-5 w-5" />
          </button>
        </form>

        {/* Quote items sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-brand-surface p-8 rounded-3xl border border-brand-light sticky top-24">
            <h3 className="font-serif text-lg text-brand-dark mb-6">
              Items in Your Quote
            </h3>
            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="font-sans text-brand-muted">
                    {item.name}
                  </span>
                  <span className="font-sans font-medium text-brand-dark">
                    × {item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-sans text-xs text-brand-muted text-center border-t border-brand-light pt-4">
              No payment required — we&apos;ll contact you with pricing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
