import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UtilityBar from "@/components/UtilityBar";
import { Toaster } from "sonner";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biotechorthomart.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Biotech Orthomart | CE/FDA Approved Orthopaedic Solutions in Uganda",
    template: "%s | Biotech Orthomart",
  },
  description:
    "Uganda's trusted distributor of CE and FDA approved orthopaedic implants, orthotics, prosthetics, and surgical instruments. Serving hospitals, clinics, NGOs, and healthcare institutions across East Africa.",
  keywords: [
    "orthopaedic implants Uganda",
    "orthotics Uganda",
    "prosthetics Kampala",
    "surgical instruments Uganda",
    "CE FDA approved medical devices Uganda",
    "Biotech Orthomart",
    "medical supplies East Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_UG",
    siteName: "Biotech Orthomart",
    title: "Biotech Orthomart | CE/FDA Approved Orthopaedic Solutions in Uganda",
    description:
      "Uganda's trusted distributor of CE and FDA approved orthopaedic implants, orthotics, prosthetics, and surgical instruments.",
    images: [{ url: "/images/hero_1.jpg", width: 1200, height: 630, alt: "Biotech Orthomart" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biotech Orthomart | CE/FDA Approved Orthopaedic Solutions in Uganda",
    description:
      "Uganda's trusted distributor of CE and FDA approved orthopaedic implants, orthotics, prosthetics, and surgical instruments.",
    images: ["/images/hero_1.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <UtilityBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
