"use client"

import { useState } from "react"
import { useCart } from "@/components/providers/cart-provider"

export function AddToCart({ slug }: { slug: string }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [flash, setFlash] = useState(false)

  const handleDecrement = () => setQty((q) => Math.max(1, q - 1))
  const handleIncrement = () => setQty((q) => Math.min(99, q + 1))

  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value)
    if (!Number.isFinite(next)) return
    setQty(Math.min(99, Math.max(1, Math.floor(next))))
  }

  const handleAddToCart = () => {
    addItem(slug, qty)
    setFlash(true)
    window.setTimeout(() => setFlash(false), 1100)
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Stepper */}
      <div
        className="flex h-11 w-fit items-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
        role="group"
        aria-label="Quantity selector"
      >
        <button
          type="button"
          onClick={handleDecrement}
          disabled={qty <= 1}
          className="flex h-11 w-11 items-center justify-center text-slate-400 transition hover:bg-slate-50 hover:text-slate-700 disabled:opacity-30"
          aria-label="Decrease quantity"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <input
          type="number"
          min={1}
          max={99}
          value={qty}
          onChange={handleQtyChange}
          className="h-11 w-12 bg-transparent text-center text-sm font-semibold text-slate-900 outline-none"
          aria-label="Quantity"
        />

        <button
          type="button"
          onClick={handleIncrement}
          disabled={qty >= 99}
          className="flex h-11 w-11 items-center justify-center text-slate-400 transition hover:bg-slate-50 hover:text-slate-700 disabled:opacity-30"
          aria-label="Increase quantity"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Add to cart CTA */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 sm:flex-none sm:px-8"
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
      </button>
    </div>
  )
}
