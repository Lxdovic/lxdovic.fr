import { cn } from '@/utilities/cn'

type Args = {
  className?: string
}

export const HorizontalGradientBorder = ({ className }: Args) => {
  return (
    <div
      className={cn(
        'absolute w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent',
        className,
      )}
    />
  )
}
