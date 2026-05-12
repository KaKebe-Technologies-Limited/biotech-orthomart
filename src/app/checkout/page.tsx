"use client";

import { useCart } from "@/store/useCart";
import { useEffect, useState } from "react";
import { Lock, MessageSquare, CreditCard, ChevronRight } from "lucide-react";

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);
  const { items, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "integrated", // integrated (Pesapal/DPO) or whatsapp
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.paymentMethod === "whatsapp") {
      const message = `Order from ${formData.name}%0AItems: ${items.map(i => `${i.name} x${i.quantity}`).join(", ")}%0ATotal: UGX ${totalPrice().toLocaleString()}%0AAddress: ${formData.address}`;
      window.open(`https://wa.me/256392392921?text=${message}`, "_blank");
    } else {
      // Logic for Pesapal/DPO redirection
      alert("Redirecting to secure payment gateway (Pesapal/DPO)...");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-dark mb-12">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <form onSubmit={handleCheckout} className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white text-sm">1</span>
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="p-4 border rounded-xl bg-white focus:ring-2 focus:ring-brand-blue outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="p-4 border rounded-xl bg-white focus:ring-2 focus:ring-brand-blue outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone Number (MTN/Airtel)"
                required
                className="p-4 border rounded-xl bg-white focus:ring-2 focus:ring-brand-blue outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white text-sm">2</span>
              Delivery Address
            </h2>
            <textarea
              placeholder="Detailed Address / Hospital Name / Office"
              required
              rows={3}
              className="w-full p-4 border rounded-xl bg-white focus:ring-2 focus:ring-brand-blue outline-none"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white text-sm">3</span>
              Payment Method
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={`flex items-center gap-4 p-6 border rounded-2xl cursor-pointer transition-all ${formData.paymentMethod === "integrated" ? "border-brand-blue bg-brand-blue/5" : "hover:border-gray-300"}`}>
                <input
                  type="radio"
                  name="payment"
                  className="hidden"
                  checked={formData.paymentMethod === "integrated"}
                  onChange={() => setFormData({ ...formData, paymentMethod: "integrated" })}
                />
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <CreditCard className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <p className="font-bold">Mobile Money / Card</p>
                  <p className="text-xs text-brand-muted">Securely pay via Pesapal</p>
                </div>
              </label>

              <label className={`flex items-center gap-4 p-6 border rounded-2xl cursor-pointer transition-all ${formData.paymentMethod === "whatsapp" ? "border-brand-green bg-brand-green/5" : "hover:border-gray-300"}`}>
                <input
                  type="radio"
                  name="payment"
                  className="hidden"
                  checked={formData.paymentMethod === "whatsapp"}
                  onChange={() => setFormData({ ...formData, paymentMethod: "whatsapp" })}
                />
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <MessageSquare className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <p className="font-bold">WhatsApp Order</p>
                  <p className="text-xs text-brand-muted">Chat with us to finalize</p>
                </div>
              </label>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
          >
            {formData.paymentMethod === "integrated" ? "Pay Securely Now" : "Send Order to WhatsApp"}
            <ChevronRight className="h-5 w-5" />
          </button>
        </form>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-8 rounded-3xl border sticky top-24">
            <h3 className="font-bold text-lg mb-6">Your Order</h3>
            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-brand-muted">{item.name} x{item.quantity}</span>
                  <span className="font-medium">UGX {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-6 space-y-3">
              <div className="flex justify-between text-brand-muted">
                <span>Subtotal</span>
                <span>UGX {totalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-xl pt-2">
                <span>Total</span>
                <span className="text-brand-blue">UGX {totalPrice().toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs text-brand-muted justify-center">
              <Lock className="h-3 w-3" />
              Secure 256-bit SSL Encrypted Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
