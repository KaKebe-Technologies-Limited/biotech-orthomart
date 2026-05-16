# Biotech Orthomart — UI & Architecture Brief

## Context

This is a Next.js 16 (App Router) refactor of a static jQuery/Bootstrap site for **Biotech Orthomart Ltd**, a Kampala-based importer and distributor of orthopaedic implants, orthotics, prosthetics, surgical instruments, and medical textiles. They serve hospitals, clinics, pharmacies, NGOs, government institutions, and individual clients across Uganda (branches in Kampala and Yumbe).

The initial refactor was produced by Gemini CLI (refer to the plan at `refactor-plan.md`). The architecture and routing are acceptable foundations. **Do not rebuild from scratch.** Fix and extend the existing codebase systematically using this brief as the sole source of truth for design and product decisions.

**Design references:**
- **Primary layout inspiration:** The Lovable mockup (clean editorial structure, serif headlines, breathing room, product-first grid)
- **Interaction + structural inspiration:** orthomedicspharmaceuticals.org (utility bar, mega-menu, category card hover animation, quote-request flow)
- **Brand spec:** Client brief (`Biotech.md`)

---

## Brand Identity

### Colors

These are the canonical tokens. Add them to `tailwind.config.ts` immediately. Never use raw Tailwind `gray-*`, `blue-*`, or `green-*` defaults for any brand-facing UI element.

```ts
// tailwind.config.ts
colors: {
  brand: {
    blue:    '#0a3d7a',   // Deep navy — primary. Buttons, nav accents, active states, links.
    gold:    '#c9a84c',   // Gold — premium accent. Eyebrows, hover underlines, badge borders, section dividers.
    dark:    '#1a1f2e',   // Near-black — all headings, high-emphasis text.
    muted:   '#6b7280',   // Mid-gray — body copy, descriptions, labels.
    surface: '#f4f6fb',   // Blue-tinted off-white — page bg, card bg, input fills.
    light:   '#e8eef8',   // Borders, dividers, hover states on light backgrounds.
    white:   '#ffffff',
  }
}
```

**Color usage rules:**
- Primary CTA buttons: `bg-brand-blue text-white hover:bg-brand-blue/90`
- Secondary / ghost buttons: `border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white`
- Gold: eyebrow labels, decorative dividers, hover underlines on headings, badge outlines. Never use gold as a large background fill — it reads cheap at scale.
- Never use `#51eaea` (old teal) or `#e86b00` (old orange) anywhere — these were template artifacts from the original static site.

### Typography

**Font pairing: DM Serif Display + Inter**

DM Serif Display is authoritative and elegant — appropriate for a premium medical supplier. Inter is the most legible sans-serif for dense UI text. Both are free on Google Fonts.

```ts
fontFamily: {
  sans:  ['Inter', 'sans-serif'],
  serif: ['DM Serif Display', 'serif'],
}
```

**Usage rules:**
- `h1`, `h2`, section headings: `font-serif font-normal` (DM Serif has inherent weight — do not set font-bold)
- `h3`, card titles: `font-serif text-xl` or `font-sans font-semibold` depending on context
- Navigation links, buttons, labels, filters, badges: `font-sans`
- Body / descriptions: `font-sans font-normal text-brand-muted`
- Eyebrows (small caps labels above headings): `font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold`

### Logo

`/public/images/logo.png`. Use in the navbar. Do **not** render "Biotech Orthomart" as a separate text node next to it — the logo contains the wordmark already.

### Brand Voice

Professional, clinically credible, trustworthy. This is a B2B and B2C medical company, not a consumer retail store. Copy should feel like a premium medical distributor. Key trust signals to surface throughout: CE/FDA certification, Uganda-specific operations, supplier partnerships (Circleg, Teknimed), and direct consultation availability.

---

## Critical Architecture Change: Cart → Quote Basket

**The site does not display prices and does not have a shopping cart.**

