import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Biotech Orthomart Ltd — Kampala-based importers and distributors of world-class CE and FDA approved orthopaedic solutions, proudly serving Uganda's healthcare sector.",
  openGraph: {
    title: "About Us | Biotech Orthomart",
    description:
      "Learn about Biotech Orthomart Ltd — Kampala-based importers and distributors of world-class CE and FDA approved orthopaedic solutions.",
    images: [{ url: "/images/about_1.webp", width: 1200, height: 630, alt: "Biotech Orthomart team" }],
  },
};
import {
  ShieldCheck,
  Truck,
  Users,
  Award,
  Clock,
  Globe,
} from "lucide-react";

const leadership = [
  {
    name: "Dr Edmond O Odull, MD",
    role: "CEO & Executive Director",
    image: "/images/dr-edmond.webp",
    bio: "A specialist in biotechnology and orthopaedics, leading Biotech Orthomart's mission to advance musculoskeletal health through innovation.",
  },
  {
    name: "Operations Manager",
    role: "Kampala Branch",
    image: "/images/man-2.webp",
    bio: "Overseeing procurement, logistics, and supplier relationships to ensure reliable supply of CE/FDA-approved products to our healthcare partners.",
    attribution: { name: "Junior REIS", url: "https://unsplash.com/@juniorreisfoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", photoUrl: "https://unsplash.com/photos/woman-in-red-long-sleeve-shirt-standing-near-white-wall-during-daytime-sx1x4lXBrqc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" },
  },
  {
    name: "Clinical Liaison",
    role: "Technical & Support Division",
    image: "/images/woman.webp",
    bio: "Bridging the gap between product capability and clinical need — providing expert guidance to surgeons, physiotherapists, and healthcare facilities.",
    attribution: { name: "Khalid Boutchich", url: "https://unsplash.com/@khalidboutchich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", photoUrl: "https://unsplash.com/photos/man-in-gray-suit-jacket-holding-red-necktie-MYmWkQsup-I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" },
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Certified Products",
    description: "Every product in our catalogue carries CE and/or FDA certification — internationally recognised marks of safety and efficacy.",
  },
  {
    icon: Award,
    title: "Professional Expertise",
    description: "Our team combines clinical knowledge with supply chain expertise to match the right products to your facility's needs.",
  },
  {
    icon: Users,
    title: "Reliable Partnerships",
    description: "We work with world-class manufacturers including Circleg and Teknimed to bring globally proven products to the Ugandan market.",
  },
  {
    icon: Globe,
    title: "Uganda-Based Operations",
    description: "With branches in Kampala and Arua, we are rooted in Uganda — understanding local healthcare needs and logistics realities.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Efficient supply chain operations ensure critical medical supplies reach healthcare facilities when they are needed most.",
  },
  {
    icon: Truck,
    title: "After-Sale Support",
    description: "Our commitment extends beyond the sale — with ongoing technical support, product guidance, and responsive customer care.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-brand-blue py-20 text-white">
        <div className="container mx-auto px-4">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            About Us
          </p>
          <h1 className="font-serif text-5xl text-white mb-4">About Biotech Orthomart</h1>
          <p className="font-sans text-xl text-white/75 max-w-2xl">
            Uganda&apos;s trusted importer and distributor of certified orthopaedic implants, orthotics, prosthetics, surgical instruments, and medical textiles.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-4xl text-brand-dark mb-6">
                Trusted healthcare solutions for East Africa
              </h2>
              <p className="font-sans text-brand-muted leading-relaxed mb-5">
                Biotech Orthomart Ltd is a Kampala-based company specialising in the importation and distribution of high-quality orthopaedic and medical products. We serve hospitals, clinics, pharmacies, NGOs, government institutions, and individual clients across Uganda from our branches in Kampala and Arua.
              </p>
              <p className="font-sans text-brand-muted leading-relaxed mb-5">
                Our catalogue spans CE and FDA-approved implants, trauma devices, orthotics, prosthetics, surgical consumables, and mobility aids — all sourced from internationally certified manufacturers. We are the authorised distributor for Circleg and Teknimed products in Uganda.
              </p>
              <p className="font-sans text-brand-muted leading-relaxed mb-8">
                Our team brings together clinical expertise and supply chain capability to ensure that healthcare providers can access the products they need, reliably and efficiently.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-sans font-semibold text-brand-blue border-b-2 border-brand-gold pb-0.5 hover:text-brand-dark transition-colors"
              >
                Get in touch with our team
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-4/3">
              <Image
                src="/images/about_1.webp"
                alt="Biotech Orthomart team and operations"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-6 py-4 shadow-xl">
                <p className="font-serif text-3xl text-brand-blue">500+</p>
                <p className="font-sans text-xs text-brand-muted mt-0.5">Healthcare facilities served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              Our Purpose
            </p>
            <h2 className="font-serif text-4xl text-white">Vision &amp; Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-white mb-4">Our Vision</h3>
              <p className="font-sans text-white/80 leading-relaxed">
                To become the leading provider of biotechnological, biomedical, and rehabilitation devices and services in Africa.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-brand-dark mb-4">Our Mission</h3>
              <p className="font-sans text-brand-muted leading-relaxed">
                To advance surgical and rehabilitation care through innovative biomedical and biotechnological solutions that improve patient outcomes and enhance quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus & Capabilities */}
      <section className="py-20 bg-brand-surface border-y border-brand-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-gold rounded-full" />
                Core Focus Areas
              </h3>
              <div className="space-y-4">
                {[
                  "Regenerative medicine and tissue engineering for joint and bone repair",
                  "Advanced orthopedic implants and devices",
                  "Biological therapeutics for musculoskeletal conditions",
                  "Minimally invasive orthopedic solutions",
                  "Joint preservation technologies",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-brand-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                    <span className="font-sans text-brand-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-blue rounded-full" />
                Key Capabilities
              </h3>
              <div className="space-y-4">
                {[
                  "Proprietary biotechnology platforms",
                  "Clinical research and development expertise",
                  "Regulatory approval and compliance excellence",
                  "Manufacturing and quality assurance",
                  "Strategic healthcare partnerships",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-brand-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                    <span className="font-sans text-brand-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              Our People
            </p>
            <h2 className="font-serif text-4xl text-brand-dark">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-brand-surface rounded-2xl overflow-hidden border border-brand-light shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-3/2 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                {"attribution" in person && person.attribution && (
                  <p className="px-3 pt-1.5 text-[10px] text-brand-muted font-sans">
                    Photo by{" "}
                    <a href={person.attribution.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-dark">
                      {person.attribution.name}
                    </a>{" "}
                    on{" "}
                    <a href={person.attribution.photoUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-dark">
                      Unsplash
                    </a>
                  </p>
                )}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-brand-dark mb-0.5">{person.name}</h3>
                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-gold mb-3">
                    {person.role}
                  </p>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              Why Biotech
            </p>
            <h2 className="font-serif text-4xl text-brand-dark">Why choose us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-brand-light shadow-sm"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-brand-dark mb-1.5">{item.title}</h3>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl text-white">Our values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Integrity",
                body: "Transparent and ethical sourcing of all medical devices and supplies — no compromises on quality or compliance.",
              },
              {
                title: "Excellence",
                body: "Only providing products that meet rigorous international safety standards, because patient outcomes depend on it.",
              },
              {
                title: "Care",
                body: "Putting patients first by supporting healthcare providers with reliable tools, expert guidance, and responsive service.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center p-8 border border-white/10 rounded-2xl">
                <span className="block font-serif text-4xl text-brand-gold mb-2">&mdash;</span>
                <h3 className="font-serif text-2xl text-white mb-4">{v.title}</h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
