'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What is ClickSenders?',
    answer: 'ClickSenders is an enterprise-grade email infrastructure platform built for scale, speed, and deliverability. We provide high-volume email sending with real-time analytics, full API access, and purpose-built infrastructure optimized for African IP ranges — though we serve businesses globally.',
  },
  {
    question: 'How does ClickSenders compare to SendGrid or Mailgun?',
    answer: 'Unlike SendGrid or Mailgun, ClickSenders was purpose-built with custom SMTP infrastructure optimized for African sending patterns and IP ranges. We offer dedicated IPs on our Growth plan (competitors charge extra), automated deliverability setup, and significantly lower pricing — sending 100K emails costs just $25 vs. $50+ with competitors.',
  },
  {
    question: 'Do you support transactional and marketing emails?',
    answer: 'Yes. ClickSenders handles both transactional emails (order confirmations, password resets, notifications) and marketing campaigns (newsletters, promotions, drip sequences). Our template builder and list management tools make both workflows seamless.',
  },
  {
    question: 'What programming languages do you support?',
    answer: 'We offer official SDKs for Node.js, Python, PHP, Ruby, Go, and Java. You can also integrate via our RESTful API or SMTP relay from any language or platform. Our documentation includes examples for all major frameworks.',
  },
  {
    question: 'How does the free plan work?',
    answer: 'Our Starter plan is free forever and includes 1,000 emails per month, API access, basic analytics, email templates, and SPF/DKIM setup. No credit card required. When you need more volume or features like dedicated IPs, upgrade to our Growth plan.',
  },
  {
    question: 'What deliverability rates can I expect?',
    answer: 'ClickSenders achieves a 99.8% inbox placement rate through automated SPF, DKIM, and DMARC configuration, IP warm-up scheduling, continuous reputation monitoring, and custom SMTP infrastructure. We actively manage sender reputation to keep your emails out of spam.',
  },
  {
    question: 'Can I use ClickSenders outside Africa?',
    answer: 'Absolutely. While our infrastructure is optimized for African sending patterns, ClickSenders serves businesses globally. Our platform is deployed worldwide and delivers emails to inboxes anywhere on the planet with the same speed and reliability.',
  },
  {
    question: 'Do you offer an SLA?',
    answer: 'Yes. Our Enterprise plan includes a 99.99% uptime SLA with dedicated support, a named account manager, and phone/Slack support channels. Growth plan customers receive priority email support with a 4-hour response time.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-dark-50/50">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-title mb-4">
            Frequently asked questions
          </h2>
          <p className="section-description mx-auto">
            Everything you need to know about ClickSenders. Can&apos;t find your answer?{' '}
            <a href="/contact" className="text-teal-600 font-medium hover:text-teal-700 underline underline-offset-2">
              Get in touch
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-dark-100 overflow-hidden transition-all duration-200 hover:border-dark-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-dark-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-dark-400 shrink-0 transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <p className="px-6 pb-5 text-sm text-dark-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
