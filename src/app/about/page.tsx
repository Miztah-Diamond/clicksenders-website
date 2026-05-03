import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, Shield, Zap, Heart, Target, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Our Mission to Fix Email for Africa',
  description: 'ClickSenders was founded to solve a broken system. African businesses deserve email infrastructure that works — reliable, affordable, and built for local needs.',
  keywords: ['about ClickSenders', 'email infrastructure Africa', 'African email platform', 'email startup', 'African tech company'],
  openGraph: {
    title: 'About ClickSenders — Fixing Email Infrastructure for Africa',
    description: 'We built ClickSenders because email deliverability is broken for African businesses.',
  },
}

const values = [
  {
    icon: Zap,
    title: 'Speed First',
    description: 'Every millisecond matters. We obsess over delivery speed, API response times, and developer velocity.',
  },
  {
    icon: Shield,
    title: 'Reliability Always',
    description: '99.99% uptime isn\'t a marketing number — it\'s our engineering standard. Your emails must arrive.',
  },
  {
    icon: Globe,
    title: 'Built for Everyone',
    description: 'Purpose-built for Africa, deployed globally. Great infrastructure shouldn\'t be limited by geography.',
  },
  {
    icon: Heart,
    title: 'Developer Love',
    description: 'Clean APIs, comprehensive docs, and SDKs that make integration a joy. We build tools we\'d want to use.',
  },
  {
    icon: Target,
    title: 'Honest Pricing',
    description: 'No hidden fees, no surprises, no vendor lock-in. You pay for what you send, nothing more.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our roadmap is shaped by the developers and businesses who use ClickSenders every day.',
  },
]

const milestones = [
  { year: '2024', title: 'Founded', description: 'ClickSenders was born from the frustration of dealing with email deliverability issues in African markets.' },
  { year: '2024', title: 'First Infrastructure', description: 'Built custom SMTP infrastructure optimized for African IP ranges and sending patterns.' },
  { year: '2025', title: 'Public Beta', description: 'Opened to early adopters. Processed our first million emails with 99.7% inbox placement.' },
  { year: '2025', title: '100M Emails', description: 'Reached 100 million emails processed. Expanded infrastructure to 3 global regions.' },
  { year: '2026', title: '500M+ & Growing', description: 'Over 500 million emails delivered. Trusted by hundreds of businesses across Africa and beyond.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-3">About Us</p>
            <h1 className="text-display-sm sm:text-display-md text-dark-900 mb-6">
              Email deliverability is{' '}
              <span className="gradient-text">broken for Africa.</span>{' '}
              We&apos;re fixing it.
            </h1>
            <p className="text-lg text-dark-500 leading-relaxed">
              International platforms charge premium prices, ignore African IP challenges,
              and offer zero local support. ClickSenders was built to change that —
              purpose-built infrastructure, fair pricing, and a team that understands your market.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-3">The Problem</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Why existing platforms fail African businesses
              </h2>
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  International email platforms charge premium prices that are prohibitive
                  for many African businesses trying to scale.
                </p>
                <p>
                  African IP ranges suffer from poor sender reputation globally, leading to
                  emails landing in spam even when content is legitimate.
                </p>
                <p>
                  There is little to no local support or infrastructure optimized for African
                  sending patterns, leaving businesses without expert guidance.
                </p>
              </div>
            </div>
            <div>
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-3">Our Approach</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Purpose-built, not a wrapper
              </h2>
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  We built custom SMTP infrastructure optimized for African sending patterns
                  and IP ranges — from the ground up.
                </p>
                <p>
                  We designed IP warm-up and reputation management workflows from scratch,
                  specifically addressing the challenges of African IP blocks.
                </p>
                <p>
                  The result: industry-leading inbox placement rates at a fraction of the
                  cost of international alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Our Values</p>
            <h2 className="section-title mb-4">What drives us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{value.title}</h3>
                <p className="text-sm text-dark-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-50/50">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Our Journey</p>
            <h2 className="section-title mb-4">From idea to 500M+ emails</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-teal-200" />

              <div className="space-y-10">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-600/20">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold text-dark-900 mt-1 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-dark-500 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Join hundreds of businesses sending with confidence
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Start free and see the difference purpose-built infrastructure makes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-teal-700 bg-white rounded-lg hover:bg-teal-50 transition-all gap-2">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-white border border-teal-400 rounded-lg hover:bg-teal-500 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
