import { HTMLProps, ReactNode } from 'react'

import { cn } from '@/utilities/cn'

type BentoGridProps = {
  children: ReactNode
  className?: string
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn('grid w-full auto-rows-[22rem] grid-cols-3 gap-4', className)}>
      {children}
    </div>
  )
}

type BentoCardProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode
}

const BentoCard = ({ className, children, ...props }: BentoCardProps) => (
  <div
    {...props}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl',
      className,
    )}
  >
    {children}
  </div>
)

export { BentoCard, BentoGrid }
