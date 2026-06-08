import type { Metadata } from "next"
import Link from "next/link"
import { getPaymentLinkUrl } from "@/lib/payments"
import { SITE_NAME } from "@/lib/site"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckoutProgress } from "@/components/ui/checkout-progress"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { cn } from "@/lib/cn"

export const metadata: Metadata = {
  title: "Checkout",
  description: `Finalize your ${SITE_NAME} order and pay securely.`,
  alternates: { canonical: "/checkout" },
}

const nextSteps = [
  "Server routes for cart validation and inventory locks",
  "PCI-compliant payment capture and email receipts",
  "Address capture with carrier rate shopping",
  "Age and institutional verification for regulated SKUs",
] as const

export default function CheckoutPage() {
  const paymentUrl = getPaymentLinkUrl()

  return (
    <div className="bg-paper">
      <Container narrow className="py-16 sm:py-20">
        <CheckoutProgress current="pay" className="mb-10" />

        <Eyebrow>Checkout</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Review &amp; pay
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Your cart is stored in this browser until you connect a full server checkout. When
          a payment link is configured, use Pay to complete card payment on your processor.
        </p>

        <Card hardShadow padding="md" className="mt-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink">
              <svg
                className="h-4 w-4 text-accent"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <rect x="1.5" y="4" width="15" height="10" stroke="currentColor" strokeWidth="1.4" />
                <path d="M1.5 8h15" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
            <div className="font-display font-semibold">Payment</div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {paymentUrl
              ? "Open the hosted checkout page to enter card details securely."
              : "Add NEXT_PUBLIC_STRIPE_PAYMENT_LINK (or NEXT_PUBLIC_PAYMENT_LINK) to enable the Pay button."}
          </p>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/pay"
              className={cn(buttonVariants({ variant: "primary", size: "md" }), "flex-1")}
            >
              Go to Pay
            </Link>
            <Link
              href="/cart"
              className={cn(buttonVariants({ variant: "secondary", size: "md" }), "flex-1")}
            >
              Review cart
            </Link>
            <Link
              href="/shop"
              className={cn(buttonVariants({ variant: "ghost", size: "md" }), "flex-1")}
            >
              Keep shopping
            </Link>
          </div>
        </Card>

        <div className="mt-6 border-2 border-ink bg-surface p-6">
          <div className="font-display font-semibold">What to wire up next</div>
          <ol className="mt-4 space-y-4" role="list">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-4 text-sm text-muted">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </div>
  )
}
