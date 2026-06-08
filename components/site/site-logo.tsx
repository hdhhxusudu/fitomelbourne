import { cn } from "@/lib/cn"
import { SITE_NAME } from "@/lib/site"

type SiteLogoProps = {
  variant?: "light" | "dark"
  showTagline?: boolean
  className?: string
}

export function SiteLogo({
  variant = "light",
  showTagline = false,
  className,
}: SiteLogoProps) {
  const isDark = variant === "dark"

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex h-9 w-9 items-center justify-center border-2",
          isDark ? "border-paper bg-ink" : "border-ink bg-surface",
        )}
      >
        <div className="absolute right-0 top-0 h-2 w-2 bg-accent" aria-hidden="true" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={cn("h-5 w-5", isDark ? "text-paper" : "text-ink")}
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="8" x2="7" y2="17" stroke="currentColor" strokeWidth="1.2" />
          <line x1="12" y1="8" x2="17" y2="17" stroke="currentColor" strokeWidth="1.2" />
          <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
      <div className="leading-none">
        <div
          className={cn(
            "font-display text-[15px] font-bold tracking-tight",
            isDark ? "text-base text-paper" : "text-ink",
          )}
        >
          {SITE_NAME}
        </div>
        {showTagline ? (
          <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            Research Supply
          </div>
        ) : null}
      </div>
    </div>
  )
}
