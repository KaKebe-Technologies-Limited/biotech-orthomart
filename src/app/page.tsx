import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  Clock,
  Activity,
  Shield,
  PersonStanding,
  Wrench,
  Package,
  Stethoscope,
  Building2,
  Pill,
  Landmark,
  Heart,
  User,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    label: "Implants",
    image: "/images/implant-1.jpg",
    Icon: Activity,
    slug: "Implant",
  },
  {
    label: "Orthotics",
    image: "/images/orthotic-1.jpg",
    Icon: Shield,
    slug: "Orthotic",
  },
  {
    label: "Braces",
    image: "/images/crutch-1.jpg",
    Icon: PersonStanding,
    slug: "Brace",
  },
  {
    label: "Crutches",
    image: "/images/crutch-3.jpg",
    Icon: PersonStanding,
    slug: "Crutches",
  },
  {
    label: "Surgical Instruments",
    image: "/images/shelf-1.jpg",
    Icon: Stethoscope,
    slug: "Surgical Instruments",
  },
  {
    label: "Consumables",
    image: "/images/shelf-2.jpg",
    Icon: Package,
    slug: "Consumables",
  },
];

const whoWeServe = [
  { label: "Hospitals & Clinics", Icon: Building2 },
  { label: "Pharmacies", Icon: Pill },
  { label: "Government Institutions", Icon: Landmark },
  { label: "Private Healthcare", Icon: Stethoscope },
  { label: "NGOs", Icon: Heart },
  { label: "Individual Clients", Icon: User },
];

