'use client'

import { stats } from '@/lib/constants'

export function Stats() {
  return (
    <section className="py-16 bg-white border-y border-dark-100">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-dark-900 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-dark-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
