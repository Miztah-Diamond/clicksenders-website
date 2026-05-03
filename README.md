# ClickSenders — Enterprise Email Infrastructure

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Enterprise-grade email infrastructure built for scale, speed, and deliverability. Purpose-built for African businesses, deployed globally.

![ClickSenders Preview](public/logo.png)

---

## Overview

ClickSenders is a purpose-built email sending platform designed to solve the deliverability challenges facing African businesses. This repository contains the marketing website — a fully SEO-optimized, responsive Next.js application.

### The Problem

- International platforms charge premium prices prohibitive for African businesses
- African IP ranges suffer from poor global sender reputation
- No local support or infrastructure optimized for African sending patterns

### Our Solution

- Custom SMTP infrastructure optimized for African sending patterns and IP ranges
- Automated IP warm-up and reputation management
- Real-time analytics with live delivery tracking
- Developer-first API design with SDKs for every major language

---

## Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/clicksenders/clicksenders-website.git
cd clicksenders-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router, SSR/SSG |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and developer experience |
| [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first styling with custom design tokens |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [Lucide React](https://lucide.dev/) | Icon system (400+ icons) |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Conditional class composition |

---

## Project Structure

```
clicksenders-website/
├── public/
│   ├── logo.png              # Brand logo
│   ├── robots.txt            # Search engine directives
│   └── manifest.json         # PWA manifest
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout (Navbar + Footer + SEO)
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles + design tokens
│   │   ├── sitemap.ts        # Dynamic sitemap generation
│   │   ├── not-found.tsx     # Custom 404 page
│   │   ├── features/         # Features page
│   │   ├── pricing/          # Pricing page
│   │   ├── docs/             # API documentation page
│   │   ├── about/            # About / company page
│   │   ├── contact/          # Contact form page
│   │   └── blog/             # Blog listing page
│   ├── components/
│   │   ├── home/             # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   ├── Integrations.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── FAQ.tsx
│   │   └── layout/           # Shared layout components
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   └── lib/
│       ├── constants.ts      # Site config, features, pricing, testimonials
│       └── utils.ts          # Utility functions (cn helper)
├── memory/                   # Project memory (AI context)
├── CLAUDE.md                 # AI working memory
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind + design tokens
├── tsconfig.json             # TypeScript configuration
└── package.json
```

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero with code preview, stats bar, feature grid, how-it-works steps, competitor comparison, integrations, testimonials, FAQ accordion |
| **Features** | `/features` | 6 core features (detailed) + 12 additional features grid |
| **Pricing** | `/pricing` | 3-tier pricing cards, volume pricing table, pricing FAQ |
| **Documentation** | `/docs` | Quick start guide, SDK installation, API endpoint reference |
| **About** | `/about` | Company mission, values, timeline/milestones |
| **Contact** | `/contact` | Contact form, email/chat/support methods |
| **Blog** | `/blog` | Blog listing with 6 SEO-optimized placeholder posts |
| **404** | `*` | Custom not-found page |

---

## Design System

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `teal-600` | `#0D9488` | Primary brand, CTAs, links |
| `teal-50` | `#f0fdfa` | Subtle backgrounds, badges |
| `dark-900` | `#111827` | Headlines, navbar text |
| `dark-500` | `#6b7280` | Body text, descriptions |
| `dark-50` | `#f9fafb` | Section backgrounds |

### Typography

| Font | Usage | Weights |
|------|-------|---------|
| Inter | Body text, UI | 300–900 |
| JetBrains Mono | Code blocks, terminal | 400–600 |

### Component Classes

```css
.btn-primary     /* Teal CTA button */
.btn-secondary   /* White bordered button */
.btn-ghost       /* Text-only button */
.card            /* White card with border + hover */
.card-elevated   /* Card with shadow */
.badge           /* Small pill label */
.code-block      /* Dark terminal-style code */
.section-label   /* Uppercase teal label */
.section-title   /* Large section heading */
.gradient-text   /* Teal gradient text */
.container-main  /* max-w-7xl centered */
```

---

## SEO Strategy

This site implements aggressive SEO optimization:

- **Metadata**: Per-page title, description, keywords, canonical URLs
- **Open Graph / Twitter Cards**: Social sharing previews on all pages
- **JSON-LD Structured Data**: SoftwareApplication schema in root layout
- **Dynamic Sitemap**: Auto-generated `sitemap.xml` via `src/app/sitemap.ts`
- **Semantic HTML**: Proper heading hierarchy, landmark elements, ARIA
- **Performance**: Next.js SSR/SSG, image optimization, font display swap
- **Target Keywords**: "email infrastructure", "email API", "SendGrid alternative", "email deliverability Africa", "SMTP relay", "email for developers"

### Structured Data

The root layout includes JSON-LD for:
- `SoftwareApplication` (product type)
- `Organization` (company info)
- `AggregateOffer` (pricing range)
- `AggregateRating` (social proof)

---

## Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# No required env vars for the marketing site
# Add analytics/tracking IDs as needed:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://clicksenders.com
```

### Key Config Files

| File | Purpose |
|------|---------|
| `next.config.mjs` | Next.js config (images, headers, redirects) |
| `tailwind.config.ts` | Design tokens, custom animations, colors |
| `tsconfig.json` | TypeScript paths (`@/*` → `./src/*`) |
| `postcss.config.js` | PostCSS plugins (Tailwind, Autoprefixer) |

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo to [Vercel](https://vercel.com) for automatic deployments on every push.

### Other Platforms

The site builds to a standard Next.js output compatible with any Node.js hosting:

```bash
npm run build   # Creates .next/ directory
npm start       # Starts production server on port 3000
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run linting: `npm run lint`
5. Commit with conventional commits: `feat: add new section`
6. Push and open a Pull Request

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

## Links

- **Website**: [clicksenders.com](https://clicksenders.com)
- **Case Study**: [Techzoid Innovation](https://www.techzoidinnovation.com/case-studies/clicksenders)
- **Twitter**: [@clicksenders](https://twitter.com/clicksenders)
- **Email**: hello@clicksenders.com
