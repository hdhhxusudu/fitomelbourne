"use client"

import { useState } from "react"
import { useCart } from "@/components/providers/cart-provider"
import { Button } from "@/components/ui/button"
import { QuantityStepper } from "@/components/ui/quantity-stepper"
import { cn } from "@/lib/cn"

export function AddToCart({ slug }: { slug: string }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [flash, setFlash] = useState(false)

  const handleAddToCart = () => {
    addItem(slug, qty)
    setFlash(true)
    window.setTimeout(() => setFlash(false), 1100)
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <QuantityStepper value={qty} onChange={setQty} label="Quantity selector" />

      <Button
        type="button"
        onClick={handleAddToCart}
        variant="primary"
        size="md"
        className={cn(
          "flex-1 sm:flex-none sm:px-8",
          flash && "animate-border-pulse",
        )}
        aria-live="polite"
      >
        {flash ? (
          <>
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2.5 8.5l4 4 7-8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Added to cart
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  )
}
