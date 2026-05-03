import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Stats } from '@/components/home/Stats'
import { ComparisonTable } from '@/components/home/ComparisonTable'
import { Integrations } from '@/components/home/Integrations'
import { Testimonials } from '@/components/home/Testimonials'
import { FAQ } from '@/components/home/FAQ'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <ComparisonTable />
      <Integrations />
      <Testimonials />
      <FAQ />
    </>
  )
}
