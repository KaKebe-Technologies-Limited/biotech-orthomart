import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Biotech Orthomart. Visit our branches in Kampala and Yumbe, call us, or send a message. We respond within one business day.",
  openGraph: {
    title: "Contact Us | Biotech Orthomart",
    description:
      "Visit our branches in Kampala and Yumbe, or send us a message. We respond within one business day.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
