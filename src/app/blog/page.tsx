import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Email Deliverability Tips, Guides & Updates',
  description: 'Expert guides on email deliverability, infrastructure best practices, API tutorials, and ClickSenders product updates. Learn how to optimize your email game.',
  keywords: ['email deliverability tips', 'email infrastructure blog', 'email API tutorials', 'SMTP setup guide', 'email best practices', 'SPF DKIM DMARC guide'],
  openGraph: {
    title: 'Blog — ClickSenders Email Insights & Guides',
    description: 'Expert guides on email deliverability, infrastructure best practices, and product updates.',
  },
}

const blogPosts = [
  {
    slug: 'why-email-deliverability-broken-africa',
    title: 'Why Email Deliverability is Broken for African Businesses (And How to Fix It)',
    excerpt: 'African IP ranges suffer from poor global reputation. Here\'s why it happens, what it costs your business, and the infrastructure changes that actually work.',
    category: 'Deliverability',
    author: 'ClickSenders Team',
    date: 'April 28, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'spf-dkim-dmarc-complete-guide',
    title: 'The Complete Guide to SPF, DKIM, and DMARC in 2026',
    excerpt: 'Email authentication is no longer optional. Learn how to set up SPF, DKIM, and DMARC correctly to protect your domain and reach the inbox.',
    category: 'Technical',
    author: 'Engineering Team',
    date: 'April 15, 2026',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'ip-warmup-strategy-guide',
    title: 'IP Warm-Up Strategy: From 0 to 1 Million Emails',
    excerpt: 'Sending from a new IP? You need a warm-up plan. Here\'s our battle-tested strategy for building sender reputation safely and quickly.',
    category: 'Infrastructure',
    author: 'Engineering Team',
    date: 'March 30, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'clicksenders-vs-sendgrid-comparison',
    title: 'ClickSenders vs SendGrid: An Honest Comparison for 2026',
    excerpt: 'We compare features, pricing, deliverability, and developer experience between ClickSenders and SendGrid. See which platform fits your needs.',
    category: 'Comparison',
    author: 'ClickSenders Team',
    date: 'March 18, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'transactional-email-best-practices',
    title: '10 Transactional Email Best Practices Every Developer Should Know',
    excerpt: 'From retry logic to template design, these battle-tested practices will improve your transactional email delivery rates and user experience.',
    category: 'Best Practices',
    author: 'Engineering Team',
    date: 'March 5, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'email-api-integration-nodejs',
    title: 'Building a Complete Email System with Node.js and ClickSenders',
    excerpt: 'Step-by-step tutorial: set up transactional emails, template management, webhook handling, and analytics in your Node.js application.',
    category: 'Tutorial',
    author: 'Engineering Team',
    date: 'February 20, 2026',
    readTime: '15 min read',
    featured: false,
  },
]

const categories = ['All', 'Deliverability', 'Technical', 'Infrastructure', 'Comparison', 'Best Practices', 'Tutorial']

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured)
  const otherPosts = blogPosts.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-main relative">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-3">Blog</p>
            <h1 className="text-display-sm sm:text-display-md text-dark-900 mb-6">
              Insights on{' '}
              <span className="gradient-text">email infrastructure</span>
            </h1>
            <p className="text-lg text-dark-500 leading-relaxed">
              Expert guides, technical deep-dives, and product updates from the ClickSenders team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 bg-white border-b border-dark-100">
        <div className="container-main">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === 'All'
                    ? 'bg-teal-600 text-white'
                    : 'bg-dark-50 text-dark-500 hover:bg-dark-100 hover:text-dark-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="container-main">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-dark-50/50 rounded-2xl border border-dark-100 overflow-hidden hover:border-teal-200 hover:shadow-lg transition-all">
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
                  <div className="text-6xl font-bold text-teal-300">CS</div>
                </div>
                <div className="p-8">
                  <span className="badge mb-4">{featuredPost.category}</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-dark-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-dark-500 text-sm leading-relaxed mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-dark-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="section-padding bg-dark-50/50">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-xl border border-dark-100 overflow-hidden hover:border-teal-200 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="aspect-[16/9] bg-gradient-to-br from-dark-50 to-dark-100 flex items-center justify-center">
                    <span className="text-3xl font-bold text-dark-200">CS</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="badge mb-3 self-start">{post.category}</span>
                    <h3 className="text-base font-semibold text-dark-900 mb-2 group-hover:text-teal-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-dark-500 leading-relaxed mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-dark-400 pt-4 border-t border-dark-50">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white border-t border-dark-100">
        <div className="container-narrow">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-xl font-bold text-dark-900 mb-3">
              Stay in the loop
            </h2>
            <p className="text-sm text-dark-500 mb-6">
              Get the latest on email deliverability, infrastructure tips, and product updates. No spam — we know a thing or two about that.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-4 py-2.5 rounded-lg border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
              <button type="submit" className="btn-primary px-6 py-2.5 gap-1.5 shrink-0">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