Per the client brief: products are shown without prices. The conversion flow is quote request, not purchase. This changes everything downstream:

| Old (Gemini output) | New (correct) |
|---|---|
| "Add to Cart" | "Add to Quote" |
| Cart drawer / cart page | Quote basket drawer / quote page |
| Checkout with payment | Quote form → WhatsApp or email |
| UGX price display | No price shown anywhere in product listings |
| `useCart` / `CartDrawer` | `useQuoteBasket` / `QuoteDrawer` |

**Rename in code:** `useCart` → `useQuoteBasket`, `CartDrawer` → `QuoteDrawer`, `/cart` route → `/quote`, all button labels and copy updated throughout.

**Quote basket flow:**
1. User browses products, clicks "Add to Quote" on a product card
2. Quote basket icon in navbar shows item count badge
3. User opens QuoteDrawer (slides in from right) — shows product names, categories, quantities. No prices.
4. "Submit Quote Request" → a form collecting name, organisation, phone, email, message
5. "Request via WhatsApp" → opens WhatsApp with a pre-filled message

**WhatsApp pre-fill template:**
```
Hello Biotech Orthomart, I'd like to request a quote for the following:
{product name × quantity, one per line}

Name: {name}
Organisation: {org}
Phone: {phone}
```

---

## Page Structure & Sitemap

```
/                    Homepage
/products            Product catalogue
/products/[slug]     Product detail
/services            Services
/about               About Us
/who-we-serve        Who We Serve (new)
/news                News & Media (static scaffold)
/contact             Contact Us
/quote               Quote submission page
```

**Navigation structure:**
```
[Utility Bar — full width, brand-dark bg]
[Navbar — white, sticky]
  Logo  |  Home  About▾  Products▾  Services  Who We Serve  News  Contact  |  [Search]  [Quote icon + badge]  [Request Quote pill]

About ▾ dropdown:
  About Biotech · Leadership Team · Why Choose Us

Products ▾ mega-menu (two-column):
  Orthopedic Products: Surgical Instruments · Arthroplasty · Arthroscopy · Trauma Care
  Other Products: Prosthetics · Mobility Aids · Orthoses · Surgical Consumables
  [Right panel]: "CE/FDA Certified · World-class manufacturers" + Explore Products CTA
```

---

## Layout Components

### 1. Utility Bar (NEW)

Add above the navbar in `app/layout.tsx`. Visible on all pages.

