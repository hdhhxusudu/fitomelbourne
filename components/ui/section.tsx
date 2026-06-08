import { cn } from "@/lib/cn"
import { Eyebrow } from "@/components/ui/eyebrow"

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: string
  title?: string
  titleId?: string
  gridLines?: boolean
  variant?: "default" | "ink" | "surface"
}

const variantStyles = {
  default: "bg-paper",
  ink: "bg-ink text-paper",
  surface: "bg-surface",
}

export function Section({
  eyebrow,
  title,
  titleId,
  gridLines = false,
  variant = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 lg:py-32",
        variantStyles[variant],
        gridLines && "grid-lines",
        className,
      )}
      aria-labelledby={titleId}
      {...props}
    >
      {(eyebrow || title) && (
        <div className="mx-auto mb-12 max-w-7xl px-6 sm:px-8 lg:px-12">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {title ? (
            <h2
              id={titleId}
              className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {title}
            </h2>
          ) : null}
        </div>
      )}
      {children}
    </section>
  )
}
