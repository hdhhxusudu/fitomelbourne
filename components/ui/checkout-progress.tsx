import { cn } from "@/lib/cn"

const steps = [
  { id: "cart", label: "Cart" },
  { id: "pay", label: "Pay" },
  { id: "complete", label: "Complete" },
] as const

type CheckoutStep = (typeof steps)[number]["id"]

type CheckoutProgressProps = {
  current: CheckoutStep
  className?: string
}

export function CheckoutProgress({ current, className }: CheckoutProgressProps) {
  const currentIndex = steps.findIndex((s) => s.id === current)

  return (
    <nav
      className={cn("flex items-center gap-0 border-2 border-ink", className)}
      aria-label="Checkout progress"
    >
      {steps.map((step, index) => {
        const isActive = index === currentIndex
        const isComplete = index < currentIndex

        return (
          <div
            key={step.id}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 border-r-2 border-ink px-4 py-3 last:border-r-0",
              isActive && "bg-accent text-surface",
              isComplete && "bg-ink text-paper",
              !isActive && !isComplete && "bg-surface text-muted",
            )}
          >
            <span className="font-mono text-[11px] uppercase tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide">{step.label}</span>
          </div>
        )
      })}
    </nav>
  )
}