```tsx
<div className="bg-brand-dark text-white text-xs font-sans">
  <div className="container mx-auto px-4 py-2 flex items-center justify-between">
    <div className="flex items-center gap-6">
      <a href="tel:+256XXXXXXX" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
        <PhoneIcon className="w-3 h-3" /> Call: +256 XXX XXX XXX
      </a>
      <a href="mailto:info@biotechorthomart.com" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
        <MailIcon className="w-3 h-3" /> info@biotechorthomart.com
      </a>
      <span className="text-white/50 hidden md:block">Mon–Fri: 8:00am – 5:00pm</span>
    </div>
    <div className="flex items-center gap-4">
      {/* Social: Instagram, TikTok, YouTube, WhatsApp */}
      <div className="flex items-center gap-3">
        {socialLinks.map(s => (
          <a key={s.name} href={s.url} className="hover:text-brand-gold transition-colors">{s.icon}</a>
        ))}
      </div>
      {/* Branches dropdown */}
      <div className="relative group">
        <button className="flex items-center gap-1 border border-white/20 rounded px-2 py-0.5 hover:border-brand-gold transition-colors">
          Our Branches <ChevronDownIcon className="w-3 h-3" />
        </button>
        <div className="absolute right-0 top-full mt-1 bg-white text-brand-dark rounded shadow-lg py-2 w-36 hidden group-hover:block z-50">
          <a href="/contact" className="block px-4 py-1.5 text-xs hover:bg-brand-surface">Kampala (HQ)</a>
          <a href="/contact" className="block px-4 py-1.5 text-xs hover:bg-brand-surface">Yumbe</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 2. Navbar (FIX)

- Sticky, white background, add `shadow-sm` class via scroll listener when page is scrolled > 0px
- Logo only — no text label beside it
- Nav links: `font-sans font-medium text-brand-dark hover:text-brand-blue transition-colors`
- Active link indicator: `text-brand-blue border-b-2 border-brand-gold`
- Quote basket icon: badge uses `bg-brand-gold text-brand-dark text-[10px] font-bold`
- "Request Quote" pill button (desktop right): `bg-brand-blue text-white font-sans font-semibold text-sm px-5 py-2 rounded-full hover:bg-brand-blue/90`

---

### 3. Hero Section (FIX — P0)

**Current problem:** Near-transparent overlay — text is invisible.

```tsx
<section className="relative min-h-[85vh] flex items-center overflow-hidden">

  <Image src="/images/hero_1.jpg" fill className="object-cover object-center" priority alt="" />

  {/* Overlay — gradient from dark-left to transparent-right */}
  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-transparent" />

  <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-2xl">

      <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold mb-4">
        Orthopaedic Solutions
      </p>

      <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-6">
        Precision Care.<br />
        <span className="text-brand-gold">Better Recovery.</span>
      </h1>

      <p className="font-sans text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
        Sourcing CE and FDA approved implants, orthotics, and surgical instruments
        from world-class manufacturers — delivered to Uganda's healthcare institutions.
      </p>

      {/* Trust signal row */}
      <div className="flex items-center gap-4 mb-10 text-white/60 text-xs font-sans tracking-wide uppercase">
        <span>CE/FDA Approved</span><span className="text-white/30">·</span>
        <span>Kampala-Based</span><span className="text-white/30">·</span>
        <span>Two Branches</span><span className="text-white/30">·</span>
        <span>Free Delivery Available</span>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <Link href="/products"
          className="bg-brand-blue text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:bg-brand-blue/90 transition-colors">
          Explore Products →
        </Link>
        <Link href="/contact"
          className="border border-white/60 text-white font-sans font-semibold px-8 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-colors">
          Request Consultation
        </Link>
      </div>

    </div>
  </div>

  {/* Category highlight tiles — bottom-right, desktop only. Inspired by Orthomedics hero. */}
  <div className="absolute bottom-8 right-8 hidden lg:flex gap-3">
    {[
      { label: 'Implants & Trauma' },
      { label: 'Mobility Aids' },
      { label: 'Surgical Instruments' },
    ].map(item => (
      <div key={item.label}
        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-center text-white text-xs font-sans w-36 hover:bg-white/20 transition cursor-pointer">
        {item.label}
      </div>
    ))}
  </div>

</section>
```

---

### 4. ProductCard Component (REDESIGN — P1)

**The key interaction (from orthomedicspharmaceuticals.org):**
- Default state: card shows a category icon centered in the image area
- Hover state: icon fades out, product image fades and scales in. Card lifts. Button fills blue.

```tsx
<article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">

  {/* Image / Icon area */}
  <div className="relative aspect-[4/3] bg-brand-surface overflow-hidden flex items-center justify-center">

    {/* Icon — visible by default, fades on hover */}
    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 z-10">
      <CategoryIcon className="w-16 h-16 text-brand-blue/25" />
    </div>

    {/* Product image — hidden by default, fades in on hover */}
    <Image
      src={product.image}
      fill
      className="object-contain p-6 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
      alt={product.name}
    />

    {badge && (
      <span className="absolute top-3 left-3 z-20 bg-brand-blue text-white text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full">
        {badge}
      </span>
    )}
  </div>

  {/* Body */}
  <div className="p-5 flex flex-col flex-1">
    <p className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-gold mb-1.5">
      {product.category}
    </p>
    <h3 className="font-serif text-xl text-brand-dark leading-snug mb-2 group-hover:text-brand-blue transition-colors duration-200">
      {product.name}
    </h3>
    <p className="font-sans text-sm text-brand-muted line-clamp-2 mb-4 flex-1">
      {product.description}
    </p>

    {/* NO PRICE — quote model */}
    <button
      onClick={() => addToQuote(product)}
      className="w-full font-sans font-semibold text-sm py-2.5 rounded-lg border border-brand-blue text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-200">
      Add to Quote
    </button>
  </div>

