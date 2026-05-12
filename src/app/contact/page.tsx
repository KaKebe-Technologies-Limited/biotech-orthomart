"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-blue py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">
            Have questions? We're here to help you find the right solutions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Our Location</h3>
                      <p className="text-brand-muted">Plot 47 Nakasero Hill Road, Kampala, Uganda</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Call Us</h3>
                      <p className="text-brand-muted">+256 392 392921</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <p className="text-brand-muted">info@biotechorthomart.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gray-100 rounded-3xl border flex items-center justify-center">
                <span className="text-brand-muted">Interactive Map Placeholder</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border shadow-xl">
              <h3 className="text-2xl font-bold text-brand-dark mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark">Name</label>
                    <input type="text" className="w-full p-4 border rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark">Email</label>
                    <input type="email" className="w-full p-4 border rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Your Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark">Subject</label>
                  <input type="text" className="w-full p-4 border rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-brand-blue" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark">Message</label>
                  <textarea rows={4} className="w-full p-4 border rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Your Message"></textarea>
                </div>
                <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity">
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
