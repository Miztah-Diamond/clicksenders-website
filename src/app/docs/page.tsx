import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Code2, Terminal, Webhook, Key, Boxes, FileCode2, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation — API Reference & Developer Guides',
  description: 'Complete ClickSenders API documentation. RESTful API reference, SDK guides, SMTP relay setup, webhook configuration, and code examples for Node.js, Python, PHP, and more.',
  keywords: ['email API documentation', 'email API reference', 'SMTP relay documentation', 'email SDK guide', 'email webhook setup', 'developer email docs'],
  openGraph: {
    title: 'Documentation — ClickSenders API Reference',
    description: 'Complete API documentation, SDK guides, and code examples for ClickSenders email infrastructure.',
  },
}

const quickLinks = [
  { icon: Key, title: 'Authentication', description: 'API keys, bearer tokens, and security best practices', href: '#auth' },
  { icon: Zap, title: 'Send Email', description: 'Send your first email in under 5 minutes', href: '#send' },
  { icon: Webhook, title: 'Webhooks', description: 'Receive real-time event notifications', href: '#webhooks' },
  { icon: Boxes, title: 'Templates', description: 'Create and manage email templates via API', href: '#templates' },
]

const sdks = [
  { language: 'Node.js', install: 'npm install clicksenders', color: 'text-green-600 bg-green-50' },
  { language: 'Python', install: 'pip install clicksenders', color: 'text-blue-600 bg-blue-50' },
  { language: 'PHP', install: 'composer require clicksenders/sdk', color: 'text-purple-600 bg-purple-50' },
  { language: 'Ruby', install: 'gem install clicksenders', color: 'text-red-600 bg-red-50' },
  { language: 'Go', install: 'go get github.com/clicksenders/go-sdk', color: 'text-cyan-600 bg-cyan-50' },
  { language: 'Java', install: 'implementation "com.clicksenders:sdk:1.0"', color: 'text-orange-600 bg-orange-50' },
]

const endpoints = [
  { method: 'POST', path: '/v1/emails/send', description: 'Send a single email or batch', tag: 'Core' },
  { method: 'GET', path: '/v1/emails/{id}', description: 'Get email delivery status', tag: 'Core' },
  { method: 'POST', path: '/v1/emails/batch', description: 'Send up to 1,000 emails in one request', tag: 'Batch' },
  { method: 'GET', path: '/v1/analytics/overview', description: 'Get sending analytics summary', tag: 'Analytics' },
  { method: 'GET', path: '/v1/analytics/deliverability', description: 'Deliverability metrics and scores', tag: 'Analytics' },
  { method: 'POST', path: '/v1/templates', description: 'Create a new email template', tag: 'Templates' },
  { method: 'GET', path: '/v1/templates', description: 'List all templates', tag: 'Templates' },
  { method: 'POST', path: '/v1/lists', description: 'Create a subscriber list', tag: 'Lists' },
  { method: 'POST', path: '/v1/lists/{id}/subscribers', description: 'Add subscribers to a list', tag: 'Lists' },
  { method: 'GET', path: '/v1/webhooks', description: 'List configured webhooks', tag: 'Webhooks' },
  { method: 'POST', path: '/v1/webhooks', description: 'Create a webhook endpoint', tag: 'Webhooks' },
  { method: 'POST', path: '/v1/domains/verify', description: 'Verify a sending domain', tag: 'Domains' },
]

const methodColors: Record<string, string> = {
  GET: 'text-blue-600 bg-blue-50',
  POST: 'text-green-600 bg-green-50',
  PUT: 'text-yellow-600 bg-yellow-50',
  DELETE: 'text-red-600 bg-red-50',
}

