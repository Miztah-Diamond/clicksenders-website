'use client'

import {
  Zap, BarChart3, Code2, Layout,
  Users, Shield, Webhook, Clock
} from 'lucide-react'
import { features } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Zap, BarChart3, Code2, Layout, Users, Shield, Webhook, Clock,
}

export function Features() {
  return (
    <section id="features" className="section-padding bg-white relative">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Features</p>
          <h2 className="section-title mb-4">
            Everything a modern email platform needs
          </h2>
          <p className="section-description mx-auto">
            From high-volume transactional emails to marketing campaigns,
            ClickSenders gives you the tools and infrastructure to deliver every message.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap
            return (
              <div
                key={feature.title}
                className="group card hover:border-teal-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5 group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
