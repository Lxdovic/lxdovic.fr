'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utilities/cn'

type SlideUpProps = {
  children: React.ReactNode
  className?: string
}

export const SlideUp = ({ children, className = '' }: SlideUpProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn('relative overflow-hidden h-16 group w-full', className)}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ translateY: '100%' }}
        animate={{
          translateY: isHovered ? 0 : '100%',
          transition: { ease: [0.19, 1.0, 0.22, 1.0], duration: 0.5 },
        }}
        className="absolute p-5 bg-foreground w-full"
      >
        <h2 className="text-md font-light text-background">{children}</h2>
      </motion.div>

      <motion.div
        initial={{ translateY: 0 }}
        animate={{
          translateY: isHovered ? '-100%' : 0,
          transition: { ease: [0.19, 1.0, 0.22, 1.0], duration: 0.5 },
        }}
        className="absolute p-5 bg-transparent w-full"
      >
        <h2 className="text-md font-light text-foreground">{children}</h2>
      </motion.div>
    </div>
  )
}
