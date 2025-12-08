import { memo, useMemo } from 'react'

import { AnimatedCard } from '@/components/animations/animated-card'
import { AuroraText } from '@/components/animations/aurora-text'

import {
  IconClock24,
  IconClogHand,
  IconCloudService,
  IconComputer,
  IconData,
  IconSecurity,
} from '@/assets/icons'

import { cn } from '@/lib/utils'

// Memoized feature card component with better props typing
interface FeatureCardProps {
  title: string
  Icon: React.ComponentType<{ className?: string }>
  description: string
  isFirst?: boolean
  isLast?: boolean
  ariaLabel?: string
}

const FeatureCard = memo(
  ({
    title,
    Icon,
    description,
    isFirst,
    isLast,
    ariaLabel,
  }: FeatureCardProps) => (
    <AnimatedCard
      aria-label={ariaLabel}
      className={cn(
        'group',
        isFirst
          ? 'text-black md:col-span-10 lg:col-span-5'
          : isLast
          ? 'md:col-span-10 lg:col-span-5'
          : 'md:col-span-5 lg:col-span-3'
      )}
      contentClassName={`h-full p-6 justify-between ${
        isFirst ? 'group-first:bg-sky-700/70' : ''
      }`}
      key={title}
      role="listitem"
    >
      <div className="inset-shadow-[4px_4px_0_0] inset-shadow-white flex size-20 items-center justify-center rounded-full bg-linear-to-b from-[#F2F2F2] to-white px-0 py-0 text-black shadow-lg shadow-sky-800/10 md:size-24">
        <Icon className="size-12 text-slate-800 md:size-14" />
      </div>
      <div className="mt-4 space-y-3">
        <h3 className="whitespace-pre-line text-balance font-poly-sans text-2xl md:text-2xl">
          {title}
        </h3>
        <p className="text-pretty leading-relaxed md:whitespace-pre-line md:text-balance md:text-lg">
          {description}
        </p>
      </div>
    </AnimatedCard>
  ),
  (prevProps, nextProps) => {
    // Custom comparison for better memoization
    return (
      prevProps.title === nextProps.title &&
      prevProps.description === nextProps.description &&
      prevProps.isFirst === nextProps.isFirst &&
      prevProps.isLast === nextProps.isLast
    )
  }
)

FeatureCard.displayName = 'FeatureCard'

export function Features() {
  const features = useMemo(
    () => [
      {
        title: 'Comprehensive ICT & ELV Solutions',
        description:
          'Tailored ICT, ELV, and AV solutions, including structured cabling, networking, and smart technology integration for businesses of all sizes.',
        Icon: IconComputer,
      },
      {
        title: 'Advanced Data & Network Infrastructure',
        description:
          'Optimize data management with high-performance networking, structured cabling, and IT infrastructure solutions.',
        Icon: IconData,
      },
      {
        title: 'Security & Surveillance Systems',
        description:
          'Protect your business with state-of-the-art security solutions, including CCTV, access control, and intrusion detection.',
        Icon: IconSecurity,
      },
      {
        title: 'Smart & Scalable AV Solutions',
        description:
          'Enhance communication and engagement with smart audio-visual solutions, video conferencing, and digital signage.',
        Icon: IconCloudService,
      },
      {
        title: 'Technology Consulting & Integration',
        description:
          'Expert consulting to help businesses implement the latest ICT and ELV technologies for seamless operations.',
        Icon: IconClogHand,
      },
      {
        title: '24/7 Technical Support & Maintenance',
        description:
          'Reliable support and maintenance to ensure optimal performance of your ICT, ELV, and AV systems.',
        Icon: IconClock24,
      },
    ],
    []
  )

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: features.map((feature, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: feature.title,
      description: feature.description,
    })),
  }

  return (
    <section
      aria-labelledby="features-heading"
      className="container py-16 md:py-32"
      id="features"
    >
      <h2
        className="pb-9 text-center text-3xl md:mx-auto md:w-fit md:pb-20 md:text-5xl"
        id="features-heading"
      >
        <AuroraText>Foundational</AuroraText> Values
        <br />
        for Sustainable Growth
      </h2>

      <div className="grid gap-4 md:grid-cols-10 lg:grid-cols-11" role="list">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            ariaLabel={`Feature: ${feature.title}`}
            isFirst={index === 0}
            isLast={index === features.length - 1}
          />
        ))}
      </div>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
    </section>
  )
}

// Enable component preloading
export const runtime = 'edge'
export const preferredRegion = 'auto'
