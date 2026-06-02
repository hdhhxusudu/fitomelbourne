import type { Metadata } from "next"
import Link from "next/link"
import { getPaymentLinkUrl } from "@/lib/payments"
import { SITE_NAME } from "@/lib/site"

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
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/60">
        Checkout
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Review &amp; pay
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-sky-100/65">
        Your cart is stored in this browser until you connect a full server checkout. When
        a payment link is configured, use Pay to complete card payment on your processor.
      </p>

      {/* Payment card */}
      <div className="mt-8 rounded-2xl border border-white/8 bg-white/3 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/9">
            <svg
              className="h-4 w-4 text-sky-300"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="1.5"
                y="4"
                width="15"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path d="M1.5 8h15" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>
          <div className="text-sm font-semibold text-white">Payment</div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-sky-100/65">
          {paymentUrl
            ? "Open the hosted checkout page to enter card details securely."
            : "Add NEXT_PUBLIC_STRIPE_PAYMENT_LINK (or NEXT_PUBLIC_PAYMENT_LINK) to enable the Pay button."}
        </p>
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          <Link
            href="/pay"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-linear-to-r from-sky-400 to-cyan-400 py-2.5 text-sm font-semibold text-zinc-950 transition hover:brightness-110"
          >
            Go to Pay
          </Link>
          <Link
            href="/cart"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 py-2.5 text-sm font-semibold text-sky-100/75 transition hover:border-white/20 hover:text-white"
          >
            Review cart
          </Link>
          <Link
            href="/shop"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 py-2.5 text-sm font-semibold text-sky-100/75 transition hover:border-white/20 hover:text-white"
          >
            Keep shopping
          </Link>
        </div>
      </div>

      {/* Next steps card */}
      <div className="mt-6 rounded-2xl border border-white/7 bg-white/2 p-6">
        <div className="text-sm font-semibold text-white">What to wire up next</div>
        <ul className="mt-4 space-y-3" role="list">
          {nextSteps.map((step) => (
            <li key={step} className="flex items-start gap-3 text-sm text-sky-100/65">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-sky-400/55"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M5 8l2.5 2.5 4-4.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
