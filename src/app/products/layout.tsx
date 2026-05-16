import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Biotech Orthomart's full range of CE and FDA approved orthopaedic implants, orthotics, prosthetics, mobility aids, and surgical instruments. Request a quote — no payment required.",
  openGraph: {
    title: "Products | Biotech Orthomart",
    description:
      "CE and FDA approved orthopaedic implants, orthotics, prosthetics, mobility aids, and surgical instruments. Request a quote today.",
    images: [{ url: "/images/implant-1.jpg", width: 1200, height: 630, alt: "Orthopaedic products" }],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
