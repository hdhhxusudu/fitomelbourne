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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
          Checkout
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Review &amp; pay
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Your cart is stored in this browser until you connect a full server checkout. When
          a payment link is configured, use Pay to complete card payment on your processor.
        </p>

        {/* Payment card */}
        <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50">
              <svg
                className="h-4 w-4 text-blue-600"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <rect x="1.5" y="4" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M1.5 8h15" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
            <div className="text-sm font-semibold text-slate-900">Payment</div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            {paymentUrl
              ? "Open the hosted checkout page to enter card details securely."
              : "Add NEXT_PUBLIC_STRIPE_PAYMENT_LINK (or NEXT_PUBLIC_PAYMENT_LINK) to enable the Pay button."}
          </p>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href="/pay"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Go to Pay
            </Link>
            <Link
              href="/cart"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
            >
              Review cart
            </Link>
            <Link
              href="/shop"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
            >
              Keep shopping
            </Link>
          </div>
        </div>

        {/* Next steps card */}
        <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <div className="text-sm font-semibold text-slate-900">What to wire up next</div>
          <ul className="mt-4 space-y-3" role="list">
            {nextSteps.map((step) => (
              <li key={step} className="flex items-start gap-3 text-sm text-slate-500">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
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
    </div>
  )
}
