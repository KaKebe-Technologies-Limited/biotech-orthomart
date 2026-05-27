import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Media",
  description:
    "Latest news, product launches, healthcare events, and educational content from Biotech Orthomart — Uganda's orthopaedic solutions provider.",
  openGraph: {
    title: "News & Media | Biotech Orthomart",
    description:
      "Latest news, product launches, and healthcare updates from Biotech Orthomart.",
  },
};

const articles = [
  {
    category: "Product Launch",
    title: "New Range of CE-Certified Trauma Implants Now Available",
    excerpt:
      "Biotech Orthomart has expanded its trauma care catalogue with a new line of CE-certified plates, screws, and intramedullary nails sourced from a leading European manufacturer.",
    date: "Coming Soon",
    image: null,
  },
  {
    category: "Company News",
    title: "Biotech Orthomart Opens Second Branch in Arua",
    excerpt:
      "To better serve healthcare facilities in the West Nile sub-region, Biotech Orthomart has established a branch in Arua, bringing certified orthopaedic products closer to the communities that need them most.",
    date: "Coming Soon",
    image: null,
  },
  {
    category: "Healthcare",
    title: "Understanding Orthotic Solutions for Post-Surgical Recovery",
    excerpt:
      "A guide for healthcare professionals and patients on the role of orthotics in rehabilitation following orthopaedic surgery — from ankle-foot orthoses to lumbo-sacral supports.",
    date: "Coming Soon",
    image: null,
  },
];

const categories = ["All", "Product Launch", "Company News", "Healthcare", "Events"];

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-brand-surface border-b border-brand-light py-14">
        <div className="container mx-auto px-4">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">
            News & Media
          </p>
          <h1 className="font-serif text-5xl text-brand-dark mb-3">
            Latest from Biotech Orthomart
          </h1>
          <p className="font-sans text-brand-muted">
            Product updates, company news, and healthcare insights from our team.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-0 z-20 bg-white border-b border-brand-light shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-sans font-medium transition-all ${
                cat === "All"
                  ? "bg-brand-dark text-white shadow-sm"
                  : "bg-brand-surface text-brand-muted hover:text-brand-dark hover:bg-brand-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <article
                key={i}
                className="group bg-white border border-brand-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-brand-surface flex items-center justify-center border-b border-brand-light">
                  <span className="font-sans text-xs text-brand-muted">Image coming soon</span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-gold">
                      {article.category}
                    </span>
                    <span className="text-brand-light">·</span>
                    <span className="flex items-center gap-1 font-sans text-xs text-brand-muted">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl text-brand-dark leading-snug mb-3 group-hover:text-brand-blue transition-colors duration-200">
                    {article.title}
                  </h2>

                  <p className="font-sans text-sm text-brand-muted leading-relaxed mb-5 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-1 font-sans text-sm font-semibold text-brand-blue group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state note */}
          <div className="mt-16 text-center py-12 border border-dashed border-brand-light rounded-2xl">
            <p className="font-serif text-2xl text-brand-dark mb-2">More articles coming soon</p>
            <p className="font-sans text-sm text-brand-muted max-w-sm mx-auto">
              We&apos;ll be publishing product news, healthcare insights, and company updates regularly. Check back soon.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section className="py-16 bg-brand-surface border-t border-brand-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-brand-dark mb-3">Stay in the loop</h2>
          <p className="font-sans text-brand-muted mb-8 max-w-md mx-auto">
            For the latest product arrivals and news, follow us on social media or get in touch directly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-brand-blue/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