export default function DocsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-main relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-3">Documentation</p>
            <h1 className="text-display-sm sm:text-display-md text-dark-900 mb-6">
              Build with the{' '}
              <span className="gradient-text">ClickSenders API</span>
            </h1>
            <p className="text-lg text-dark-500 leading-relaxed mb-8">
              Everything you need to integrate email sending into your application.
              RESTful API, SDKs for every major language, and comprehensive guides.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="#send" className="btn-primary px-6 py-3 gap-2">
                <Terminal className="w-4 h-4" /> Quick Start
              </Link>
              <Link href="#endpoints" className="btn-secondary px-6 py-3 gap-2">
                <BookOpen className="w-4 h-4" /> API Reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-dark-50/50">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <a key={link.title} href={link.href} className="card group hover:border-teal-300 p-5">
                <link.icon className="w-8 h-8 text-teal-500 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-semibold text-dark-900 mb-1">{link.title}</h3>
                <p className="text-xs text-dark-400">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="send" className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-dark-900 mb-3">Quick Start</h2>
          <p className="text-dark-500 mb-8">Send your first email in 3 steps.</p>

          {/* Step 1: Install */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-dark-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              Install the SDK
            </h3>
            <div className="code-block">
              <code>
                <span className="text-dark-500">$</span>{' '}
                <span className="text-green-400">npm install</span>{' '}
                <span className="text-white">clicksenders</span>
              </code>
            </div>
          </div>

          {/* Step 2: Configure */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-dark-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">2</span>
              Initialize the client
            </h3>
            <div className="code-block">
              <pre className="text-sm leading-relaxed">{`import { ClickSenders } from 'clicksenders';

const client = new ClickSenders('cs_live_your_api_key');`}</pre>
            </div>
          </div>

          {/* Step 3: Send */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-dark-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center font-bold">3</span>
              Send an email
            </h3>
            <div className="code-block">
              <pre className="text-sm leading-relaxed">{`const response = await client.send({
  from: 'hello@yourbusiness.com',
  to: 'customer@email.com',
  subject: 'Welcome aboard!',
  html: '<h1>Hello from ClickSenders</h1>',
  tags: ['welcome', 'onboarding'],
});

console.log(response);
// {
//   id: 'msg_abc123',
//   status: 'sent',
//   deliveredAt: '2026-01-15T10:30:00Z'
// }`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="section-padding bg-dark-50/50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark-900 mb-3">Official SDKs</h2>
            <p className="text-dark-500">First-class support for every major language.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {sdks.map((sdk) => (
              <div key={sdk.language} className="bg-white rounded-xl border border-dark-100 p-5 hover:border-teal-200 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${sdk.color}`}>
                    {sdk.language}
                  </span>
                </div>
                <div className="bg-dark-900 rounded-lg px-4 py-2.5 font-mono text-xs text-teal-400 overflow-x-auto">
                  {sdk.install}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section id="endpoints" className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark-900 mb-3">API Reference</h2>
            <p className="text-dark-500">Complete list of available endpoints.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-dark-100 overflow-hidden">
            <div className="divide-y divide-dark-50">
              {endpoints.map((endpoint) => (
                <div key={`${endpoint.method}-${endpoint.path}`} className="flex items-center gap-4 px-6 py-4 hover:bg-dark-50/50 transition-colors">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md shrink-0 w-14 text-center ${methodColors[endpoint.method]}`}>
                    {endpoint.method}
                  </span>
                  <code className="text-sm font-mono text-dark-700 shrink-0">
                    {endpoint.path}
                  </code>
                  <span className="text-sm text-dark-400 hidden sm:block ml-auto">
                    {endpoint.description}
                  </span>
                  <span className="text-xs bg-dark-50 text-dark-500 px-2 py-0.5 rounded hidden md:block shrink-0">
                    {endpoint.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-dark-400">
              This is a preview. Full interactive API reference coming soon.{' '}
              <Link href="/contact" className="text-teal-600 font-medium hover:text-teal-700">
                Request early access →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to integrate?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            Get your API key and start sending in under 5 minutes.
          </p>
          <Link href="/pricing" className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-teal-700 bg-white rounded-lg hover:bg-teal-50 transition-all gap-2">
            Get API Key <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
