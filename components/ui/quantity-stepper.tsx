"use client"

import { cn } from "@/lib/cn"

type QuantityStepperProps = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  size?: "sm" | "md"
  label?: string
  className?: string
}

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
  label = "Quantity selector",
  className,
}: QuantityStepperProps) {
  const handleDecrement = () => onChange(Math.max(min, value - 1))
  const handleIncrement = () => onChange(Math.min(max, value + 1))

  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value)
    if (!Number.isFinite(next)) return
    onChange(Math.min(max, Math.max(min, Math.floor(next))))
  }

  const btnSize = size === "sm" ? "h-9 w-9" : "h-11 w-11"
  const inputSize = size === "sm" ? "h-9 w-10 text-sm" : "h-11 w-12 text-sm"

  return (
    <div
      className={cn(
        "flex w-fit items-center overflow-hidden border-2 border-ink bg-surface",
        className,
      )}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        className={cn(
          "flex items-center justify-center text-muted transition-colors duration-150 hover:bg-accent-muted hover:text-ink disabled:opacity-30",
          btnSize,
        )}
        aria-label="Decrease quantity"
      >
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleQtyChange}
        className={cn(
          "border-x-2 border-ink bg-transparent text-center font-mono font-semibold tabular-nums text-ink outline-none",
          inputSize,
        )}
        aria-label="Quantity"
      />

      <button
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        className={cn(
          "flex items-center justify-center text-muted transition-colors duration-150 hover:bg-accent-muted hover:text-ink disabled:opacity-30",
          btnSize,
        )}
        aria-label="Increase quantity"
      >
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
