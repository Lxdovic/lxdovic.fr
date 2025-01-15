import { cn } from '@/utilities/cn'

type Args = {
  className?: string
}

export const VerticalGradientBorder = ({ className }: Args) => {
  return (
    <div
      className={cn(
        'absolute top-0 w-[1px] h-full bg-gradient-to-t from-transparent via-foreground/20 to-transparent',
        className,
      )}
    />
  )
}
