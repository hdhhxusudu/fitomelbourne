"use client"

import Link from "next/link"
import { useCart } from "@/components/providers/cart-provider"
import { formatUsd } from "@/lib/money"

export default function CartPage() {
  const { lineViews, subtotalCents, setQty, removeLine, clear } = useCart()

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">
              Your order
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Cart
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Adjust quantities, then proceed to checkout when ready.
            </p>
          </div>
          {lineViews.length > 0 ? (
            <button
              type="button"
              onClick={() => clear()}
              className="self-start inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500 transition hover:border-red-300 hover:text-red-500"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2 3.5h10M5.5 3.5V2.5a1 1 0 011-1h1a1 1 0 011 1v1M4 3.5l.5 8h5l.5-8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Clear cart
            </button>
          ) : null}
        </div>

        {lineViews.length === 0 ? (
          /* ——— Empty state ——— */
          <div className="mt-12 flex flex-col items-center rounded-3xl border border-slate-100 bg-slate-50 py-20 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
              <svg
                className="h-8 w-8 text-slate-300"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="mt-5 text-lg font-semibold text-slate-900">Your cart is empty</h2>
            <p className="mt-2 max-w-xs text-sm text-slate-400">
              Browse the catalog and add items to get started.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex h-10 items-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Browse catalog
            </Link>
          </div>
        ) : (
          /* ——— Cart content ——— */
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            {/* Line items */}
            <div className="space-y-3">
              {lineViews.map((line) => (
                <div
                  key={line.slug}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Product info */}
                  <div className="flex flex-col gap-1">
                    <Link
                      href={`/shop/${line.slug}`}
                      className="text-base font-semibold text-slate-900 transition hover:text-blue-600"
                    >
                      {line.name}
                    </Link>
                    <div className="font-mono text-xs text-slate-400">{line.sku}</div>
                    <div className="text-sm text-slate-500">
                      {formatUsd(line.priceCents)}{" "}
                      <span className="text-slate-400">each</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Inline stepper */}
                    <div
                      className="flex h-9 items-center overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
                      role="group"
                      aria-label={`Quantity for ${line.name}`}
                    >
                      <button
                        type="button"
                        onClick={() => setQty(line.slug, Math.max(1, line.qty - 1))}
                        className="flex h-9 w-9 items-center justify-center text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
                        aria-label="Decrease quantity"
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2 7h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={99}
                        value={line.qty}
                        onChange={(e) => {
                          const next = Number(e.target.value)
                          if (!Number.isFinite(next)) return
                          setQty(line.slug, Math.min(99, Math.max(1, Math.floor(next))))
                        }}
                        className="h-9 w-10 bg-transparent text-center text-sm font-semibold text-slate-900 outline-none"
                        aria-label="Quantity"
                      />
                      <button
                        type="button"
                        onClick={() => setQty(line.slug, Math.min(99, line.qty + 1))}
                        className="flex h-9 w-9 items-center justify-center text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
                        aria-label="Increase quantity"
                      >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>

                    {/* Line total */}
                    <div className="min-w-[76px] text-right text-sm font-bold text-slate-900">
                      {formatUsd(line.priceCents * line.qty)}
                    </div>

                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() => removeLine(line.slug)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-red-200 hover:text-red-500"
                      aria-label={`Remove ${line.name} from cart`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <aside
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              aria-label="Order summary"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                Order summary
              </div>

              <ul className="mt-5 space-y-3" role="list">
                {lineViews.map((line) => (
                  <li
                    key={line.slug}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="truncate text-slate-500">
                      {line.name}{" "}
                      <span className="text-slate-400">&times;{line.qty}</span>
                    </span>
                    <span className="shrink-0 font-medium text-slate-700">
                      {formatUsd(line.priceCents * line.qty)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-sm text-slate-500">Subtotal</span>
                <span className="text-xl font-bold text-slate-900">
                  {formatUsd(subtotalCents)}
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Taxes and shipping are finalized at the processor. Use Pay to open your
                hosted checkout.
              </p>

              <div className="mt-6 space-y-2.5">
                <Link
                  href="/pay"
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Proceed to payment
                </Link>
                <Link
                  href="/checkout"
                  className="flex w-full items-center justify-center rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
                >
                  Checkout notes
                </Link>
                <Link
                  href="/shop"
                  className="flex w-full items-center justify-center py-2 text-sm font-medium text-blue-500 transition hover:text-blue-700"
                >
                  Continue shopping
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
