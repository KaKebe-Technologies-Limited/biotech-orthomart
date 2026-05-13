import Link from "next/link";
import { ShieldCheck, Stethoscope, Truck, Users } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Orthopaedic Implants",
      description: "We supply a comprehensive range of CE/FDA approved implants for trauma, joint replacement, and spine surgery.",
      icon: <Stethoscope className="h-8 w-8 text-brand-blue" />,
    },
    {
      title: "Custom Orthotics",
      description: "Providing personalized orthotic solutions including braces, supports, and specialized footwear for patient mobility.",
      icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />,
    },
    {
      title: "Logistics & Delivery",
      description: "Our efficient supply chain ensures that critical medical supplies reach hospitals and clinics across East Africa on time.",
      icon: <Truck className="h-8 w-8 text-brand-blue" />,
    },
    {
      title: "Clinical Support",
      description: "Expert guidance and technical support for healthcare professionals on the effective use of our medical devices.",
      icon: <Users className="h-8 w-8 text-brand-blue" />,
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-brand-surface border-b border-brand-light py-14">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl text-brand-dark mb-4">Our Services</h1>
          <p className="font-sans text-brand-muted max-w-xl mx-auto">
            Comprehensive healthcare solutions tailored for the East African medical community.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-white border border-brand-light rounded-3xl hover:shadow-xl transition-shadow flex gap-6">
                <div className="h-16 w-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-brand-dark mb-4">{service.title}</h3>
                  <p className="font-sans text-brand-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">Get Started</p>
          <h2 className="font-serif text-4xl text-white mb-6">Ready to Partner With Us?</h2>
          <p className="font-sans text-white/70 max-w-2xl mx-auto mb-12">
            Join the network of healthcare providers who trust Biotech Orthomart for their critical medical supply needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-blue text-white font-sans font-semibold px-10 py-4 rounded-full hover:bg-brand-blue/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
