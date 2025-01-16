'use client'

import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import localization from '@/i18n/localization'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { TypedLocale } from 'payload'
import Link from 'next/link'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'
import { Header } from '@/payload-types'

interface HeaderClientProps {
  data: Header
}

export function HeaderClient({ data }: HeaderClientProps) {
  return (
    <AnimatePresence>
      <NavItemsBrowser data={data} />
    </AnimatePresence>
  )
}

const NavItemsBrowser = ({ data }: HeaderClientProps) => {
  const locale = useLocale()
  const router = useRouter()
  const [, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: TypedLocale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value },
      )
    })
  }

  return (
    <div
      key="navbar"
      className="left-1/2 -translate-x-1/2 fixed top-0 z-50 m-4 flex w-max justify-center self-center rounded-full px-4 h-max border border-white/10 bg-foreground/5 backdrop-blur-md content-['']"
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link tabIndex={1} href="/#home" legacyBehavior passHref>
              <NavigationMenuLink className="px-4 py-2 text-xs uppercase">Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link tabIndex={2} href="/posts" legacyBehavior passHref>
              <NavigationMenuLink className="px-4 py-2 text-xs uppercase">Blog</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {data.navItems?.map((navItem, i) => (
            <NavigationMenuItem key={i}>
              <NavigationMenuLink href={navItem.link.url!} className="px-4 py-2 text-xs uppercase">
                {navItem.link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <Select onValueChange={onSelectChange} value={locale}>
              <SelectTrigger className="ml-auto w-auto bg-transparent text-sm gap-2 pl-0 md:pl-3 border-none">
                <SelectValue placeholder="Locale" />
              </SelectTrigger>
              <SelectContent>
                {localization.locales
                  .sort((a, b) => a.label.localeCompare(b.label))
                  .map((locale) => (
                    <SelectItem value={locale.code} key={locale.code}>
                      {locale.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </NavigationMenuItem>

          <NavigationMenuItem tabIndex={3}>
            <NavigationMenuTrigger
              onPointerMove={(e) => e.preventDefault()}
              onPointerLeave={(e) => e.preventDefault()}
              className="text-xs uppercase !bg-transparent"
            >
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent
              onPointerEnter={(e) => e.preventDefault()}
              onPointerLeave={(e) => e.preventDefault()}
            >
              <ul className="flex flex-col gap-3 p-6 md:w-[400px] md:flex-row lg:w-[500px]">
                <li className="w-64">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full select-none flex-col justify-between rounded-md no-underline outline-none"
                      href="/"
                    >
                      <Image
                        className="h-20 w-20 rounded-full md:h-32 md:w-32"
                        src="/pfp.jpeg"
                        width={80}
                        height={80}
                        alt="Ludovic Debever"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Ludovic Debever
                        <p className="text-sm leading-tight text-muted-foreground">
                          Software Architect, Fullstack Developer
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <div className="flex w-full flex-col gap-4 md:w-3/5">
                  <p className="flex h-full text-sm text-white/80">
                    {`Hey, I'm Ludovic, a 23-year-old french student passionate about
                code. I am currently studying at Epitech Paris, and working at
                Holis, a SaaS startup based at Station F.`}
                  </p>

                  <p className="flex h-full text-sm text-white/80">
                    {`Let's get in contact, follow me on my socials.`}
                  </p>

                  <div className="flex gap-2 self-end">
                    <Link href="https://github.com/Lxdovic">
                      <Button variant="ghost" className="aspect-square p-1">
                        <Icon icon="mdi:github" height={20} />
                      </Button>
                    </Link>

                    <Link href="https://www.linkedin.com/in/debeverludovic/">
                      <Button variant="ghost" className="aspect-square p-1">
                        <Icon icon="mdi:linkedin" height={20} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
