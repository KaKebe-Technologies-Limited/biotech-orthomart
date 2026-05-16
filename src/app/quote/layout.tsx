import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Submit your product quote request to Biotech Orthomart. No payment required — our team will respond with pricing and availability within one business day.",
  openGraph: {
    title: "Request a Quote | Biotech Orthomart",
    description:
      "No payment required. Submit your product list and our team will respond with pricing and availability within one business day.",
  },
  robots: { index: false },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
