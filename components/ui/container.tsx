import { cn } from "@/lib/cn"

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  narrow?: boolean
}

export function Container({
  narrow = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 sm:px-8 lg:px-12",
        narrow ? "max-w-2xl" : "max-w-7xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
