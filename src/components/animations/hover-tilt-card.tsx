import { type ReactNode, useMemo } from 'react'

import { cn } from '@/lib/utils'

const generateGridTemplateAreas = (rows: number, columns: number) =>
  Array.from(
    { length: rows },
    (_, rowIndex) =>
      `"${Array.from(
        { length: columns },
        (_, colIndex) => `tr-${rowIndex * columns + colIndex + 1}`
      ).join(' ')}"`
  ).join(' ')

const generateStyleRules = (
  rows: number,
  columns: number,
  maxX: number,
  maxY: number
) =>
  Array.from({ length: rows * columns }, (_, i) => {
    const row = Math.floor(i / columns)
    const col = i % columns
    const xRotation = maxX - (row / (rows - 1)) * 2 * maxX
    const yRotation = -maxY + (col / (columns - 1)) * 2 * maxY
    return `
      .tr-${i + 1}:hover ~ #cuicui-card {
        transform: rotateX(${xRotation.toFixed(
          2
        )}deg) rotateY(${yRotation.toFixed(2)}deg);
      }
    `
  }).join('')

const HoverCard = ({
  columns = 5,
  rows = 5,
  maxXrotation = 10,
  maxYrotation = 10,
  children,
  className,
  containerClassName,
}: {
  columns?: number
  rows?: number
  maxXrotation?: number
  maxYrotation?: number
  children?: ReactNode
  className?: string
  containerClassName?: string
}) => {
  const trackers = useMemo(
    () =>
      Array.from({ length: columns * rows }, (_, i) => (
        <div
          aria-hidden="true"
          className={`tr-${i + 1} absolute inset-0 z-50 select-none`}
          key={`tr-${i + 1}`}
          style={{ gridArea: `tr-${i + 1}` }}
        />
      )),
    [columns, rows]
  )

  const styleRules = useMemo(
    () => generateStyleRules(rows, columns, maxXrotation, maxYrotation),
    [rows, columns, maxXrotation, maxYrotation]
  )

  const gridTemplateAreas = useMemo(
    () => generateGridTemplateAreas(rows, columns),
    [rows, columns]
  )

  return (
    <div className={cn('relative', containerClassName)}>
      <style>{styleRules}</style>
      <div
        aria-hidden="true"
        className="group absolute inset-0 z-10 grid gap-0"
        style={{
          perspective: '1000px',
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          gridTemplateAreas,
        }}
      >
        {trackers}
        <div
          className={cn(
            'group absolute inset-0 z-20 transition-all duration-150 ease-in-out will-change-transform',
            className
          )}
          id="cuicui-card"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default HoverCard
