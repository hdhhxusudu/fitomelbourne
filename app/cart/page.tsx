"use client"

import Link from "next/link"
import { useCart } from "@/components/providers/cart-provider"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckoutProgress } from "@/components/ui/checkout-progress"
import { Container } from "@/components/ui/container"
import { EmptyState } from "@/components/ui/empty-state"
import { Eyebrow } from "@/components/ui/eyebrow"
import { QuantityStepper } from "@/components/ui/quantity-stepper"
import { formatUsd } from "@/lib/money"
import { cn } from "@/lib/cn"

export default function CartPage() {
  const { lineViews, subtotalCents, setQty, removeLine, clear } = useCart()

  return (
    <div className="bg-paper">
      <Container className="py-12 sm:py-16">
        <CheckoutProgress current="cart" className="mb-10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Your order</Eyebrow>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Cart
            </h1>
            <p className="mt-3 text-sm text-muted">
              Adjust quantities, then proceed to checkout when ready.
            </p>
          </div>
          {lineViews.length > 0 ? (
            <button
              type="button"
              onClick={() => clear()}
              className={buttonVariants({ variant: "destructive", size: "sm" })}
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
          <EmptyState
            className="mt-12"
            icon={
              <svg
                className="h-8 w-8"
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
            }
            title="Your cart is empty"
            description="Browse the catalog and add items to get started."
            actionLabel="Browse catalog"
            actionHref="/shop"
          />
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="space-y-0 border-2 border-ink">
              {lineViews.map((line) => (
                <div
                  key={line.slug}
                  className="flex flex-col gap-4 border-b-2 border-ink bg-surface p-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-col gap-1">
                    <Link
                      href={`/shop/${line.slug}`}
                      className="font-display font-semibold link-underline"
                    >
                      {line.name}
                    </Link>
                    <div className="font-mono text-xs text-muted">{line.sku}</div>
                    <div className="font-mono text-sm text-muted">
                      {formatUsd(line.priceCents)}{" "}
                      <span className="text-muted/60">each</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <QuantityStepper
                      size="sm"
                      value={line.qty}
                      onChange={(qty) => setQty(line.slug, qty)}
                      label={`Quantity for ${line.name}`}
                    />

                    <div className="min-w-[76px] text-right font-mono text-sm font-bold tabular-nums">
                      {formatUsd(line.priceCents * line.qty)}
                    </div>

                    <button
                      type="button"
                      onClick={() => removeLine(line.slug)}
                      className="flex h-9 w-9 items-center justify-center border-2 border-ink text-muted transition-colors hover:border-accent hover:text-accent"
                      aria-label={`Remove ${line.name} from cart`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

            <aside aria-label="Order summary">
              <Card hardShadow padding="md">
                <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  Order summary
                </div>

                <ul className="mt-5 space-y-3" role="list">
                  {lineViews.map((line) => (
                    <li
                      key={line.slug}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="truncate text-muted">
                        {line.name}{" "}
                        <span className="font-mono text-muted/60">&times;{line.qty}</span>
                      </span>
                      <span className="shrink-0 font-mono font-medium tabular-nums">
                        {formatUsd(line.priceCents * line.qty)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between border-t-2 border-ink pt-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    Subtotal
                  </span>
                  <span className="font-mono text-xl font-bold tabular-nums">
                    {formatUsd(subtotalCents)}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted">
                  Taxes and shipping are finalized at the processor. Use Pay to open your
                  hosted checkout.
                </p>

                <div className="mt-6 space-y-2.5">
                  <Link
                    href="/pay"
                    className={cn(buttonVariants({ variant: "primary", size: "md" }), "w-full")}
                  >
                    Proceed to payment
                  </Link>
                  <Link
                    href="/checkout"
                    className={cn(buttonVariants({ variant: "secondary", size: "md" }), "w-full")}
                  >
                    Checkout notes
                  </Link>
                  <Link
                    href="/shop"
                    className="flex w-full items-center justify-center py-2 font-mono text-xs uppercase tracking-wider text-accent link-underline"
                  >
                    Continue shopping
                  </Link>
                </div>
              </Card>
            </aside>
          </div>
        )}
      </Container>
    </div>
  )
}
