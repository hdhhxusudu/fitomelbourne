import type { Metadata } from "next"
import Link from "next/link"
import { getPaymentLinkUrl } from "@/lib/payments"
import { SITE_NAME } from "@/lib/site"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckoutProgress } from "@/components/ui/checkout-progress"
import { Container } from "@/components/ui/container"
import { EmptyState } from "@/components/ui/empty-state"
import { Eyebrow } from "@/components/ui/eyebrow"
import { cn } from "@/lib/cn"

export const metadata: Metadata = {
  title: "Pay",
  description: `Secure payment link for ${SITE_NAME} orders.`,
  alternates: { canonical: "/pay" },
}

export default function PayPage() {
  const paymentUrl = getPaymentLinkUrl()

  return (
    <div className="bg-paper">
      <Container narrow className="py-16 sm:py-20">
        <CheckoutProgress current="pay" className="mb-10" />

        <Eyebrow>Payment</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Secure checkout
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Complete your card payment through our hosted checkout. After paying, keep your
          receipt email and reference your order details.
        </p>

        {paymentUrl ? (
          <Card hardShadow padding="lg" className="mt-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center border-2 border-ink bg-accent text-surface">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-5 text-sm font-medium text-muted">
              You will leave this site to pay on our processor. The link opens in a new tab.
            </p>
            <a
              href={paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-6")}
            >
              Open secure payment page
            </a>
          </Card>
        ) : (
          <EmptyState
            className="mt-10"
            icon={
              <svg className="h-8 w-8" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 2L18 16H2L10 2z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 8v4M10 13.5h.01"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            }
            title="Payment link not configured"
            description="Add NEXT_PUBLIC_STRIPE_PAYMENT_LINK or NEXT_PUBLIC_PAYMENT_LINK to your environment to enable secure checkout."
            actionLabel="Back to cart"
            actionHref="/cart"
          />
        )}

        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
          <Link
            href="/cart"
            className={cn(buttonVariants({ variant: "secondary", size: "md" }), "flex-1")}
          >
            Back to cart
          </Link>
          <Link
            href="/products"
            className={cn(buttonVariants({ variant: "ghost", size: "md" }), "flex-1")}
          >
            Product list
          </Link>
        </div>

        <p className="mt-8 font-mono text-xs leading-relaxed text-muted">
          {SITE_NAME} does not store card numbers on this site when you use a hosted payment
          link from your processor.
        </p>
      </Container>
    </div>
  )
}
