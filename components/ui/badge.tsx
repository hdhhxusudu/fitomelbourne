import { cn } from "@/lib/cn"

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent" | "outline"
}

const variantStyles = {
  default: "border-ink bg-surface text-ink",
  accent: "border-accent bg-accent-muted text-accent",
  outline: "border-ink bg-transparent text-muted",
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border-2 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
