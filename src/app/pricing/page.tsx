import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight, HelpCircle } from 'lucide-react'
import { pricingPlans } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Pricing — Simple, Transparent Email Pricing',
  description: 'Start free with 1,000 emails/month. Scale to millions with predictable pricing. No hidden fees, no contracts. See ClickSenders pricing plans.',
  keywords: ['email API pricing', 'email infrastructure cost', 'SendGrid alternative pricing', 'affordable email platform', 'email service pricing', 'bulk email pricing'],
  openGraph: {
    title: 'Pricing — ClickSenders Email Infrastructure',
    description: 'Start free with 1,000 emails/month. Scale to millions with predictable pricing.',
  },
}

const faqPricing = [
  { q: 'Can I switch plans at any time?', a: 'Yes. Upgrade or downgrade anytime. Changes take effect immediately and billing is prorated.' },
  { q: 'What happens if I exceed my plan limit?', a: 'We never stop your emails. Overages are billed at competitive per-email rates, and we notify you before charges apply.' },
  { q: 'Do you offer annual billing?', a: 'Yes. Annual plans save you 20% compared to monthly billing. Contact us for custom annual agreements.' },
  { q: 'Is there a long-term contract?', a: 'No. All plans are month-to-month with no commitment. Enterprise plans can include custom terms if needed.' },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-3">Pricing</p>
            <h1 className="text-display-sm sm:text-display-md lg:text-display-lg text-dark-900 mb-6">
              Simple pricing,{' '}
              <span className="gradient-text">serious&nbsp;infrastructure</span>
            </h1>
            <p className="text-lg sm:text-xl text-dark-500 leading-relaxed">
              Start free. Scale when ready. Pay only for what you send.
              No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  'relative rounded-2xl border p-8 flex flex-col transition-all duration-300',
                  plan.popular
                    ? 'border-teal-400 shadow-xl shadow-teal-100 scale-[1.02]'
                    : 'border-dark-200 hover:border-dark-300 hover:shadow-lg'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-teal-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-dark-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-dark-400">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={cn(
                      'text-4xl font-bold',
                      plan.popular ? 'text-teal-600' : 'text-dark-900'
                    )}>
                      {plan.priceLabel}
                    </span>
                  </div>
                  <p className="text-sm text-dark-400 mt-1">{plan.priceSubtext}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-dark-600">
                      <Check className={cn(
                        'w-4 h-4 shrink-0 mt-0.5',
                        plan.popular ? 'text-teal-500' : 'text-dark-400'
                      )} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === 'Enterprise' ? '/contact' : '/pricing'}
                  className={cn(
                    'w-full justify-center py-3 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex items-center gap-2',
                    plan.popular
                      ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-600/20'
                      : 'bg-dark-900 text-white hover:bg-dark-800'
                  )}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Pricing */}
      <section className="section-padding bg-dark-50/50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark-900 mb-3">
              Need higher volume?
            </h2>
            <p className="text-dark-500 text-lg">
              We offer volume discounts that get better as you scale.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-dark-100 overflow-hidden max-w-2xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-100 bg-dark-50/50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-dark-600">Monthly Volume</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-dark-600">Price per 1,000</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Up to 50,000', '$0.50'],
                  ['50,001 — 200,000', '$0.40'],
                  ['200,001 — 1,000,000', '$0.25'],
                  ['1,000,001 — 5,000,000', '$0.15'],
                  ['5,000,000+', 'Custom'],
                ].map(([volume, price]) => (
                  <tr key={volume} className="border-b border-dark-50 last:border-0 hover:bg-dark-50/30 transition-colors">
                    <td className="py-3.5 px-6 text-sm text-dark-700">{volume}</td>
                    <td className="py-3.5 px-6 text-sm text-dark-900 font-semibold text-right">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark-900 mb-3">
              Common pricing questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {faqPricing.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-sm font-semibold text-dark-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-dark-500 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Start sending emails that land in the inbox
          </h2>
          <p className="text-dark-400 text-lg mb-8 max-w-xl mx-auto">
            1,000 emails/month free. No credit card needed. Set up in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="inline-flex items-center px-8 py-3.5 text-sm font-semibold bg-white text-dark-900 rounded-lg hover:bg-dark-100 transition-all gap-2">
              Create Free Account <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-white border border-dark-600 rounded-lg hover:bg-dark-800 transition-all">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
