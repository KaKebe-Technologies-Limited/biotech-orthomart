"use client";

import { useActionState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { sendContactEmail } from "./actions";

const branches = [
  {
    name: "Kampala (Head Office)",
    address: "Plot 47 Nakasero Hill Road, Kampala, Uganda",
    phone: "+256 791 987356",
    email: "info@biotechorthomart.com",
    hours: "Mon–Fri: 8:00am – 5:00pm",
    mapQuery: "Nakasero+Hill+Road+Kampala+Uganda",
    isPrimary: true,
  },
  {
    name: "Arua Branch",
    address: "Arua Town, Northern Uganda, Uganda",
    phone: "+256 XXX XXX XXX",
    email: "arua@biotechorthomart.com",
    hours: "Mon–Fri: 8:00am – 5:00pm",
    mapQuery: "Arua+Uganda",
    isPrimary: false,
  },
];

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialLinks = [
  {
    name: "Instagram",
    handle: "@biotechorthomart",
    Icon: InstagramIcon,
    url: "https://instagram.com/biotech_orthomart_ug",
    color: "hover:text-pink-500",
  },
  {
    name: "WhatsApp",
    handle: "+256 791 987356",
    Icon: WhatsAppIcon,
    url: "https://wa.me/256791987356",
    color: "hover:text-green-600",
  },
];

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(sendContactEmail, null);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-brand-surface border-b border-brand-light py-14">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Reach Us
          </p>
          <h1 className="font-serif text-5xl text-brand-dark mb-4">Contact Us</h1>
          <p className="font-sans text-brand-muted max-w-xl mx-auto">
            Have a question or want to discuss your facility&apos;s requirements? Our team is ready to help.
          </p>
        </div>
      </section>

      {/* Main: Form + Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-3xl text-brand-dark mb-8">Get in touch</h2>

                {/* Branches */}
                <div className="space-y-6">
                  {branches.map((branch) => (
                    <div
                      key={branch.name}
                      className={`p-6 rounded-2xl border ${
                        branch.isPrimary
                          ? "border-brand-blue/20 bg-brand-surface"
                          : "border-brand-light bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="font-sans font-semibold text-brand-dark">{branch.name}</h3>
                        {branch.isPrimary && (
                          <span className="font-sans text-[10px] font-semibold tracking-widest uppercase bg-brand-blue text-white px-2 py-0.5 rounded-full">
                            HQ
                          </span>
                        )}
                      </div>
                      <div className="space-y-2.5 text-sm">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                          <span className="font-sans text-brand-muted">{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                          <a
                            href={`tel:${branch.phone.replace(/\s/g, "")}`}
                            className="font-sans text-brand-muted hover:text-brand-blue transition-colors"
                          >
                            {branch.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                          <a
                            href={`mailto:${branch.email}`}
                            className="font-sans text-brand-muted hover:text-brand-blue transition-colors"
                          >
                            {branch.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-brand-muted shrink-0" />
                          <span className="font-sans text-brand-muted">{branch.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-serif text-xl text-brand-dark mb-4">Follow us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl border border-brand-light bg-brand-surface font-sans text-sm text-brand-muted transition-colors ${s.color}`}
                    >
                      <s.Icon />
                      <div>
                        <p className="font-semibold text-brand-dark text-xs">{s.name}</p>
                        <p className="text-xs">{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Maps */}
              <div>
                <h3 className="font-serif text-xl text-brand-dark mb-4">Our locations</h3>
                <div className="space-y-3">
                  {branches.map((branch) => (
                    <div key={branch.name} className="h-44 bg-brand-surface rounded-2xl border border-brand-light overflow-hidden relative">
                      <iframe
                        title={`Map — ${branch.name}`}
                        src={`https://maps.google.com/maps?q=${branch.mapQuery}&output=embed&z=14`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                        <p className="font-sans text-xs font-semibold text-brand-dark">{branch.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-brand-light shadow-xl h-fit">
              <h3 className="font-serif text-2xl text-brand-dark mb-2">Send a message</h3>
              <p className="font-sans text-sm text-brand-muted mb-8">
                We&apos;ll get back to you within one business day.
              </p>
              {state?.ok ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                  <h4 className="font-serif text-2xl text-brand-dark mb-2">Message sent!</h4>
                  <p className="font-sans text-brand-muted">{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-5">
                  {state?.ok === false && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="font-sans text-sm text-red-700">{state.message}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="font-sans text-sm font-semibold text-brand-dark">Name <span className="text-red-500">*</span></label>
                      <input
                        id="name" name="name" type="text" required
                        className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="organisation" className="font-sans text-sm font-semibold text-brand-dark">Organisation</label>
                      <input
                        id="organisation" name="organisation" type="text"
                        className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans text-sm"
                        placeholder="Hospital / clinic / NGO"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="font-sans text-sm font-semibold text-brand-dark">Email <span className="text-red-500">*</span></label>
                      <input
                        id="email" name="email" type="email" required
                        className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="font-sans text-sm font-semibold text-brand-dark">Phone</label>
                      <input
                        id="phone" name="phone" type="tel"
                        className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans text-sm"
                        placeholder="+256 XXX XXX XXX"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="font-sans text-sm font-semibold text-brand-dark">Subject</label>
                    <input
                      id="subject" name="subject" type="text"
                      className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans text-sm"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="font-sans text-sm font-semibold text-brand-dark">Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="message" name="message" rows={5} required
                      className="w-full p-4 border border-brand-light rounded-xl bg-brand-surface outline-none focus:ring-2 focus:ring-brand-blue font-sans text-sm resize-none"
                      placeholder="Describe your requirements..."
                    />
                  </div>
                  <p className="font-sans text-xs text-brand-muted">
                    Your details are used only to respond to your enquiry and are not shared with third parties.
                  </p>
                  <button
                    type="submit"
                    disabled={pending}
                    className="w-full bg-brand-blue text-white font-sans font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {pending ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                    ) : (
                      <>Send Message <Send className="h-4 w-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
