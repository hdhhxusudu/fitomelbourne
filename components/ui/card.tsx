import { cn } from "@/lib/cn"

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hardShadow?: boolean
  padding?: "none" | "sm" | "md" | "lg"
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
}

export function Card({
  hardShadow = false,
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "border-2 border-ink bg-surface transition-colors duration-200 hover:border-accent",
        hardShadow && "hard-shadow",
        paddingStyles[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
