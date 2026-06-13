# Contributing to ClickSenders Website

Thank you for your interest in contributing to the ClickSenders website. This document provides guidelines and instructions for contributing.

## Development Setup

### Prerequisites

- Node.js 18.17+
- npm 9+ (or yarn/pnpm)
- Git

### Getting Started

```bash
git clone https://github.com/clicksenders/clicksenders-website.git
cd clicksenders-website
npm install
npm run dev
```

The dev server runs at `http://localhost:3000` with hot module replacement.

## Project Architecture

### App Router (Next.js 14)

We use the Next.js App Router. Key conventions:

- `page.tsx` files define routes
- `layout.tsx` files wrap child routes
- Server Components by default — add `'use client'` only when needed
- Metadata exports for SEO (server components only)
- Client components needing metadata use a sibling `layout.tsx`

### Component Organization

```
src/components/
├── home/        # Home page section components
├── layout/      # Shared layout (Navbar, Footer)
└── ui/          # Reusable UI primitives (future)
```

### Data & Constants

All site content lives in `src/lib/constants.ts`. To update pricing, features, testimonials, or navigation, edit this file rather than modifying individual components.

## Code Standards

### TypeScript

- Strict mode enabled
- Use explicit types for component props
- Avoid `any` — use `unknown` or proper types
- Path aliases: `@/*` maps to `./src/*`

### Styling

- Tailwind CSS with custom design tokens in `tailwind.config.ts`
- Use utility classes in JSX, custom component classes in `globals.css`
- Follow the existing pattern: `btn-primary`, `card`, `section-padding`
- Mobile-first responsive design (sm → md → lg → xl)

### Component Patterns

```tsx
// Server component (default) — no 'use client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
}

export default function PageName() {
  return <section>...</section>
}
```

```tsx
// Client component — interactive elements
'use client'

import { useState } from 'react'

export function InteractiveComponent() {
  const [state, setState] = useState(false)
  return <div>...</div>
}
```

### Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `Hero.tsx`, `ComparisonTable.tsx` |
| Pages | `page.tsx` in route folder | `src/app/pricing/page.tsx` |
| Utilities | camelCase | `utils.ts`, `constants.ts` |
| CSS classes | kebab-case | `section-padding`, `btn-primary` |
| Branches | kebab-case | `feature/add-pricing-toggle` |

## Git Workflow

### Branch Naming

```
feature/description     # New features
fix/description         # Bug fixes
docs/description        # Documentation
refactor/description    # Code improvements
```

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add email volume calculator to pricing page
fix: resolve navbar scroll detection on mobile
docs: update API endpoint reference
style: adjust spacing in hero section
refactor: extract reusable Button component
chore: update dependencies
```

### Git Hooks & CI

`npm install` activates the committed hooks in `.githooks/` (via the `prepare` script, which sets
`git config core.hooksPath .githooks` — no Husky dependency). If you skipped install or hooks
aren't firing, run that command once manually.

- **pre-commit** — secret scan + ESLint on staged files.
- **pre-push** — blocks direct pushes to `main`/`master`, then runs `tsc --noEmit` + lint (light by
  design; the full test suite runs in CI).
- **commit-msg** — requires an attestation footer on every commit (see below).

Every commit message must end with a filled-in footer (the `.gitmessage` template prefills it; run
`git config commit.template .gitmessage` to load it in your editor):

```
Red-Team: <what you attacked; what you found or ruled out>
Blast-Radius: <files / callers / consumers you checked>
Skill: <skill used, or 'skipped — <reason>'>
Tests: <what ran + result, or 'none — <why>'>
Verified-vs-Assumed: <verified (method); assumed (reason + risk)>
```

Bare placeholders (`todo`, `none`, `n/a`, `-`, `...`) are rejected. Merge/revert commits are exempt.
Emergency bypass for any hook: `HOOKS_SKIP=1 git commit ...` / `HOOKS_SKIP=1 git push`.

CI (`.github/workflows/ci.yml`) runs `tsc` + lint (+ tests when a `test` script exists) on every PR.

### Pull Request Process

1. Branch from `main`
2. Make focused, atomic changes
3. Run `npm run lint` before committing
4. Write a clear PR description explaining what and why
5. Request review from a maintainer
6. Squash and merge after approval

## Adding a New Page

1. Create the route folder: `src/app/your-page/`
2. Add `page.tsx` with metadata export
3. Add the route to `navLinks` in `src/lib/constants.ts` (if it should appear in nav)
4. Add to `footerLinks` in constants if needed
5. Add to `sitemap.ts` for SEO

## Adding Content

### New Feature

Add to the `features` array in `src/lib/constants.ts`:

```ts
{
  title: 'Feature Name',
  description: 'What it does.',
  icon: 'IconName',  // Must match Lucide icon import
  category: 'category',
}
```

### New Blog Post

Add to the `blogPosts` array in `src/app/blog/page.tsx`. For individual post pages, create `src/app/blog/[slug]/page.tsx`.

### New Testimonial

Add to the `testimonials` array in `src/lib/constants.ts`.

## Performance Guidelines

- Use Next.js `Image` component for all images
- Lazy load below-the-fold content
- Keep client components minimal
- Prefer server components for static content
- Test with Lighthouse (target 90+ on all metrics)

## Accessibility

- Semantic HTML elements (`nav`, `main`, `section`, `article`)
- Proper heading hierarchy (h1 → h2 → h3, no skipping)
- All interactive elements keyboard-accessible
- Sufficient color contrast (WCAG 2.1 AA minimum)
- Alt text on all images
- ARIA labels on icon-only buttons

## Questions?

Open an issue or email [hello@clicksenders.com](mailto:hello@clicksenders.com).
