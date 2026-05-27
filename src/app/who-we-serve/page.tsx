import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Biotech Orthomart serves hospitals, clinics, pharmacies, government institutions, NGOs, rehabilitation centres, and individual patients across Uganda with certified orthopaedic products.",
  openGraph: {
    title: "Who We Serve | Biotech Orthomart",
    description:
      "Serving hospitals, clinics, pharmacies, government institutions, NGOs, and individual patients across Uganda with certified orthopaedic products.",
  },
};
import {
  Building2,
  FlaskConical,
  Landmark,
  Stethoscope,
  HeartHandshake,
  User,
  ChevronDown,
} from "lucide-react";

const clients = [
  {
    icon: Building2,
    title: "Hospitals & Clinics",
    description:
      "Supplying certified implants, surgical instruments, and consumables to public and private hospitals across Uganda. Our team provides on-site technical support to ensure proper device selection and usage.",
    examples: ["National Referral Hospitals", "Regional Health Centres", "Private Clinics"],
  },
  {
    icon: FlaskConical,
    title: "Pharmacies",
    description:
      "Reliable bulk and retail supply of orthotics, mobility aids, and wound care consumables. We support pharmacies with responsive replenishment to keep critical products consistently in stock.",
    examples: ["Community Pharmacies", "Hospital Pharmacies", "Retail Drug Shops"],
  },
  {
    icon: Landmark,
    title: "Government Institutions",
    description:
      "Registered supplier compliant with Uganda's procurement regulations. We supply government health facilities with CE/FDA-approved devices through transparent, documented channels.",
    examples: ["Ministry of Health", "District Health Offices", "Government Hospitals"],
  },
  {
    icon: Stethoscope,
    title: "Private Healthcare Facilities",
    description:
      "Premium product selection and dedicated account management for private hospitals, specialist clinics, and rehabilitation centres seeking consistent quality and competitive pricing.",
    examples: ["Specialist Surgical Centres", "Rehabilitation Clinics", "Orthopedic Practices"],
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Aid Organisations",
    description:
      "Flexible procurement support for humanitarian and development programmes. We work with NGOs delivering mobility aids, prosthetics, and orthotics to underserved communities across Uganda.",
    examples: ["International Health NGOs", "Disability Support Programmes", "Refugee Health Initiatives"],
  },
  {
    icon: User,
    title: "Individual Clients",
    description:
      "Direct access to mobility aids, orthotics, and prosthetics for individuals seeking rehabilitation solutions. Our team guides clients and their families through product selection with care.",
    examples: ["Post-surgical Patients", "Persons with Disabilities", "Athletes & Injury Recovery"],
  },
];

const testimonials = [
  {
    quote:
      "Biotech Orthomart has been our go-to supplier for trauma implants. Their CE-certified products and responsive team have made a real difference to our surgical outcomes.",
    name: "Dr. Samuel Okwir",
    role: "Orthopaedic Surgeon, Regional Referral Hospital",
  },
  {
    quote:
      "We've relied on Biotech for orthotic and prosthetic supplies for our community rehabilitation programme. Delivery is always on time and the product quality is consistent.",
    name: "Programme Director",
    role: "International Disability NGO, Uganda",
  },
  {
    quote:
      "As a private clinic, we need a supplier we can trust. Biotech's account team is professional, and their range of mobility aids and orthoses covers everything our patients need.",
    name: "Clinic Administrator",
    role: "Kampala Specialist Clinic",
  },
];

const faqs = [
  {
    question: "Do you supply products nationwide, or only in Kampala?",
    answer:
      "We have branches in Kampala (HQ) and Arua, and can arrange delivery to healthcare facilities across Uganda. Contact us to discuss delivery options for your location.",
  },
  {
    question: "How do I request a quote for my facility?",
    answer:
      "You can use the quote request feature on any product page, fill out the contact form, or reach us directly via WhatsApp. We typically respond within one business day.",
  },
  {
    question: "Are your products CE and FDA certified?",
    answer:
      "Yes. All our products are sourced from internationally certified manufacturers and meet CE and/or FDA standards. We can provide documentation upon request.",
  },
  {
    question: "Do you offer clinical support or training?",
    answer:
      "We offer technical support and clinical guidance for the devices we supply. Our team can advise healthcare professionals on product selection and correct application.",
  },
  {
    question: "Can NGOs access special pricing or procurement terms?",
    answer:
      "Yes. We work with NGOs and aid organisations on flexible procurement terms. Please contact us to discuss your programme's requirements.",
  },
];

export default function WhoWeServePage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-brand-surface border-b border-brand-light py-14">
        <div className="container mx-auto px-4">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
            Who We Serve
          </p>
          <h1 className="font-serif text-5xl text-brand-dark mb-3">
            Healthcare partners across Uganda
          </h1>
          <p className="font-sans text-brand-muted max-w-2xl">
            From national referral hospitals to individual patients — we supply certified orthopaedic and medical products to every segment of Uganda&apos;s healthcare ecosystem.
          </p>
        </div>
      </section>

      {/* Client Type Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div
                key={client.title}
                className="bg-brand-surface border border-brand-light rounded-2xl p-8 hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <client.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h2 className="font-serif text-xl text-brand-dark mb-3">{client.title}</h2>
                <p className="font-sans text-sm text-brand-muted leading-relaxed mb-5">
                  {client.description}
                </p>
                <div className="space-y-1.5">
                  {client.examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                      <span className="font-sans text-xs text-brand-muted">{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              What Our Partners Say
            </p>
            <h2 className="font-serif text-4xl text-brand-dark">Trusted by healthcare professionals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-brand-light shadow-sm">
                <span className="block font-serif text-4xl text-brand-gold leading-none mb-4">&ldquo;</span>
                <p className="font-serif text-lg italic text-brand-dark leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-brand-light pt-4">
                  <p className="font-sans font-semibold text-sm text-brand-dark">{t.name}</p>
                  <p className="font-sans text-xs text-brand-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
              Questions
            </p>
            <h2 className="font-serif text-4xl text-brand-dark">Frequently asked questions</h2>
          </div>
          <div className="divide-y divide-brand-light">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-sans font-semibold text-brand-dark pr-8">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-brand-muted shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="font-sans text-brand-muted text-sm leading-relaxed mt-4 pr-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">Ready to work with us?</h2>
          <p className="font-sans text-white/70 mb-8 max-w-lg mx-auto">
            Get in touch to discuss your facility&apos;s requirements or request a product quote.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
