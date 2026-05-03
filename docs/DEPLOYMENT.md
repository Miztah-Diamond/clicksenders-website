# Deployment Guide

## Vercel (Recommended)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/clicksenders/clicksenders-website)

### Manual Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### GitHub Integration

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Next.js — no config needed
5. Every push to `main` triggers a production deploy
6. Every PR gets a preview deploy URL

### Environment Variables (Vercel Dashboard)

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | Production URL (defaults to Vercel domain) |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

## Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run

```bash
docker build -t clicksenders-website .
docker run -p 3000:3000 clicksenders-website
```

## Static Export (Optional)

If you don't need SSR, you can export as a static site:

```js
// next.config.mjs
const nextConfig = {
  output: 'export',
}
```

```bash
npm run build
# Output in /out directory — deploy to any static host
```

Note: Static export disables API routes, middleware, and SSR features.

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify Open Graph previews (use [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] Test sitemap at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Run Lighthouse audit (target 90+ all categories)
- [ ] Set up custom domain and SSL
- [ ] Configure analytics tracking
- [ ] Set up uptime monitoring
