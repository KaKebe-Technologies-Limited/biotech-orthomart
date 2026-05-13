import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Truck, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero_1.jpg"
          fill
          className="object-cover object-center"
          priority
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-transparent" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold mb-4">
              Orthopaedic Solutions
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-6">
              Precision Care.<br />
              <span className="text-brand-gold">Better Recovery.</span>
            </h1>
            <p className="font-sans text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              Sourcing CE and FDA approved implants, orthotics, and surgical instruments
              from world-class manufacturers — delivered to Uganda's healthcare institutions.
            </p>
            <div className="flex items-center gap-4 mb-10 text-white/60 text-xs font-sans tracking-wide uppercase">
              <span>CE/FDA Approved</span><span className="text-white/30">·</span>
              <span>Kampala-Based</span><span className="text-white/30">·</span>
              <span>Two Branches</span><span className="text-white/30">·</span>
              <span>Free Delivery Available</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/shop"
                className="bg-brand-blue text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-brand-blue/90 transition-colors"
              >
                Explore Products →
              </Link>
              <Link
                href="/contact"
                className="border border-white/60 text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:flex gap-3">
          {['Implants & Trauma', 'Mobility Aids', 'Surgical Instruments'].map(item => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center text-white text-xs font-sans w-36 hover:bg-white/20 transition cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signal Strip */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-4">Certified Quality</h3>
              <p className="font-sans text-brand-muted">All our products are CE and FDA approved, ensuring the highest standards of safety.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-4">Fast Delivery</h3>
              <p className="font-sans text-brand-muted">Reliable logistics network to ensure your medical supplies reach you on time.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-4">24/7 Technical Support</h3>
              <p className="font-sans text-brand-muted">Our dedicated team is always ready to assist you with your inquiries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
