# Memory

## Project
**ClickSenders** — Enterprise-grade email infrastructure website. Built for scale, speed, and deliverability. Purpose-built for African businesses, deployed globally.

## Owner
Stanley (codedcrystal@gmail.com) — Full-stack developer, builds SaaS products (DawaHQ, LaundriPOS, NaijaParty). Works with Techzoid Innovation.

## Tech Stack
| Tech | Usage |
|------|-------|
| **Next.js 14** | App Router, SSR/SSG, SEO |
| **Tailwind CSS** | Styling, design tokens |
| **TypeScript** | Type safety |
| **Framer Motion** | Animations (dep installed, not yet wired) |
| **Lucide React** | Icon system |
| **Vercel** | Deployment target |

## Brand
| Token | Value |
|-------|-------|
| Primary | Teal `#0D9488` |
| Dark | `#111827` |
| Logo | Paper airplane, "CLICK" dark + "SENDERS" teal |
| Fonts | Inter (body), JetBrains Mono (code) |
| Theme | Light & clean |

## Pages
| Page | Route | Status |
|------|-------|--------|
| Home | `/` | Done — hero, stats, features, how-it-works, comparison, integrations, testimonials, FAQ |
| Features | `/features` | Done — core + additional features grid |
| Pricing | `/pricing` | Done — 3 tiers + volume table |
| Docs | `/docs` | Done — quick start, SDKs, API reference |
| About | `/about` | Done — mission, values, timeline |
| Contact | `/contact` | Done — form + contact methods |
| Blog | `/blog` | Done — listing with 6 placeholder posts |
| 404 | `not-found` | Done |

## Key Decisions
- `next.config.mjs` (NOT `.ts` — Next.js 14 doesn't support TS config)
- `'use client'` pages need metadata via route `layout.tsx` (contact page pattern)
- CSS `animate-in` class removed from Hero — caused invisible content (opacity:0 with broken animation)
- Competitor comparison table: vs SendGrid, Mailgun, Postmark

## SEO
- JSON-LD structured data (SoftwareApplication schema) in root layout
- Per-page metadata with 20+ keywords
- Dynamic `sitemap.ts`, `robots.txt`
- Open Graph + Twitter cards on all pages

## File Structure
```
src/
├── app/           (pages — App Router)
├── components/
│   ├── home/      (Hero, Features, Stats, etc.)
│   └── layout/    (Navbar, Footer)
└── lib/
    ├── constants.ts (siteConfig, features, pricing, testimonials)
    └── utils.ts     (cn helper)
public/
├── logo.png
├── robots.txt
└── manifest.json
```

## Preferences
- Light & clean design (not dark mode)
- Audience: both developers AND business decision-makers
- Aggressive SEO with keyword-rich content
- "Built in Africa. Deployed Globally." positioning
