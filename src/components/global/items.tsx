'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

import { buttonVariants } from '../ui/button'

interface Props {
  data: CardContent[]
}

export const Items = ({ data }: Props) => {
  const [visibleItems, setVisibleItems] = useState(20)

  // biome-ignore lint/correctness/useExhaustiveDependencies: Not needed to re-run on data.length
  useEffect(() => {
    const handleScroll = () => {
      const loadMore = () => {
        const newVisibleItems = visibleItems + 8
        setVisibleItems(Math.min(newVisibleItems, data.length))
      }

      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const clientHeight = window.innerHeight

      if (scrollTop + clientHeight >= scrollHeight - 800) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visibleItems])

  return (
    <section className="container space-y-10 py-10 md:space-y-24">
      {data.slice(0, visibleItems).map((item, i) => (
        <ItemCard data={item} key={`${item.label}-${i}`} />
      ))}
    </section>
  )
}

interface CardProps {
  data: CardContent
}

export const ItemCard = ({ data }: CardProps) => {
  function slugify(label: string) {
    // First get the part before any hyphen
    const beforeHyphen = label.split('-')[0]
    return beforeHyphen
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
  }

  return (
    <article
      className="group grid gap-4 md:grid-cols-12 md:gap-6"
      id={slugify(data.label)}
    >
      <div className="order-2 md:order-1 md:col-span-7 md:p-6 md:group-even:order-2">
        <div className="flex items-center gap-4 md:gap-6">
          <div
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'size-16 shrink-0 shadow-lg shadow-sky-800/5 md:size-24'
            )}
          >
            <Image alt="" height={86} src={data.logo} width={86} />
          </div>
          <h3 className="font-medium text-2xl capitalize md:text-3xl">
            {data.label}
          </h3>
        </div>
        <div className="prose py-4 leading-relaxed md:text-lg">
          {data.description}
        </div>
      </div>
      <figure className="relative order-1 aspect-4/3 overflow-hidden rounded-2xl md:order-2 md:col-span-5 md:group-even:order-1">
        <Image alt="" className="object-cover" fill src={data.image} />
      </figure>
    </article>
  )
}
