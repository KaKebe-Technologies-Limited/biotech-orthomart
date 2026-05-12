import { ShieldCheck, Stethoscope, Truck, Users } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Orthopaedic Implants",
      description: "We supply a comprehensive range of CE/FDA approved implants for trauma, joint replacement, and spine surgery.",
      icon: <Stethoscope className="h-8 w-8 text-brand-blue" />,
      color: "bg-brand-blue/10"
    },
    {
      title: "Custom Orthotics",
      description: "Providing personalized orthotic solutions including braces, supports, and specialized footwear for patient mobility.",
      icon: <ShieldCheck className="h-8 w-8 text-brand-green" />,
      color: "bg-brand-green/10"
    },
    {
      title: "Logistics & Delivery",
      description: "Our efficient supply chain ensures that critical medical supplies reach hospitals and clinics across East Africa on time.",
      icon: <Truck className="h-8 w-8 text-brand-orange" />,
      color: "bg-brand-orange/10"
    },
    {
      title: "Clinical Support",
      description: "Expert guidance and technical support for healthcare professionals on the effective use of our medical devices.",
      icon: <Users className="h-8 w-8 text-brand-dark" />,
      color: "bg-brand-dark/10"
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-brand-blue py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">
            Comprehensive healthcare solutions tailored for the East African medical community.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-white border rounded-3xl hover:shadow-xl transition-shadow flex gap-6">
                <div className={`h-16 w-16 ${service.color} rounded-2xl flex items-center justify-center shrink-0`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h3>
                  <p className="text-brand-muted leading-relaxed">
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
          <h2 className="text-3xl font-bold mb-8">Ready to Partner With Us?</h2>
          <p className="text-brand-muted max-w-2xl mx-auto mb-12">
            Join the network of healthcare providers who trust Biotech Orthomart for their critical medical supply needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-orange text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
