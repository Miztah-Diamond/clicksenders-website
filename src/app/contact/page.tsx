'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, MessageSquare, Clock, MapPin, Phone, ArrowRight, Send } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Our team typically responds within 4 hours.',
    action: 'hello@clicksenders.com',
    href: 'mailto:hello@clicksenders.com',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Available Mon–Fri, 8am–6pm WAT.',
    action: 'Start a conversation',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Support',
    description: 'Technical support for existing customers.',
    action: 'support@clicksenders.com',
    href: 'mailto:support@clicksenders.com',
  },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => setFormStatus('sent'), 1500)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-main relative">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-3">Contact</p>
            <h1 className="text-display-sm sm:text-display-md text-dark-900 mb-6">
              Let&apos;s talk about your{' '}
              <span className="gradient-text">email needs</span>
            </h1>
            <p className="text-lg text-dark-500 leading-relaxed">
              Whether you need help getting started, have a technical question,
              or want to discuss enterprise solutions — we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="card group hover:border-teal-300 text-center p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-100 transition-colors">
                  <method.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-sm font-semibold text-dark-900 mb-1">{method.title}</h3>
                <p className="text-xs text-dark-400 mb-3">{method.description}</p>
                <span className="text-sm font-medium text-teal-600">{method.action}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-dark-50/50">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-dark-100 p-8">
                <h2 className="text-xl font-bold text-dark-900 mb-2">Send us a message</h2>
                <p className="text-sm text-dark-400 mb-8">
                  Fill out the form and we&apos;ll get back to you within one business day.
                </p>

                {formStatus === 'sent' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-dark-900 mb-2">Message sent!</h3>
                    <p className="text-sm text-dark-500">
                      We&apos;ll get back to you within 24 hours. Check your inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-dark-700 mb-1.5">
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-dark-700 mb-1.5">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1.5">
                        Work email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-dark-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2.5 rounded-lg border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-1.5">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-2.5 rounded-lg border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all bg-white"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales / Enterprise</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                        placeholder="Tell us about your email needs..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="btn-primary w-full py-3 gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-dark-900 mb-4">Our Office</h3>
                <div className="flex items-start gap-3 text-sm text-dark-500">
                  <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <p>Lagos, Nigeria</p>
                    <p className="text-xs text-dark-400 mt-1">
                      Built in Africa. Deployed globally.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-dark-900 mb-4">For Sales</h3>
                <div className="flex items-start gap-3 text-sm text-dark-500">
                  <Mail className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <p>sales@clicksenders.com</p>
                    <p className="text-xs text-dark-400 mt-1">
                      Enterprise plans, volume discounts, custom integrations
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-dark-900 mb-4">For Press</h3>
                <div className="flex items-start gap-3 text-sm text-dark-500">
                  <Mail className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <p>press@clicksenders.com</p>
                    <p className="text-xs text-dark-400 mt-1">
                      Media inquiries and press resources
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-dark-100 p-6">
                <h3 className="text-sm font-semibold text-dark-900 mb-2">
                  Looking for docs?
                </h3>
                <p className="text-xs text-dark-400 mb-4">
                  Check our API documentation and developer guides for technical questions.
                </p>
                <Link href="/docs" className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1">
                  Visit Documentation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
