"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-surface border-b border-brand-light py-14">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">Reach Us</p>
          <h1 className="font-serif text-5xl text-brand-dark mb-4">Contact Us</h1>
          <p className="font-sans text-brand-muted max-w-xl mx-auto">
            Have questions? We're here to help you find the right solutions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-3xl text-brand-dark mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg text-brand-dark">Our Location</h3>
                      <p className="font-sans text-brand-muted">Plot 47 Nakasero Hill Road, Kampala, Uganda</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg text-brand-dark">Call Us</h3>
                      <p className="font-sans text-brand-muted">+256 392 392921</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-brand-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-lg text-brand-dark">Email Us</h3>
                      <p className="font-sans text-brand-muted">info@biotechorthomart.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 bg-brand-surface rounded-3xl border border-brand-light flex items-center justify-center">
                <span className="font-sans text-brand-muted">Interactive Map Placeholder</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-brand-light shadow-xl">
              <h3 className="font-serif text-2xl text-brand-dark mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-brand-dark">Name</label>
                    <input type="text" className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-semibold text-brand-dark">Email</label>
                    <input type="email" className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans" placeholder="Your Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm font-semibold text-brand-dark">Subject</label>
                  <input type="text" className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm font-semibold text-brand-dark">Message</label>
                  <textarea rows={4} className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans" placeholder="Your Message"></textarea>
                </div>
                <button className="w-full bg-brand-blue text-white font-sans font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-colors">
                  Send Message <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
