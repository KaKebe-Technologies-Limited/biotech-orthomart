import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-blue py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/orthopedic.png')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Premium Orthopaedic Solutions for Better Recovery
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Sourcing CE/FDA approved implants, orthotics, and trauma devices from world-class manufacturers.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Shop Now <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Certified Quality</h3>
              <p className="text-brand-muted">All our products are CE and FDA approved, ensuring the highest standards of safety.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Fast Delivery</h3>
              <p className="text-brand-muted">Reliable logistics network to ensure your medical supplies reach you on time.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">24/7 Support</h3>
              <p className="text-brand-muted">Our dedicated team is always ready to assist you with your inquiries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
