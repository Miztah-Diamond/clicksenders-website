'use client'

import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/constants'

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="section-title mb-4">
            Trusted by teams who ship
          </h2>
          <p className="section-description mx-auto">
            From startups to enterprises, teams across Africa and beyond
            rely on ClickSenders for their most critical email workflows.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="card relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-teal-200 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-dark-700 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-sm font-semibold">
                  {testimonial.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-900">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-dark-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