</article>
```

---

### 5. Products Page (REDESIGN — P1)

**Page header band:**
```tsx
<section className="bg-brand-surface border-b border-brand-light py-14">
  <div className="container mx-auto px-4">
    <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold mb-3">Products</p>
    <h1 className="font-serif text-5xl text-brand-dark mb-3">Everything we carry</h1>
    <p className="font-sans text-brand-muted">
      {productCount} products · CE/FDA approved · sourced from world-class manufacturers
    </p>
  </div>
</section>
```

**Sticky filter bar:**
```tsx
<div className="sticky top-[navbar-height] z-20 bg-white border-b border-brand-light shadow-sm">
  <div className="container mx-auto px-4 py-3 flex items-center gap-2 flex-wrap">
    {['All','Implants','Orthotics','Prosthetics','Mobility Aids','Surgical Instruments','Consumables','Orthoses'].map(cat => (
      <button key={cat} onClick={() => setActive(cat)}
        className={cn('px-4 py-1.5 rounded-full text-sm font-sans font-medium transition-all',
          active === cat
            ? 'bg-brand-dark text-white shadow-sm'
            : 'bg-brand-surface text-brand-muted hover:text-brand-dark hover:bg-brand-light'
        )}>
        {cat}
      </button>
    ))}
  </div>
</div>
```

**Grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`

---

### 6. Quote Drawer (RENAME + ADAPT)

Rename `CartDrawer` → `QuoteDrawer` and `useCart` → `useQuoteBasket` everywhere.

```tsx
<aside className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">

  <header className="flex items-center justify-between p-6 border-b border-brand-light">
    <h2 className="font-serif text-2xl text-brand-dark">Your Quote ({count} items)</h2>
    <button onClick={close}><XIcon /></button>
  </header>

  <div className="flex-1 overflow-y-auto p-6 space-y-4">
    {items.map(item => (
      <div key={item.id} className="flex gap-4 items-start">
        <div className="w-16 h-16 bg-brand-surface rounded-lg flex-shrink-0 relative overflow-hidden">
          <Image src={item.image} fill className="object-contain p-2" alt={item.name} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-brand-gold">{item.category}</p>
          <p className="font-sans font-medium text-brand-dark text-sm truncate">{item.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <QuantityControl item={item} />
            <button onClick={() => remove(item.id)} className="text-brand-muted hover:text-red-500 text-xs ml-auto">Remove</button>
          </div>
        </div>
      </div>
    ))}
  </div>

  <footer className="p-6 border-t border-brand-light space-y-3">
    <p className="font-sans text-xs text-brand-muted text-center">
      No payment required — we'll contact you with pricing
    </p>
    <Link href="/quote"
      className="block w-full bg-brand-blue text-white font-sans font-semibold text-center py-3.5 rounded-full hover:bg-brand-blue/90 transition-colors">
      Submit Quote Request
    </Link>
    <a href={whatsappUrl}
      className="flex items-center justify-center gap-2 w-full border border-green-600 text-green-700 font-sans font-semibold py-3 rounded-full hover:bg-green-50 transition-colors text-sm">
      <WhatsAppIcon className="w-4 h-4" /> Request via WhatsApp
    </a>
  </footer>

</aside>
```

---

### 7. Homepage Sections

Build these in order after the hero:

