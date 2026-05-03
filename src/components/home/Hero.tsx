'use client'

import Link from 'next/link'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'

const heroFeatures = [
  '99.8% inbox placement',
  'No credit card required',
  '1,000 free emails/month',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-teal-100/40 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-teal-50/30 via-transparent to-transparent" />

      <div className="container-main relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium animate-fade-in">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse-soft" />
            Built in Africa. Deployed Globally.
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-display-xl font-bold text-dark-900 mb-6 text-balance">
            Email infrastructure{' '}
            <span className="gradient-text">built&nbsp;for&nbsp;scale</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-dark-500 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
            High-volume sending, real-time analytics, and industry-leading deliverability.
            The email platform developers love and businesses trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/pricing"
              className="btn-primary px-8 py-3.5 text-base gap-2 shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30"
            >
              Start Sending Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs"
              className="btn-secondary px-8 py-3.5 text-base gap-2"
            >
              <Play className="w-4 h-4 fill-current" /> View Documentation
            </Link>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-dark-500">
            {heroFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Preview Card */}
        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-teal-300/10 to-teal-500/20 rounded-2xl blur-xl" />

            <div className="relative bg-dark-900 rounded-2xl border border-dark-700 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-800 border-b border-dark-700">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-dark-500 font-mono ml-2">send-email.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="text-dark-400">
                  <span className="text-purple-400">import</span>
                  <span className="text-dark-300"> {'{'} ClickSenders {'}'} </span>
                  <span className="text-purple-400">from</span>
                  <span className="text-green-400"> &apos;clicksenders&apos;</span>
                  <span className="text-dark-500">;</span>
                </div>
                <div className="mt-4 text-dark-400">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400"> client </span>
                  <span className="text-dark-500">= </span>
                  <span className="text-purple-400">new</span>
                  <span className="text-yellow-400"> ClickSenders</span>
                  <span className="text-dark-300">(</span>
                  <span className="text-green-400">&apos;cs_live_your_api_key&apos;</span>
                  <span className="text-dark-300">)</span>
                  <span className="text-dark-500">;</span>
                </div>
                <div className="mt-4 text-dark-400">
                  <span className="text-purple-400">await</span>
                  <span className="text-blue-400"> client</span>
                  <span className="text-dark-300">.</span>
                  <span className="text-yellow-400">send</span>
                  <span className="text-dark-300">{'({'}</span>
                </div>
                <div className="text-dark-400 pl-4">
                  <span className="text-dark-300">from</span>
                  <span className="text-dark-500">: </span>
                  <span className="text-green-400">&apos;hello@yourbusiness.com&apos;</span>
                  <span className="text-dark-500">,</span>
                </div>
                <div className="text-dark-400 pl-4">
                  <span className="text-dark-300">to</span>
                  <span className="text-dark-500">:   </span>
                  <span className="text-green-400">&apos;customer@email.com&apos;</span>
                  <span className="text-dark-500">,</span>
                </div>
                <div className="text-dark-400 pl-4">
                  <span className="text-dark-300">subject</span>
                  <span className="text-dark-500">: </span>
                  <span className="text-green-400">&apos;Welcome aboard!&apos;</span>
                  <span className="text-dark-500">,</span>
                </div>
                <div className="text-dark-400 pl-4">
                  <span className="text-dark-300">html</span>
                  <span className="text-dark-500">: </span>
                  <span className="text-green-400">&apos;&lt;h1&gt;Hello from ClickSenders&lt;/h1&gt;&apos;</span>
                </div>
                <div className="text-dark-300">{'}'});</div>
                <div className="mt-3 text-dark-500">
                  {'// '}
                  <span className="text-teal-400">✓ Delivered in 1.2s — inbox placement confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
