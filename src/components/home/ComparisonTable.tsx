'use client'

import { Check, X, Minus } from 'lucide-react'

const comparisonData = [
  {
    feature: 'African IP Optimization',
    clicksenders: true,
    sendgrid: false,
    mailgun: false,
    postmark: false,
  },
  {
    feature: 'Free Tier',
    clicksenders: '1,000/mo',
    sendgrid: '100/day',
    mailgun: '100/day',
    postmark: '100/mo',
  },
  {
    feature: 'Real-Time Analytics',
    clicksenders: true,
    sendgrid: true,
    mailgun: true,
    postmark: true,
  },
  {
    feature: 'Dedicated IP (Growth Plan)',
    clicksenders: true,
    sendgrid: false,
    mailgun: false,
    postmark: false,
  },
  {
    feature: 'Auto SPF/DKIM/DMARC Setup',
    clicksenders: true,
    sendgrid: 'partial',
    mailgun: 'partial',
    postmark: true,
  },
  {
    feature: 'IP Warm-Up Automation',
    clicksenders: true,
    sendgrid: true,
    mailgun: false,
    postmark: false,
  },
  {
    feature: 'Template Builder',
    clicksenders: true,
    sendgrid: true,
    mailgun: false,
    postmark: true,
  },
  {
    feature: 'Cost per 100K emails',
    clicksenders: '$25',
    sendgrid: '$50+',
    mailgun: '$35+',
    postmark: '$110',
  },
]

function StatusCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-teal-500 mx-auto" />
  if (value === false) return <X className="w-5 h-5 text-dark-300 mx-auto" />
  if (value === 'partial') return <Minus className="w-5 h-5 text-yellow-500 mx-auto" />
  return <span className="text-sm font-medium text-dark-700">{value}</span>
}

export function ComparisonTable() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Comparison</p>
          <h2 className="section-title mb-4">
            See how ClickSenders stacks up
          </h2>
          <p className="section-description mx-auto">
            We built ClickSenders because existing platforms weren&apos;t solving the real problems
            — especially for businesses in Africa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-dark-200">
                <th className="text-left py-4 px-4 text-sm font-semibold text-dark-500 w-1/3">
                  Feature
                </th>
                <th className="text-center py-4 px-4 text-sm font-bold text-teal-600 bg-teal-50/50 rounded-t-lg">
                  ClickSenders
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-dark-500">
                  SendGrid
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-dark-500">
                  Mailgun
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-dark-500">
                  Postmark
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.feature} className="border-b border-dark-100 hover:bg-dark-50/50 transition-colors">
                  <td className="py-4 px-4 text-sm text-dark-700 font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center bg-teal-50/30">
                    <StatusCell value={row.clicksenders} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <StatusCell value={row.sendgrid} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <StatusCell value={row.mailgun} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <StatusCell value={row.postmark} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