**A — Trust Signal Strip** (`bg-white py-16`)
3-column icon strip. Icons `text-brand-blue`, headings `font-serif text-brand-dark`, body `text-brand-muted`.
Content: Certified Quality · Fast Delivery · 24/7 Technical Support

**B — Company Introduction** (`bg-white py-20`)
2-column: left = `font-serif text-4xl` heading + body + gold-accented CTA. Right = `about_1.jpg` with floating stat card overlay ("500+ healthcare facilities served"). 

**C — Product Categories Grid** (`bg-brand-surface py-20`)
Heading: "Comprehensive Medical Product Categories"
Six category cards using the same icon→image hover interaction as ProductCard. Link each to `/products?category=X`. Categories: Implants · Orthotics · Prosthetics · Mobility Aids · Surgical Instruments · Consumables.

**D — Dark Editorial / Partners** (`bg-brand-dark py-24`)
Left: eyebrow (gold) + `font-serif text-white` heading + white/70 body + partner logos (Circleg, Teknimed in white/inverted) + ghost CTA button. Right: staggered 2-image collage (`orthopedic-drill.jpg` + `orthotic-8.jpg`, second offset 2rem down-right).

Heading: `"The standard behind every device."` — with `"every device."` in `text-brand-gold font-serif italic`.

**E — Who We Serve Preview** (`bg-brand-surface py-16`)
Heading: "Who We Serve". Six icon cards in a flex row: Hospitals & Clinics · Pharmacies · Government Institutions · Private Healthcare · NGOs · Individual Clients. Link to `/who-we-serve`.

**F — Testimonials** (`bg-white py-16`)
2–3 cards. `font-serif text-xl italic text-brand-dark` for quote, `font-sans text-brand-muted` for attribution. Use placeholder copy — client to provide real testimonials.

**G — CTA Banner** (`bg-brand-blue py-20`)
Centered: `font-serif text-4xl text-white` heading "Ready to partner with us?" + subtext + two buttons: "Request a Quote" (white filled) and "Book a Consultation" (white outline).

---

## Brand Color Sweep

After updating `tailwind.config.ts`, sweep all component files:

| Replace | With |
|---|---|
| `text-gray-900`, `text-gray-800` | `text-brand-dark` |
| `text-gray-500`, `text-gray-600`, `text-gray-400` | `text-brand-muted` |
| `bg-gray-50`, `bg-gray-100` | `bg-brand-surface` |
| `border-gray-200`, `border-gray-100` | `border-brand-light` |
| `bg-blue-600`, `bg-blue-700`, `bg-blue-500` | `bg-brand-blue` |
| `text-blue-600`, `text-blue-700` | `text-brand-blue` |
| `border-blue-600` | `border-brand-blue` |
| `text-yellow-*`, `text-amber-*` used as accent | `text-brand-gold` |
| Any `#51eaea` | Remove entirely |
| Any `#e86b00` | Remove entirely |

---

## What NOT to Change

