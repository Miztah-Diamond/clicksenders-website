export const siteConfig = {
  name: 'ClickSenders',
  description: 'Enterprise-grade email infrastructure built for scale, speed, and deliverability. Purpose-built for African businesses, deployed globally.',
  url: 'https://clicksenders.com',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/clicksenders',
    github: 'https://github.com/clicksenders',
    linkedin: 'https://linkedin.com/company/clicksenders',
  },
  email: 'hello@clicksenders.com',
  supportEmail: 'support@clicksenders.com',
}

export const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const features = [
  {
    title: 'High-Volume Sending',
    description: 'Send millions of emails with intelligent queue management, rate limiting, and automatic throttling to protect sender reputation.',
    icon: 'Zap',
    category: 'infrastructure',
  },
  {
    title: 'Real-Time Analytics',
    description: 'Track open rates, click-through rates, bounce analysis, and deliverability metrics with a live-updating dashboard.',
    icon: 'BarChart3',
    category: 'analytics',
  },
  {
    title: 'API & SMTP Access',
    description: 'Full RESTful API and SMTP relay for seamless developer integration into any application or workflow.',
    icon: 'Code2',
    category: 'developer',
  },
  {
    title: 'Template Builder',
    description: 'Drag-and-drop email builder with a library of responsive, mobile-first templates ready for any campaign.',
    icon: 'Layout',
    category: 'design',
  },
  {
    title: 'List Management',
    description: 'Subscriber management with advanced segmentation, tagging, bulk import/export, and suppression lists.',
    icon: 'Users',
    category: 'management',
  },
  {
    title: 'Deliverability Engine',
    description: 'Automated SPF, DKIM, and DMARC setup, IP warm-up scheduling, and continuous reputation monitoring.',
    icon: 'Shield',
    category: 'deliverability',
  },
  {
    title: 'Webhooks & Events',
    description: 'Real-time webhook notifications for delivery, bounce, open, click, and unsubscribe events. Never miss a signal.',
    icon: 'Webhook',
    category: 'developer',
  },
  {
    title: 'Smart Scheduling',
    description: 'AI-powered send-time optimization that automatically picks the best delivery window for each recipient\'s timezone.',
    icon: 'Clock',
    category: 'intelligence',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    description: 'For small teams getting started with email.',
    price: 0,
    priceLabel: 'Free',
    priceSubtext: 'up to 1,000 emails/month',
    features: [
      '1,000 emails/month',
      'RESTful API access',
      'Basic analytics dashboard',
      'Email template library',
      'SPF & DKIM setup',
      'Community support',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Growth',
    description: 'For growing businesses that need reliable delivery at scale.',
    price: 25,
    priceLabel: '$25',
    priceSubtext: '/month for 50,000 emails',
    features: [
      '50,000 emails/month',
      'Everything in Starter',
      'Advanced analytics & reporting',
      'Dedicated IP address',
      'IP warm-up automation',
      'Webhook integrations',
      'Priority email support',
      'Custom sending domains',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom requirements.',
    price: null,
    priceLabel: 'Custom',
    priceSubtext: 'tailored to your volume',
    features: [
      'Unlimited emails',
      'Everything in Growth',
      'Multiple dedicated IPs',
      'Custom SMTP infrastructure',
      'SLA guarantee (99.99%)',
      'Dedicated account manager',
      'Phone & Slack support',
      'Custom integrations',
      'Advanced deliverability consulting',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export const stats = [
  { value: '99.8%', label: 'Inbox Placement Rate', description: 'Industry-leading deliverability' },
  { value: '500M+', label: 'Emails Delivered', description: 'Across African and global markets' },
  { value: '<2s', label: 'Average Delivery Time', description: 'Lightning-fast infrastructure' },
  { value: '99.99%', label: 'Platform Uptime', description: 'Enterprise-grade reliability' },
]

export const testimonials = [
  {
    quote: 'ClickSenders handles our massive email volumes without issues. It\'s reliable, fast, and built to scale.',
    author: 'Michael Green',
    role: 'Director',
    company: 'ClickSenders.com',
    avatar: '/avatars/michael.jpg',
  },
  {
    quote: 'We switched from SendGrid and saved 60% on costs while improving our inbox placement rate by 15%. The African IP optimization is a game-changer.',
    author: 'Amina Okafor',
    role: 'CTO',
    company: 'PayStackify',
    avatar: '/avatars/amina.jpg',
  },
  {
    quote: 'The API is clean, the docs are excellent, and the deliverability engine just works. Exactly what we needed for our transactional emails.',
    author: 'David Chen',
    role: 'Lead Engineer',
    company: 'FinFlow',
    avatar: '/avatars/david.jpg',
  },
]

export const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'API Documentation', href: '/docs' },
    { label: 'Changelog', href: '/blog' },
    { label: 'Status', href: '#' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'Partners', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/docs' },
    { label: 'Guides', href: '/blog' },
    { label: 'Community', href: '#' },
    { label: 'Help Center', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'DPA', href: '#' },
    { label: 'Security', href: '#' },
  ],
}
