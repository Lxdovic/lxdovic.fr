import { lazy } from 'react'

const KnightScene = lazy(() => import('@/components/ui/scenes/knight-scene'))

export const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="flex items-center size-full container">
        <div className="w-full opacity-60 -z-20 h-full absolute top-0 left-0">
          <KnightScene />
        </div>

        <span className="flex flex-col items-left">
          <h1 className="flex text-8xl gap-4">Ludovic Debever</h1>
          <h2 className="text-8xl italic tracking-tighter font-serif">
              software architect
          </h2>
        </span>

        <div className="h-1/4 -z-10 w-full absolute top-0 bg-gradient-to-b from-background via-transparent to-transparent" />
        <div className="h-1/4 -z-10 w-full absolute bottom-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
    </section>
  )
}
