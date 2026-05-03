# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────┐
│                  Browser                     │
│   (User visits clicksenders.com)             │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│              Vercel Edge Network             │
│   CDN, SSL, Edge Caching, Analytics          │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│            Next.js 14 App Router             │
│                                              │
│  ┌─────────────┐  ┌──────────────────────┐  │
│  │   Server     │  │   Client Components  │  │
│  │  Components  │  │   (Interactive UI)   │  │
│  │  (SSR/SSG)   │  │                      │  │
│  │              │  │  - Navbar (scroll)    │  │
│  │  - Pages     │  │  - FAQ (accordion)   │  │
│  │  - Layouts   │  │  - Contact (form)    │  │
│  │  - Metadata  │  │  - Hero (animations) │  │
│  └─────────────┘  └──────────────────────┘  │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │         Shared Layer                  │   │
│  │  - lib/constants.ts (all content)     │   │
│  │  - lib/utils.ts (cn helper)           │   │
│  │  - globals.css (design tokens)        │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

## Rendering Strategy

| Page | Strategy | Reason |
|------|----------|--------|
| Home (`/`) | SSR | Dynamic sections, SEO priority |
| Features | SSG | Static content, rarely changes |
| Pricing | SSG | Static content with future dynamic toggle |
| Docs | SSG | Static reference content |
| About | SSG | Static company info |
| Contact | SSR | Client-side form handling |
| Blog | SSG | Static listing, future dynamic posts |
| Sitemap | Dynamic | Auto-generated on build |

## Component Architecture

### Server vs Client Components

**Server Components (default):**
- All page.tsx files (except Contact)
- Layout components
- Metadata-exporting components
- Static content sections

**Client Components (`'use client'`):**
- `Navbar.tsx` — scroll detection, mobile menu toggle
- `Hero.tsx` — animation triggers
- `FAQ.tsx` — accordion state
- `ComparisonTable.tsx` — table interactivity
- `Contact/page.tsx` — form state management

### Data Flow

```
constants.ts (single source of truth)
    │
    ├── siteConfig → Layout, Navbar, Footer
    ├── navLinks → Navbar, Footer
    ├── features → Home/Features, Features page
    ├── pricingPlans → Pricing page
    ├── stats → Home/Stats
    ├── testimonials → Home/Testimonials
    └── footerLinks → Footer
```

All content is centralized in `constants.ts`. Components import what they need. To update any site content, edit a single file.

## Design Token Architecture

Design tokens flow from `tailwind.config.ts` into CSS custom properties in `globals.css`, then into Tailwind utility classes.

```
tailwind.config.ts          globals.css              Components
─────────────────          ──────────              ──────────
colors.teal.600    →    --brand-primary    →    className="text-teal-600"
                        .btn-primary       →    className="btn-primary"
                        .section-padding   →    className="section-padding"
```

### Custom CSS Layers

```css
@layer base       /* Reset, typography, global defaults */
@layer components  /* Reusable component classes */
@layer utilities   /* One-off utility helpers */
```

## SEO Architecture

```
Root Layout (layout.tsx)
├── Base metadata (title template, description, keywords)
├── JSON-LD structured data (SoftwareApplication)
├── Open Graph defaults
├── Twitter Card defaults
└── Canonical URL

Per-Page Metadata (each page.tsx)
├── Page-specific title
├── Page-specific description
├── Page-specific keywords
└── Page-specific OG data

sitemap.ts → Auto-generated sitemap.xml
robots.txt → Search engine directives
```

## Security Headers

Applied via `next.config.mjs`:

| Header | Value | Purpose |
|--------|-------|---------|
| X-Content-Type-Options | nosniff | Prevent MIME sniffing |
| X-Frame-Options | DENY | Prevent clickjacking |
| X-XSS-Protection | 1; mode=block | XSS filter |
| Referrer-Policy | strict-origin-when-cross-origin | Control referrer info |

## Performance Optimizations

- **Next.js Image**: Automatic WebP/AVIF, lazy loading, responsive srcset
- **Font Loading**: `display: swap` via `next/font/google` — no FOIT
- **Code Splitting**: Automatic per-route via Next.js
- **CSS**: Tailwind purges unused styles in production
- **Static Generation**: Pages that don't need SSR are pre-rendered at build time

## Future Considerations

### Planned Enhancements
- **Blog CMS**: Connect to headless CMS (Contentlayer/MDX or Sanity)
- **Analytics**: Integrate Vercel Analytics or PostHog
- **A/B Testing**: Pricing page conversion experiments
- **i18n**: French, Portuguese for African markets
- **Dashboard Preview**: Interactive mock of the ClickSenders dashboard
- **Auth Pages**: Login/Signup with actual authentication flow
