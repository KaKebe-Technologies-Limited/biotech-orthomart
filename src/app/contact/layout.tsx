import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Biotech Orthomart. Visit our branches in Kampala and Arua, call us, or send a message. We respond within one business day.",
  openGraph: {
    title: "Contact Us | Biotech Orthomart",
    description:
      "Visit our branches in Kampala and Arua, or send us a message. We respond within one business day.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
