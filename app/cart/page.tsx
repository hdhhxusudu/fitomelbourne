"use client"

import Link from "next/link"
import { useCart } from "@/components/providers/cart-provider"
import { formatUsd } from "@/lib/money"

export default function CartPage() {
  const { lineViews, subtotalCents, setQty, removeLine, clear } = useCart()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Cart
          </h1>
          <p className="mt-2 text-sm text-emerald-100/60">
            Adjust quantities, then proceed to checkout when ready.
          </p>
        </div>
        {lineViews.length > 0 ? (
          <button
            type="button"
            onClick={() => clear()}
            className="self-start inline-flex items-center gap-1.5 rounded-full border border-white/9 px-4 py-2 text-xs font-semibold text-emerald-100/65 transition hover:border-rose-400/30 hover:text-rose-300"
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
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
        <div className="mt-12 flex flex-col items-center rounded-3xl border border-white/7 bg-white/2 py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/8 bg-white/4">
            <svg
              className="h-8 w-8 text-emerald-300/35"
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
          <h2 className="mt-5 text-lg font-semibold text-white">Your cart is empty</h2>
          <p className="mt-2 max-w-xs text-sm text-emerald-100/55">
            Browse the catalog and add items to get started.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex h-10 items-center rounded-full bg-linear-to-r from-emerald-400 to-teal-400 px-6 text-sm font-semibold text-zinc-950 transition hover:brightness-110"
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
                className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/3 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Product info */}
                <div className="flex flex-col gap-1">
                  <Link
                    href={`/shop/${line.slug}`}
                    className="text-base font-semibold text-white transition hover:text-emerald-200"
                  >
                    {line.name}
                  </Link>
                  <div className="font-mono text-xs text-emerald-100/45">{line.sku}</div>
                  <div className="text-sm text-emerald-100/75">
                    {formatUsd(line.priceCents)}{" "}
                    <span className="text-emerald-100/45">each</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Inline stepper */}
                  <div
                    className="flex h-9 items-center overflow-hidden rounded-lg border border-white/10 bg-black/30"
                    role="group"
                    aria-label={`Quantity for ${line.name}`}
                  >
                    <button
                      type="button"
                      onClick={() => setQty(line.slug, Math.max(1, line.qty - 1))}
                      className="flex h-9 w-9 items-center justify-center text-emerald-100/55 transition hover:bg-white/6 hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7h10"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
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
                      className="h-9 w-10 bg-transparent text-center text-sm font-semibold text-white outline-none"
                      aria-label="Quantity"
                    />
                    <button
                      type="button"
                      onClick={() => setQty(line.slug, Math.min(99, line.qty + 1))}
                      className="flex h-9 w-9 items-center justify-center text-emerald-100/55 transition hover:bg-white/6 hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 2v10M2 7h10"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Line total */}
                  <div className="min-w-[76px] text-right text-sm font-semibold text-white">
                    {formatUsd(line.priceCents * line.qty)}
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeLine(line.slug)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/7 text-emerald-100/45 transition hover:border-rose-400/25 hover:text-rose-300"
                    aria-label={`Remove ${line.name} from cart`}
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 4l8 8M12 4l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <aside
            className="rounded-2xl border border-white/8 bg-white/3 p-6"
            aria-label="Order summary"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-200/65">
              Order summary
            </div>

            <ul className="mt-5 space-y-3" role="list">
              {lineViews.map((line) => (
                <li
                  key={line.slug}
                  className="flex items-baseline justify-between gap-4 text-sm"
                >
                  <span className="truncate text-emerald-100/65">
                    {line.name}{" "}
                    <span className="text-emerald-100/40">&times;{line.qty}</span>
                  </span>
                  <span className="shrink-0 text-emerald-50/85">
                    {formatUsd(line.priceCents * line.qty)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-5">
              <span className="text-sm text-emerald-100/65">Subtotal</span>
              <span className="text-xl font-semibold text-white">
                {formatUsd(subtotalCents)}
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-emerald-100/45">
              Taxes and shipping are finalized in the processor. Use Pay to open your
              hosted checkout.
            </p>

            <div className="mt-6 space-y-2.5">
              <Link
                href="/pay"
                className="flex w-full items-center justify-center rounded-xl bg-linear-to-r from-emerald-400 to-teal-400 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-110"
              >
                Proceed to payment
              </Link>
              <Link
                href="/checkout"
                className="flex w-full items-center justify-center rounded-xl border border-white/10 py-3 text-sm font-semibold text-emerald-100/75 transition hover:border-white/25 hover:text-white"
              >
                Checkout notes
              </Link>
              <Link
                href="/shop"
                className="flex w-full items-center justify-center py-2 text-sm font-medium text-emerald-200/55 transition hover:text-emerald-200"
              >
                Continue shopping
              </Link>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
