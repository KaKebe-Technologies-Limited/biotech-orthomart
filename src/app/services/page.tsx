import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional orthopaedic services including surgery support, prosthetic fitting, gait training, technical guidance, and clinical consultation — delivered by certified specialists across Uganda.",
  openGraph: {
    title: "Our Services | Biotech Orthomart",
    description:
      "Surgery support, prosthetic fitting, gait training, and clinical consultation — certified orthopaedic services across Uganda.",
  },
};
import {
  Stethoscope,
  PersonStanding,
  Wrench,
  MessageSquare,
  HeartHandshake,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Surgery Support",
    description:
      "We provide professional orthopaedic surgical support, supplying CE/FDA-certified implants, instruments, and consumables for theatre environments. Our team is available to advise on device selection and clinical application.",
    highlights: ["Trauma implants & fixation systems", "Arthroplasty components", "Surgical packs & drapes"],
  },
  {
    icon: PersonStanding,
    title: "Prosthetic Fitting & Rehabilitation",
    description:
      "Supporting patient rehabilitation with a full range of prosthetic and orthotic solutions. We work closely with clinicians and physiotherapists to ensure correct fitting, alignment, and guide patients through gait training and functional recovery.",
    highlights: ["Lower limb prostheses", "Circleg prosthetic limbs", "Gait training & rehabilitation support", "Silicon liners & stump socks"],
  },
  {
    icon: Wrench,
    title: "Orthotic & Bracing Services",
    description:
      "Supply and fitting guidance for a comprehensive range of orthotics, braces, and mobility aids. We help clinicians select the right device for each patient condition — from spinal braces to ankle-foot orthoses.",
    highlights: ["Spinal & cervical bracing", "Knee, ankle & upper-limb orthotics", "Custom fitting consultation", "Fracture care orthotics"],
  },
  {
    icon: MessageSquare,
    title: "Professional Consultation",
    description:
      "Direct consultation services for healthcare providers selecting orthopaedic, biomedical, and rehabilitative products. We help facilities match the right products to their patient population and clinical protocols.",
    highlights: ["Product matching consultation", "Clinical protocol alignment", "Catalogue walkthroughs"],
  },
  {
    icon: HeartHandshake,
    title: "After-Sale Support",
    description:
      "Our commitment doesn't end at delivery. We provide ongoing customer care, handle product queries, and support facilities with any post-purchase requirements to ensure continued satisfaction.",
    highlights: ["Post-delivery product support", "Returns & exchange assistance", "Ongoing account management"],
  },
  {
    icon: Truck,
    title: "Delivery Services",
    description:
      "Reliable, timely delivery of medical products to healthcare facilities across Uganda. Operating from our Kampala and Arua branches, we ensure critical supplies reach you when you need them.",
    highlights: ["Kampala & Arua branches", "Nationwide delivery", "Urgent supply fulfilment"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-brand-surface border-b border-brand-light py-14">
        <div className="container mx-auto px-4">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
            What We Offer
          </p>
          <h1 className="font-serif text-5xl text-brand-dark mb-3">Our Services</h1>
          <p className="font-sans text-brand-muted max-w-2xl">
            Comprehensive healthcare solutions — from surgical supply and prosthetic fitting to patient rehabilitation and after-sale support — tailored for Uganda&apos;s medical community.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-white border border-brand-light rounded-2xl hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl text-brand-dark mb-3">{service.title}</h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                      <span className="font-sans text-xs text-brand-muted">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Get Started
          </p>
          <h2 className="font-serif text-4xl text-white mb-6">Ready to partner with us?</h2>
          <p className="font-sans text-white/70 max-w-2xl mx-auto mb-10">
            Join the network of hospitals, clinics, and healthcare providers who trust Biotech Orthomart for certified medical supply and support.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/quote"
              className="bg-brand-blue text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-brand-blue/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
