import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/cn"

type EmptyStateProps = {
  icon?: React.ReactNode
  title: string
  description?: string
  actionLabel?: string
  actionHref?: string
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center border-2 border-ink bg-surface py-20 text-center",
        className,
      )}
    >
      {icon ? (
        <div className="flex h-16 w-16 items-center justify-center border-2 border-ink text-muted">
          {icon}
        </div>
      ) : null}
      <h2 className="mt-6 font-display text-xl font-bold">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{description}</p>
      ) : null}
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className={cn(buttonVariants({ variant: "primary", size: "md" }), "mt-8")}
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  )
}