- Component file structure and Next.js routing
- `products.json` data schema (update image paths only if broken)
- Next.js config and metadata setup
- WhatsApp integration logic (adapt for quote flow, don't remove)
- Zustand store structure (rename and adapt, don't rewrite from scratch)

---

## Image Assets (`/public/images/`)

| Use | File |
|---|---|
| Hero background | `hero_1.jpg` or `orthopedic-drill.jpg` |
| Company intro section | `about_1.jpg` |
| Dark editorial section | `orthopedic-drill.jpg` + `orthotic-8.jpg` |
| Team / people | `man-1.jpg`, `man-2.jpg`, `women.jpg` |
| Implant products | `implant-1.jpg` → `implant-17.jpg` |
| Orthotic products | `orthotic-1.jpg` → `orthotic-8.jpg` |
| Crutch products | `crutch-1.jpg` → `crutch-5.jpg` |
| Shelf / context shots | `shelf-1.jpg`, `shelf-2.jpg`, `shelf-3.jpg` |
| Product thumbnails | `product_01.png` → `product_12.png` |

---

## Session Plan

Complete sessions in order. Commit at the end of each and verify visually before continuing.

### Session 1 — Foundation (~45 min)
1. Add DM Serif Display + Inter to Google Fonts in `app/layout.tsx`
2. Update `tailwind.config.ts` — brand tokens + font families
3. Global brand color sweep across all existing components
4. Add utility bar component to root layout
5. Fix hero section: gradient overlay, white text, gold eyebrow + gold accent word, trust signal row, both CTAs

**Verify:** Site looks rebraneded and hero is fully readable. Commit.

### Session 2 — Core Components (~60 min)
1. Rename `useCart` → `useQuoteBasket`, `CartDrawer` → `QuoteDrawer`, update all call sites
2. Remove all price display from product cards, product pages, and listings
3. Rebuild `ProductCard` per spec above (icon→image hover, "Add to Quote" button)
4. Rebuild products page header band + sticky filter bar
5. Rebuild `QuoteDrawer` with correct copy + WhatsApp CTA
6. Fix navbar: logo only, gold quote badge, "Request Quote" pill button

**Verify:** Products page looks professional. Quote flow works end to end. Commit.

### Session 3 — Homepage Sections (~60 min)
Build sections A through G in order (Trust Strip → Company Intro → Categories Grid → Dark Editorial → Who We Serve Preview → Testimonials → CTA Banner).

**Verify:** Scroll full homepage — should feel like a premium medical company. Commit.

### Session 4 — Remaining Pages (~45 min)
1. `/who-we-serve` — client type grid + testimonials
2. `/services` — 6 service cards
3. `/about` — company profile, leadership, Why Choose Us grid
4. `/news` — static placeholder grid (3 empty article cards)
5. `/contact` — form, map embed (Kampala + Yumbe), social links

### Session 5 — Polish & QA (~30 min)
1. Mobile sweep at 375px — navbar collapses, hero readable, cards stack, utility bar simplified
2. Lighthouse run — target > 90 performance, > 95 accessibility
3. All images use `next/image` with meaningful `alt` text
4. All internal links resolve
5. WhatsApp URL generates correctly with product list

---

## Definition of Done

**Foundation**
- [ ] DM Serif Display + Inter fonts loading and applied correctly
- [ ] Brand tokens in `tailwind.config.ts`: blue `#0a3d7a`, gold `#c9a84c`, dark `#1a1f2e`
- [ ] No raw Tailwind `gray-*`, `blue-*`, `green-*` defaults on brand-facing elements
- [ ] No `#51eaea` or `#e86b00` anywhere in the codebase

**Hero**
- [ ] Fully readable — gradient overlay present, all text white, no visibility issues
- [ ] Gold eyebrow + gold accent word in headline
- [ ] Trust signal row below subtext
- [ ] Both CTA buttons styled correctly

**Products**
- [ ] Zero prices displayed anywhere in product listings or cards
- [ ] All "Add to Cart" labels replaced with "Add to Quote"
- [ ] ProductCard icon→image hover animation works
- [ ] Products page has header band + sticky filter bar
- [ ] 4-column grid desktop / 2-column tablet / 1-column mobile

**Quote Flow**
- [ ] Quote basket icon shows item count badge
- [ ] QuoteDrawer opens with correct layout and no prices
- [ ] "Submit Quote Request" and "Request via WhatsApp" both functional
- [ ] WhatsApp URL pre-fills with product names correctly

**Navigation**
- [ ] Utility bar on all pages with contact info, socials, branches dropdown
- [ ] Navbar: logo only, sticky with scroll shadow, Products mega-menu works
- [ ] Mobile nav hamburger works

**Accessibility & Performance**
- [ ] All images use `next/image` with alt text
- [ ] Min 44px hit area on all tappable mobile elements
- [ ] Lighthouse performance > 90, accessibility > 95
- [ ] No console errors on any page
