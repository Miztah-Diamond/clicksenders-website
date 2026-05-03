import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Get in Touch With ClickSenders',
  description: 'Contact ClickSenders for sales inquiries, technical support, or partnership opportunities. We typically respond within 4 hours.',
  keywords: ['contact ClickSenders', 'email infrastructure support', 'email API sales', 'ClickSenders support'],
  openGraph: {
    title: 'Contact — ClickSenders',
    description: 'Get in touch with our team for sales, support, or partnership inquiries.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
