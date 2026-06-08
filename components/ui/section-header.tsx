import { cn } from "@/lib/cn"
import { Eyebrow } from "@/components/ui/eyebrow"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "border-b-2 border-ink pb-10 pt-16 sm:pt-20 lg:pt-24",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          {children ? (
            <div className="flex flex-wrap gap-6 lg:gap-10">{children}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
