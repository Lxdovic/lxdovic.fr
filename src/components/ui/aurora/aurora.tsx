import { cn } from '@/utilities/cn'

export const Aurora = () => {
  return (
    <div className="fixed top-0 h-[calc(100vh+10rem)] -z-10 inset-0 overflow-hidden [mask-image:url(/noise.svg)]">
      <div
        className={cn(
          `
            [--white-gradient:repeating-linear-gradient(100deg,var(--indigo)_0%,var(--indigo)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--indigo)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--pink-400)_10%,var(--indigo-500)_15%,var(--pink-600)_20%,var(--violet-200)_25%,var(--pink-300)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform
            [mask-image:radial-gradient(ellipse_at_50%_0%,black_10%,var(--transparent)_70%)]`,
        )}
      />
    </div>
  )
}
