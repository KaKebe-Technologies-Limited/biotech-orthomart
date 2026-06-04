import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
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
              <a href="https://instagram.com/biotech_orthomart_ug" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/256791987356" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon />
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
                <a href="tel:+256791987356" className="hover:text-white transition-colors">+256 791 987356</a>
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
