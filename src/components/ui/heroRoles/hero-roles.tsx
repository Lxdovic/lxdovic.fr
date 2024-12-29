'use client'

import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export const HeroRoles = () => {
  const t = useTranslations()
  const roles = useMemo(() => [t('roles.0'), t('roles.1'), t('roles.2')], [t])

  return (
    <div className="w-full">
      {roles.map((role, index) => (
        <HeroRole role={role} key={index} />
      ))}
    </div>
  )
}

const HeroRole = ({ role }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden h-16 group border-b border-foreground/20 gap-6"
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
        <h2 className="text-md font-light text-background">{role}</h2>
      </motion.div>

      <motion.div
        initial={{ translateY: 0 }}
        animate={{
          translateY: isHovered ? '-100%' : 0,
          transition: { ease: [0.19, 1.0, 0.22, 1.0], duration: 0.5 },
        }}
        className="absolute p-5 bg-transparent w-full"
      >
        <h2 className="text-md font-light text-foreground">{role}</h2>
      </motion.div>
    </div>
  )
}
