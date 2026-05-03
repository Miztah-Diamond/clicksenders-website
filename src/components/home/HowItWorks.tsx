'use client'

import { Terminal, Send, BarChart3, CheckCircle } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Terminal,
    title: 'Connect in minutes',
    description: 'Install our SDK, grab your API key, and send your first email in under 5 minutes. Works with any stack.',
    code: 'npm install clicksenders',
  },
  {
    step: '02',
    icon: Send,
    title: 'Send with confidence',
    description: 'Our deliverability engine handles SPF, DKIM, DMARC, IP warm-up, and reputation monitoring automatically.',
    code: 'await client.send({ to, from, html })',
  },
  {
    step: '03',
    icon: BarChart3,
    title: 'Track everything',
    description: 'Real-time dashboards show opens, clicks, bounces, and deliverability scores. Webhooks for every event.',
    code: '// 99.8% inbox placement ✓',
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Scale without limits',
    description: 'From 100 emails to 100 million. Our infrastructure grows with you — no performance degradation, ever.',
    code: '// 500M+ emails processed',
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding bg-dark-50/50 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container-main relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">How It Works</p>
          <h2 className="section-title mb-4">
            From zero to inbox in minutes
          </h2>
          <p className="section-description mx-auto">
            ClickSenders was designed for speed — both delivery speed and developer speed.
            Get started in four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-teal-300 to-teal-100" />
              )}

              <div className="text-center lg:text-left">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white text-sm font-bold mb-5 shadow-lg shadow-teal-600/20">
                  {step.step}
                </div>

                <h3 className="text-lg font-semibold text-dark-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-dark-500 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Mini Code Block */}
                <div className="inline-block bg-dark-900 rounded-lg px-4 py-2 font-mono text-xs text-teal-400">
                  {step.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
