import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Zap, BarChart3, Code2, Layout, Users, Shield, Webhook, Clock,
  ArrowRight, Globe, Lock, Gauge, Mail, Server, Database, Bell,
  Layers, CheckCircle2, Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features — Enterprise Email Infrastructure',
  description: 'Explore ClickSenders features: high-volume sending, real-time analytics, RESTful API, SMTP relay, template builder, deliverability engine, and more.',
  keywords: ['email API features', 'email infrastructure features', 'email deliverability tools', 'email analytics dashboard', 'SMTP relay service', 'email template builder'],
  openGraph: {
    title: 'Features — ClickSenders Enterprise Email Infrastructure',
    description: 'High-volume sending, real-time analytics, full API access, and industry-leading deliverability.',
  },
}

const coreFeatures = [
  {
    icon: Zap,
    title: 'High-Volume Sending',
    description: 'Send millions of emails with intelligent queue management, rate limiting, and automatic throttling to protect sender reputation. Our infrastructure handles burst traffic without breaking a sweat.',
    highlights: ['Smart queue management', 'Auto rate limiting', 'Burst traffic handling', 'Zero message loss'],
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track open rates, click-through rates, bounce analysis, and deliverability metrics with a live-updating dashboard. Export data, build custom reports, and set up automated alerts.',
    highlights: ['Live delivery tracking', 'Bounce analysis', 'Click heatmaps', 'Custom reports'],
  },
  {
    icon: Code2,
    title: 'API & SMTP Access',
    description: 'Full RESTful API and SMTP relay for seamless developer integration into any application or workflow. Comprehensive SDKs for Node.js, Python, PHP, Ruby, Go, and Java.',
    highlights: ['RESTful API', 'SMTP relay', '6+ SDKs', 'Webhook events'],
  },
  {
    icon: Layout,
    title: 'Template Builder',
    description: 'Drag-and-drop email builder with a library of responsive, mobile-first templates ready for any campaign. Preview across devices and email clients before sending.',
    highlights: ['Drag-and-drop editor', 'Mobile-first templates', 'Client preview', 'Custom HTML support'],
  },
  {
    icon: Users,
    title: 'List Management',
    description: 'Subscriber management with advanced segmentation, tagging, bulk import/export, and suppression lists. Keep your lists clean and your targeting precise.',
    highlights: ['Advanced segmentation', 'Smart tagging', 'Bulk operations', 'Suppression lists'],
  },
  {
    icon: Shield,
    title: 'Deliverability Engine',
    description: 'Automated SPF, DKIM, and DMARC setup, IP warm-up scheduling, and continuous reputation monitoring. We handle the complex infrastructure so your emails reach the inbox.',
    highlights: ['Auto SPF/DKIM/DMARC', 'IP warm-up automation', 'Reputation monitoring', '99.8% inbox rate'],
  },
]

const additionalFeatures = [
  { icon: Webhook, title: 'Webhooks & Events', description: 'Real-time notifications for every email event — delivery, bounce, open, click, unsubscribe.' },
  { icon: Clock, title: 'Smart Scheduling', description: 'AI-powered send-time optimization based on recipient timezone and engagement patterns.' },
  { icon: Globe, title: 'Global Infrastructure', description: 'Distributed servers across multiple regions for low-latency delivery worldwide.' },
  { icon: Lock, title: 'Enterprise Security', description: 'SOC 2 compliant, AES-256 encryption at rest, TLS in transit, and role-based access control.' },
  { icon: Gauge, title: 'Performance Dashboard', description: 'Real-time system health, throughput metrics, and performance benchmarks at a glance.' },
  { icon: Mail, title: 'Inbound Processing', description: 'Parse incoming emails with webhooks — build reply handling, support tickets, and more.' },
  { icon: Server, title: 'Dedicated Infrastructure', description: 'Dedicated IPs and custom SMTP infrastructure for enterprise-grade isolation.' },
  { icon: Database, title: 'Data Export & Compliance', description: 'Export all data on demand. GDPR-ready with data retention controls and audit logs.' },
  { icon: Bell, title: 'Smart Alerts', description: 'Get notified when deliverability drops, bounce rates spike, or quotas are reached.' },
  { icon: Layers, title: 'Multi-Tenant Support', description: 'Manage multiple sending domains, IP pools, and API keys from a single account.' },
  { icon: Sparkles, title: 'Email Validation', description: 'Verify email addresses before sending to reduce bounces and protect your reputation.' },
  { icon: CheckCircle2, title: 'Compliance Tools', description: 'Built-in CAN-SPAM, GDPR, and POPIA compliance with automatic unsubscribe handling.' },
]

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-3">Features</p>
            <h1 className="text-display-sm sm:text-display-md lg:text-display-lg text-dark-900 mb-6">
              Built for developers.{' '}
              <span className="gradient-text">Trusted by businesses.</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-500 leading-relaxed mb-8">
              Every feature you need to send, track, and optimize your email — from
              a simple API call to enterprise-grade infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pricing" className="btn-primary px-8 py-3.5 gap-2">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/docs" className="btn-secondary px-8 py-3.5">
                Read the Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding bg-dark-50/50">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-3">
              Core Platform
            </h2>
            <p className="text-dark-500 text-lg max-w-2xl mx-auto">
              Six powerful pillars that make ClickSenders the most complete email infrastructure on the market.
            </p>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                    <feature.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-dark-500 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-dark-600">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-2xl border border-dark-100 p-8 aspect-video flex items-center justify-center">
                    <feature.icon className="w-20 h-20 text-teal-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-3">
              And so much more
            </h2>
            <p className="text-dark-500 text-lg max-w-2xl mx-auto">
              Every detail considered. Every edge case handled.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl border border-dark-100 hover:border-teal-200 hover:shadow-md transition-all duration-200 group">
                <feature.icon className="w-8 h-8 text-teal-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-semibold text-dark-900 mb-2">{feature.title}</h3>
                <p className="text-xs text-dark-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal-600 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to experience the difference?
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Start free, scale when ready. No credit card, no contracts, no surprises.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-teal-700 bg-white rounded-lg hover:bg-teal-50 transition-all shadow-lg gap-2"
          >
            Start Sending Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
