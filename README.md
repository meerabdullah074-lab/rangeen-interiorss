# Rangeen Interiors Adiala — Website

Premium, multi-page marketing website for **Rangeen Interiors Adiala**
(Rawalpindi), built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## What's Included

- 11 pages: Home, About, Services (+18 individual service pages), Portfolio
  (with category filtering), Gallery (with lightbox), Testimonials, FAQ
  (with schema markup), Blog (+ individual post pages), Contact, Privacy
  Policy, Terms & Conditions
- Floating WhatsApp button + click-to-call
- Working contact form with client-side validation
- Google Maps embed on Home & Contact
- SEO: metadata on every page, JSON-LD business + FAQ schema, dynamic
  `sitemap.xml` and `robots.txt`
- Custom 404 page, loading animation, scroll-based navbar, mobile menu
- Fully responsive, mobile-first layout

> **Note on images:** since no real photos of Rangeen Interiors Adiala's own
> completed projects were available to source, the site uses a mix of:
> (1) **real, license-free stock interior photography** (Unsplash License —
> free for commercial use, no attribution required) for Living Room,
> Kitchen, Bedroom and Office/Commercial categories — see
> `src/lib/photos.ts`, and (2) elegant gradient placeholders for everything
> else (Portfolio projects, Gallery, other services, Blog posts), since
> those need to reflect your *actual* completed work rather than generic
> stock photos. Replace both with real project photography before going
> live — see "Adding Real Images" below.

## Getting Started (Local Setup)

You'll need [Node.js 18+](https://nodejs.org/) installed.

```bash
# 1. Install dependencies
npm install

# 2. Run the local dev server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

## Adding Real Images

`PlaceholderImage` now supports a `src` prop — pass a real photo URL (or a
local `/images/...` path) and it renders that instead of the gradient:

```tsx
<PlaceholderImage label="Living Room Project" seed={0} aspect="aspect-[4/3]" src="/images/your-photo.jpg" />
```

1. Add your own project photos to `public/images/`.
2. For each `<PlaceholderImage>` call across the site, add a `src="/images/your-file.jpg"` prop.
3. If you upload photos to an external host, add that domain to
   `images.remotePatterns` in `next.config.js` (Unsplash is already
   whitelisted since a few real stock photos are used by default — see
   `src/lib/photos.ts`).
4. Update `metadataBase` image reference in `src/app/layout.tsx` (the
   `jsonLd.image` field) to point at a real hero image once uploaded.

## Editing Content

Almost all site content (business info, services, portfolio projects,
testimonials, FAQs, blog posts, service areas, stats) lives in one file:

```
src/lib/site-data.ts
```

Edit this file to update phone number, address, services, or add new
portfolio/blog entries — the site will update everywhere automatically.

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Option B — GitHub + Vercel Dashboard**
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: Next.js (auto-detected). No extra config needed.
4. Click **Deploy**.

After deploying, update the `siteUrl` constant in `src/app/layout.tsx` and
`src/app/sitemap.ts` / `src/app/robots.ts` to match your live domain.

## Project Structure

```
src/
  app/
    layout.tsx          — root layout, fonts, SEO metadata, schema
    page.tsx             — homepage
    about/                — About Us page
    services/             — Services listing + [slug] detail pages
    portfolio/             — Portfolio with filtering
    gallery/                — Photo gallery with lightbox
    testimonials/            — Testimonials page
    faq/                      — FAQ page with schema markup
    blog/                      — Blog listing + [slug] post pages
    contact/                    — Contact page with form + map
    privacy-policy/               — Privacy Policy
    terms-conditions/              — Terms & Conditions
    sitemap.ts / robots.ts          — dynamic SEO files
    not-found.tsx                    — custom 404
    loading.tsx                       — loading animation
  components/              — Navbar, Footer, ContactForm, etc.
  lib/site-data.ts           — all editable site content
```

## Business Info Used

- **Phone:** 0305 5428685
- **Address:** Adiala Road, Rawalpindi, Punjab 46000, Pakistan
- **Services:** Wallpapers, laminate & vinyl flooring, PVC paneling,
  artificial grass, false ceilings & paints, plus 18 detailed service
  categories.

Update contact details, hours and social links in `src/lib/site-data.ts`
under the `business` object if anything has changed.
