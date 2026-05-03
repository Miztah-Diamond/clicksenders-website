import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://clicksenders.com'),
  title: {
    default: 'ClickSenders — Enterprise Email Infrastructure for Scale & Deliverability',
    template: '%s | ClickSenders',
  },
  description: 'Enterprise-grade email infrastructure built for scale, speed, and deliverability. High-volume sending, real-time analytics, full API access. Purpose-built for African businesses, deployed globally.',
  keywords: [
    'email infrastructure',
    'email API',
    'SMTP relay',
    'email deliverability',
    'transactional email',
    'bulk email',
    'email marketing platform',
    'African email platform',
    'email delivery service',
    'email sending API',
    'high-volume email',
    'email analytics',
    'SPF DKIM DMARC',
    'IP warm-up',
    'email template builder',
    'SendGrid alternative',
    'Mailgun alternative',
    'email for developers',
    'email infrastructure Africa',
    'enterprise email solution',
  ],
  authors: [{ name: 'ClickSenders', url: 'https://clicksenders.com' }],
  creator: 'ClickSenders',
  publisher: 'ClickSenders',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clicksenders.com',
    title: 'ClickSenders — Enterprise Email Infrastructure for Scale & Deliverability',
    description: 'High-volume email sending with real-time analytics, full API access, and industry-leading deliverability. Built for Africa, deployed globally.',
    siteName: 'ClickSenders',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ClickSenders Email Infrastructure' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickSenders — Enterprise Email Infrastructure',
    description: 'High-volume email sending with real-time analytics, full API access, and industry-leading deliverability.',
    images: ['/og-image.png'],
    creator: '@clicksenders',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://clicksenders.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ClickSenders',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Enterprise-grade email infrastructure built for scale, speed, and deliverability.',
  url: 'https://clicksenders.com',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '0',
    highPrice: '500',
    offerCount: '3',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
  provider: {
    '@type': 'Organization',
    name: 'ClickSenders',
    url: 'https://clicksenders.com',
    logo: 'https://clicksenders.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@clicksenders.com',
    },
    sameAs: [
      'https://twitter.com/clicksenders',
      'https://linkedin.com/company/clicksenders',
      'https://github.com/clicksenders',
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