const testimonials = [
  {
    quote:
      "Biotech Orthomart has been our trusted supplier for over three years. Their implant quality is consistently excellent and their team is always responsive.",
    name: "Dr. Sarah Namukasa",
    role: "Orthopaedic Surgeon, Mulago National Referral Hospital",
  },
  {
    quote:
      "The quote process is seamless and their delivery timelines are reliable. I recommend them to every clinic manager I know.",
    name: "James Okello",
    role: "Procurement Manager, Uganda Red Cross",
  },
  {
    quote:
      "As a physiotherapy practice, we depend on quality orthotics. Biotech Orthomart's range and CE certification give us total confidence in what we prescribe.",
    name: "Grace Atim",
    role: "Lead Physiotherapist, Heal Africa Clinic",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero_1.jpg"
          fill
          sizes="100vw"
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
                href="/products"
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
          {["Implants & Trauma", "Mobility Aids", "Surgical Instruments"].map(item => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center text-white text-xs font-sans w-36 hover:bg-white/20 transition cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── A: Trust Signal Strip ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-4">Certified Quality</h3>
              <p className="font-sans text-brand-muted">All our products are CE and FDA approved, ensuring the highest standards of safety and efficacy.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-4">Fast Delivery</h3>
              <p className="font-sans text-brand-muted">Reliable logistics across Uganda so your medical supplies arrive when patients need them.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-4">24/7 Technical Support</h3>
              <p className="font-sans text-brand-muted">Our dedicated team is always ready to assist with product selection and clinical queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── B: Company Introduction ───────────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-brand-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
                About Us
              </p>
              <h2 className="font-serif text-4xl text-brand-dark leading-tight mb-6">
                Uganda's trusted source for orthopaedic excellence
              </h2>
              <p className="font-sans text-brand-muted leading-relaxed mb-4">
                Biotech Orthomart Ltd is a Kampala-based importer and distributor of orthopaedic implants,
                orthotics, prosthetics, surgical instruments, and medical textiles. We serve hospitals,
                clinics, pharmacies, NGOs, and government institutions across Uganda from our branches
                in Kampala and Yumbe.
              </p>
              <p className="font-sans text-brand-muted leading-relaxed mb-8">
                Every device we supply carries CE or FDA certification, sourced directly from world-class
                manufacturers including Circleg and Teknimed. Our mission is to make premium orthopaedic
                care accessible to Uganda's healthcare ecosystem.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-sans font-semibold text-brand-blue border-b-2 border-brand-gold pb-0.5 hover:text-brand-dark transition-colors"
              >
                Learn about our story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right — image with floating stat card */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about_1.jpg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  alt="Biotech Orthomart team and products"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-5 border border-brand-light">
                <p className="font-serif text-3xl text-brand-blue leading-none mb-1">500+</p>
                <p className="font-sans text-sm text-brand-muted">healthcare facilities served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── C: Product Categories Grid ────────────────────────────────────── */}
      <section className="bg-brand-surface py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              Our Range
            </p>
            <h2 className="font-serif text-4xl text-brand-dark">
              Comprehensive Medical Product Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ label, image, Icon, slug }) => (
              <Link
                key={label}
                href={`/products?category=${slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-light"
              >
                <div className="relative aspect-[4/3] bg-brand-surface overflow-hidden flex items-center justify-center">
                  {/* Icon — visible by default, fades on hover */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 z-10">
                    <Icon className="w-16 h-16 text-brand-blue/25" />
                  </div>
                  {/* Image — hidden by default, fades in on hover */}
                  <Image
                    src={image}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                    alt={label}
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-brand-dark group-hover:text-brand-blue transition-colors duration-200">
                    {label}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-blue transition-colors duration-200 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block bg-brand-blue text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-brand-blue/90 transition-colors"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── D: Dark Editorial / Partners ──────────────────────────────────── */}
      <section className="bg-brand-dark py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
                Our Standard
              </p>
              <h2 className="font-serif text-4xl text-white leading-tight mb-6">
                The standard behind{" "}
                <span className="text-brand-gold italic">every device.</span>
              </h2>
              <p className="font-sans text-white/70 leading-relaxed mb-8">
                Every product in our catalogue is sourced directly from certified manufacturers,
                compliant with international CE and FDA standards. We partner exclusively with
                industry leaders whose quality controls meet the demands of surgical environments.
              </p>

              {/* Partner logos */}
              <div className="flex items-center gap-6 mb-10">
                <a
                  href="https://circleg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 rounded-lg px-5 py-3 hover:border-white/50 transition-colors"
                  aria-label="Circleg website"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/circleg.svg" alt="Circleg" className="h-7 w-auto" />
                </a>
                <a
                  href="https://www.teknimed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 rounded-lg px-5 py-3 hover:border-white/50 transition-colors"
                  aria-label="Teknimed website"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.06 36.78" fill="white" className="h-7 w-auto" aria-label="Teknimed" role="img"><polygon points="55.12 10.23 38.55 10.23 38.55 12.85 45.37 12.85 45.37 30.19 48.3 30.19 48.3 12.85 55.12 12.85 55.12 10.23"/><path d="M59.79,14.99c-4.28,0-7.5,3.34-7.5,7.77s3.35,7.77,7.79,7.77c2.62,0,4.6-.86,6.41-2.78l.22-.23-1.85-1.58-.2.2c-1.32,1.32-2.76,1.93-4.52,1.93-2.59,0-4.53-1.66-4.94-4.16h11.84l.02-.27c.03-.34.03-.57.03-.77,0-4.71-2.93-7.88-7.3-7.88ZM59.73,17.39c2.83,0,4.14,2.12,4.45,4.21h-8.98c.42-2.5,2.25-4.21,4.53-4.21Z"/><rect x="69.04" y="9.4" width="2.84" height="20.8"/><polygon points="83.2 30.2 79.76 30.2 72.95 21.75 79.46 15.29 83.11 15.29 76.47 21.76 83.2 30.2"/><path d="M92.21,14.99c-2.01,0-3.64.73-4.84,2.17v-1.87h-2.84v14.9h2.84v-8.49c0-2.46,1.73-4.18,4.2-4.18s3.85,1.46,3.85,4.02v8.66h2.84v-9.18c0-3.66-2.38-6.03-6.05-6.03Z"/><rect x="100.86" y="9.81" width="3.16" height="2.95"/><rect x="101" y="15.29" width="2.84" height="14.9"/><path d="M124.57,14.99c-2.2,0-3.92.85-5.25,2.59-1.02-1.68-2.73-2.59-4.85-2.59-2.26,0-3.62,1.02-4.55,2.12v-1.82h-2.84v14.9h2.84v-8.46c0-2.44,1.63-4.21,3.88-4.21s3.56,1.48,3.56,3.96v8.71h2.81v-8.55c0-2.85,1.94-4.13,3.85-4.13,2.32,0,3.59,1.43,3.59,4.02v8.66h2.84v-9.15c0-3.73-2.25-6.06-5.88-6.06Z"/><path d="M139.82,14.99c-4.28,0-7.5,3.34-7.5,7.77s3.35,7.77,7.79,7.77c2.62,0,4.6-.86,6.41-2.78l.22-.23-1.85-1.58-.2.2c-1.32,1.32-2.76,1.93-4.52,1.93-2.59,0-4.53-1.66-4.94-4.16h11.84l.02-.27c.03-.34.03-.57.03-.77,0-4.71-2.93-7.88-7.3-7.88ZM139.76,17.39c2.83,0,4.14,2.12,4.45,4.21h-8.98c.42-2.5,2.25-4.21,4.53-4.21Z"/><path d="M161.23,9.4v8.07c-1.45-1.65-3.28-2.48-5.45-2.48-3.62,0-7.47,2.71-7.47,7.74v.06c0,5.01,3.85,7.71,7.47,7.71,2.18,0,3.97-.85,5.45-2.6v2.3h2.84V9.4h-2.84ZM156.18,27.99c-2.89,0-4.99-2.2-4.99-5.29s2.05-5.2,4.99-5.2c2.52,0,5.13,1.95,5.13,5.2v.06c0,3.23-2.66,5.23-5.13,5.23Z"/><path d="M29.46,0H5.7c2.44.93,4.9,1.74,7.35,2.57,4.45,1.49,8.89,3.03,13.36,4.46.96.42,2,.62,3.05.61,1.05,0,2.09-.2,3.05-.61,4.47-1.43,8.91-2.97,13.36-4.46,2.45-.82,4.91-1.64,7.35-2.57h-23.76Z"/><path d="M28.29,9.7c-.2-.11-.42-.21-.64-.29h0c-1.38-.43-2.71-.93-4.07-1.39-2.3-.77-4.61-1.53-7.21-2.38.99.94,1.35,2.31.94,3.58-.66,2.63-1.24,5.27-1.83,7.91-.91,4.04-1.81,8.08-2.7,12.12-.55,2.49-1.1,4.97-1.65,7.45l.16.07c1.58-1.89,3.16-3.78,4.74-5.68,3.34-4.01,6.67-8.01,10-12.02,1.22-1.48,2.5-2.93,3.59-4.5,1.06-1.69.46-3.88-1.32-4.88"/><path d="M15.19,9.57h0c.8-2.05-.29-4.32-2.45-5.09,0,0,0,0,0,0-3.01-1.09-6.05-2.07-9.08-3.09C2.47.99,1.28.6.08.21l-.08.16c.08.09.16.18.25.26,2.22,1.69,4.44,3.39,6.68,5.06,2.05,1.53,4.09,3.08,6.19,4.56.95.67,1.7.38,2.08-.68"/></svg>
                </a>
              </div>

              <Link
                href="/products"
                className="inline-block border border-white/40 text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-colors"
              >
                View our products
              </Link>
            </div>

            {/* Right — staggered 2-image collage */}
            <div className="relative h-[420px] hidden lg:block">
              <div className="absolute left-0 top-0 w-[58%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/orthopedic-drill.jpg"
                  fill
                  sizes="30vw"
                  className="object-cover"
                  alt="Orthopaedic surgical instruments"
                />
              </div>
              <div className="absolute right-0 bottom-0 w-[52%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-brand-dark">
                <Image
                  src="/images/orthotic-8.jpg"
                  fill
                  sizes="28vw"
                  className="object-cover"
                  alt="Premium orthotic devices"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── E: Who We Serve Preview ───────────────────────────────────────── */}
      <section className="bg-brand-surface py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              Clients
            </p>
            <h2 className="font-serif text-4xl text-brand-dark">Who We Serve</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {whoWeServe.map(({ label, Icon }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-5 flex flex-col items-center text-center gap-3 border border-brand-light hover:border-brand-blue hover:shadow-md transition-all duration-200 group"
              >
                <div className="h-12 w-12 bg-brand-blue/10 rounded-xl flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <p className="font-sans text-xs font-semibold text-brand-dark leading-snug">{label}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/who-we-serve"
              className="inline-flex items-center gap-2 font-sans font-semibold text-brand-blue border-b-2 border-brand-gold pb-0.5 hover:text-brand-dark transition-colors"
            >
              Learn more about who we serve <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── F: Testimonials ───────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl text-brand-dark">
              Trusted by healthcare professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, name, role }) => (
              <div
                key={name}
                className="bg-brand-surface rounded-2xl p-8 border border-brand-light flex flex-col"
              >
                <p className="font-sans text-brand-gold text-3xl leading-none mb-4">&ldquo;</p>
                <p className="font-serif text-xl italic text-brand-dark leading-relaxed mb-6 flex-1">
                  {quote}
                </p>
                <div>
                  <p className="font-sans font-semibold text-brand-dark text-sm">{name}</p>
                  <p className="font-sans text-brand-muted text-xs mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── G: CTA Banner ─────────────────────────────────────────────────── */}
      <section className="bg-brand-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">
            Get Started
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Ready to partner with us?
          </h2>
          <p className="font-sans text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Request a quote on any product or book a consultation with our clinical team —
            no payment required upfront.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/quote"
              className="bg-white text-brand-blue font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="border border-white/60 text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
