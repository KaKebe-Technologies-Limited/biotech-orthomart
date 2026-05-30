import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="h-auto w-auto brightness-0 invert flex justify-center" >
              <Image src="/images/logo.png" alt="Biotech Orthomart" width={120} height={120} className="h-24 w-24 brightness-0 invert" />
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed font-sans">
              Leading provider of CE/FDA approved orthopaedic solutions in East Africa. Committed to excellence in patient care and medical reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="YouTube">
                <YouTubeIcon />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-6 tracking-wide uppercase text-white/80">Quick Links</h4>
            <ul className="space-y-4 text-brand-muted text-sm font-sans">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-6 tracking-wide uppercase text-white/80">Product Categories</h4>
            <ul className="space-y-4 text-brand-muted text-sm font-sans">
              <li><Link href="/products?category=Implant" className="hover:text-white transition-colors">Orthopaedic Implants</Link></li>
              <li><Link href="/products?category=Orthotic" className="hover:text-white transition-colors">Orthotic Supports</Link></li>
              <li><Link href="/products?category=Trauma" className="hover:text-white transition-colors">Trauma Devices</Link></li>
              <li><Link href="/products?category=Brace" className="hover:text-white transition-colors">Back Braces</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-6 tracking-wide uppercase text-white/80">Contact Info</h4>
            <ul className="space-y-4 text-brand-muted text-sm font-sans">
              <li className="flex gap-3">
                <span className="font-semibold text-white">Address:</span>
                Plot 47 Nakasero Hill Road, Kampala
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white">Phone:</span>
                <a href="tel:+256392392921" className="hover:text-white transition-colors">+256 392 392921</a>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white">Email:</span>
                <a href="mailto:info@biotechorthomart.com" className="hover:text-white transition-colors">info@biotechorthomart.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-start md:items-center gap-4 text-xs text-brand-muted font-sans">
          <p>© {new Date().getFullYear()} Biotech Orthomart Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Developed with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by <a href="https://kakebe.tech" className="text-white hover:underline ml-1">Kakebe Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
