import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-blue py-20 text-white">
        <div className="container mx-auto px-4">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">About Us</p>
          <h1 className="font-serif text-5xl text-white mb-4">About Biotech Orthomart</h1>
          <p className="font-sans text-xl text-white/75 max-w-2xl">
            Leading the way in orthopaedic and healthcare excellence in East Africa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">Our Mission</p>
              <h2 className="font-serif text-4xl text-brand-dark mb-6">Trusted healthcare solutions for East Africa</h2>
              <p className="font-sans text-brand-muted leading-relaxed mb-6">
                At Biotech Orthomart, we are committed to delivering trusted pharmaceutical and healthcare products that meet the highest standards of quality and safety. Our mission is to make healthcare more accessible, reliable, and affordable for all.
              </p>
              <p className="font-sans text-brand-muted leading-relaxed">
                We specialize in sourcing CE/FDA-approved orthopaedic implants, orthotics, and trauma devices from globally recognized manufacturers to ensure the best patient outcomes.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3]">
              <Image src="/images/about_1.jpg" alt="Medical Professional" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">What We Stand For</p>
          <h2 className="font-serif text-4xl text-brand-dark mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-brand-light">
              <h3 className="font-serif text-xl text-brand-blue mb-4">Integrity</h3>
              <p className="font-sans text-brand-muted">Transparent and ethical sourcing of all medical devices and supplies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-brand-light">
              <h3 className="font-serif text-xl text-brand-blue mb-4">Excellence</h3>
              <p className="font-sans text-brand-muted">Only providing products that meet rigorous international safety standards.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-brand-light">
              <h3 className="font-serif text-xl text-brand-blue mb-4">Care</h3>
              <p className="font-sans text-brand-muted">Putting patients first by supporting healthcare providers with reliable tools.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
