export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-blue py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Biotech Orthomart</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Leading the way in orthopaedic and healthcare excellence in East Africa.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Our Mission</h2>
              <p className="text-brand-muted leading-relaxed mb-6">
                At Biotech Orthomart, we are committed to delivering trusted pharmaceutical and healthcare products that meet the highest standards of quality and safety. Our mission is to make healthcare more accessible, reliable, and affordable for all.
              </p>
              <p className="text-brand-muted leading-relaxed">
                We specialize in sourcing CE/FDA-approved orthopaedic implants, orthotics, and trauma devices from globally recognized manufacturers to ensure the best patient outcomes.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/about_1.jpg" alt="Medical Professional" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-bold text-xl mb-4 text-brand-blue">Integrity</h3>
              <p className="text-brand-muted">Transparent and ethical sourcing of all medical devices and supplies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-bold text-xl mb-4 text-brand-blue">Excellence</h3>
              <p className="text-brand-muted">Only providing products that meet rigorous international safety standards.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-bold text-xl mb-4 text-brand-blue">Care</h3>
              <p className="text-brand-muted">Putting patients first by supporting healthcare providers with reliable tools.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
