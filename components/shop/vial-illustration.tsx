import { SITE_NAME } from "@/lib/site"
import { cn } from "@/lib/cn"

type VialSize = "sm" | "md" | "lg"

type VialIllustrationProps = {
  name: string
  netWeightMg: number
  purityLabel: string
  size?: VialSize
  className?: string
}

const sizeConfig: Record<
  VialSize,
  {
    wrapper: string
    cap: string
    crimp: string
    neck: string
    body: string
    labelPad: string
    brand: string
    name: string
    meta: string
    window: string
    bar: string
  }
> = {
  sm: {
    wrapper: "w-20",
    cap: "h-3 w-7",
    crimp: "h-1 w-9",
    neck: "h-3 w-5",
    body: "w-full",
    labelPad: "mx-2 mt-2 px-2 py-2",
    brand: "text-[7px]",
    name: "text-[10px]",
    meta: "text-[7px]",
    window: "mx-2 my-2 h-8",
    bar: "w-1",
  },
  md: {
    wrapper: "w-28",
    cap: "h-3.5 w-9",
    crimp: "h-1.5 w-11",
    neck: "h-4 w-6",
    body: "w-full",
    labelPad: "mx-2.5 mt-2.5 px-2.5 py-2.5",
    brand: "text-[8px]",
    name: "text-xs",
    meta: "text-[8px]",
    window: "mx-3 my-2.5 h-10",
    bar: "w-1.5",
  },
  lg: {
    wrapper: "w-36",
    cap: "h-4 w-12",
    crimp: "h-2 w-14",
    neck: "h-5 w-8",
    body: "w-full",
    labelPad: "mx-3 mt-3 px-3 py-4",
    brand: "text-[9px]",
    name: "text-lg",
    meta: "text-[10px]",
    window: "mx-4 my-3 h-14",
    bar: "w-2",
  },
}

const barHeights = [4, 7, 3, 9, 5, 6, 4]

export function VialIllustration({
  name,
  netWeightMg,
  purityLabel,
  size = "md",
  className,
}: VialIllustrationProps) {
  const s = sizeConfig[size]
  const barScale = size === "sm" ? 4 : size === "md" ? 5 : 5

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-surface px-4",
        size === "lg" ? "h-auto py-12" : "h-48",
        className,
      )}
    >
      <div className={cn("relative flex flex-col items-center", s.wrapper)}>
        <div className={cn("border-2 border-b-0 border-ink bg-ink", s.cap)} />
        <div className={cn("bg-muted/40", s.crimp)} />
        <div className={cn("border-x-2 border-ink bg-paper", s.neck)} />
        <div
          className={cn(
            "overflow-hidden border-2 border-ink bg-surface",
            s.body,
          )}
        >
          <div className={cn("bg-accent text-surface", s.labelPad)}>
            <div className={cn("font-mono font-bold uppercase tracking-widest opacity-80", s.brand)}>
              {SITE_NAME}
            </div>
            <div className={cn("mt-1 font-display font-black leading-tight", s.name)}>
              {name}
            </div>
            <div className={cn("mt-0.5 font-mono opacity-80", s.meta)}>
              {netWeightMg}mg &middot; {purityLabel}
            </div>
          </div>
          <div
            className={cn(
              "flex items-end justify-center gap-0.5 border-t-2 border-ink bg-paper px-2 pb-2",
              s.window,
            )}
          >
            {barHeights.map((h, i) => (
              <div
                key={i}
                style={{ height: `${h * barScale}px` }}
                className={cn("bg-ink/30", s.bar)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
