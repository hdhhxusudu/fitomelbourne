import { cn } from "@/lib/cn"

type EyebrowProps = React.HTMLAttributes<HTMLParagraphElement>

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.25em] text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
