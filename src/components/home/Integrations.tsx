'use client'

const integrations = [
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'Ruby', category: 'Backend' },
  { name: 'Go', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'cURL', category: 'CLI' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Django', category: 'Framework' },
  { name: 'Laravel', category: 'Framework' },
  { name: 'Rails', category: 'Framework' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Shopify', category: 'E-Commerce' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Webhook', category: 'Integration' },
]

export function Integrations() {
  return (
    <section className="section-padding bg-dark-50/50">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Integrations</p>
          <h2 className="section-title mb-4">
            Works with your stack
          </h2>
          <p className="section-description mx-auto">
            Official SDKs for every major language and framework.
            Or use our RESTful API and SMTP relay directly.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-w-4xl mx-auto">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-dark-100 hover:border-teal-300 hover:shadow-md transition-all duration-200 cursor-default group"
            >
              <div className="w-10 h-10 rounded-lg bg-dark-50 group-hover:bg-teal-50 flex items-center justify-center mb-2 transition-colors">
                <span className="text-lg font-bold text-dark-400 group-hover:text-teal-600 transition-colors">
                  {integration.name[0]}
                </span>
              </div>
              <span className="text-xs font-medium text-dark-600 text-center">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        {/* API CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-dark-400">
            Don&apos;t see your language?{' '}
            <a href="/docs" className="text-teal-600 font-medium hover:text-teal-700 underline underline-offset-2">
              Use our REST API →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
