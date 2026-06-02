import type { Metadata } from "next"
import Link from "next/link"
import { getPaymentLinkUrl } from "@/lib/payments"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Pay",
  description: `Secure payment link for ${SITE_NAME} orders.`,
  alternates: { canonical: "/pay" },
}

export default function PayPage() {
  const paymentUrl = getPaymentLinkUrl()

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/60">
        Payment
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Secure checkout
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-sky-100/65">
        Complete your card payment through our hosted checkout. After paying, keep your
        receipt email and reference your order details.
      </p>

      {paymentUrl ? (
        /* ——— Payment link configured ——— */
        <div className="mt-10 rounded-3xl border border-sky-400/20 bg-sky-400/5 p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
            <svg
              className="h-6 w-6 text-sky-300"
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
          <p className="mt-5 text-sm font-medium text-sky-100/75">
            You will leave this site to pay on our processor. The link opens in a new tab.
          </p>
          <a
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-sky-400 to-cyan-400 px-8 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-4px_rgba(56,189,248,0.45)] transition-all hover:brightness-110 hover:shadow-[0_0_32px_-2px_rgba(56,189,248,0.55)]"
          >
            Open secure payment page
          </a>
        </div>
      ) : (
        /* ——— Not configured ——— */
        <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
          <div className="flex items-center gap-3">
            <svg
              className="h-5 w-5 shrink-0 text-amber-300/75"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
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
            <p className="text-sm font-semibold text-amber-50">
              Payment link not configured
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-amber-100/70">
            Add a Stripe Payment Link (or any HTTPS checkout URL) to your environment:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/8 bg-black/40 p-4 text-left text-xs text-sky-100/80">
            NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your_link_here
          </pre>
          <p className="mt-3 text-xs text-amber-100/60">
            Alternatively set{" "}
            <code className="rounded-md border border-white/8 bg-black/30 px-1.5 py-0.5 font-mono">
              NEXT_PUBLIC_PAYMENT_LINK
            </code>{" "}
            to the same kind of URL.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
        <Link
          href="/cart"
          className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 py-2.5 text-sm font-semibold text-sky-100/75 transition hover:border-white/20 hover:text-white"
        >
          Back to cart
        </Link>
        <Link
          href="/products"
          className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 py-2.5 text-sm font-semibold text-sky-100/75 transition hover:border-white/20 hover:text-white"
        >
          Product list
        </Link>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-sky-100/35">
        {SITE_NAME} does not store card numbers on this site when you use a hosted payment
        link from your processor.
      </p>
    </div>
  )
}
