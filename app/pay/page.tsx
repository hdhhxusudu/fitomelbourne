import type { Metadata } from "next";
import Link from "next/link";
import { getPaymentLinkUrl } from "@/lib/payments";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pay",
  description: `Secure payment link for ${SITE_NAME} orders.`,
  alternates: { canonical: "/pay" },
};

export default function PayPage() {
  const paymentUrl = getPaymentLinkUrl();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white">Pay</h1>
      <p className="mt-4 text-sm leading-relaxed text-emerald-100/75">
        Complete your card payment through our hosted checkout. After paying, keep your
        receipt email and reference your order details if you emailed us a PO or cart
        summary beforehand.
      </p>

      {paymentUrl ? (
        <div className="mt-10 rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-8 text-center">
          <p className="text-sm text-emerald-100/80">
            You will leave this site to pay on our processor (for example Stripe). The
            link opens in a new tab.
          </p>
          <a
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300 sm:w-auto sm:min-w-[240px]"
          >
            Open secure payment page
          </a>
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 text-sm leading-relaxed text-amber-100/90">
          <p className="font-semibold text-amber-50">Payment link not configured</p>
          <p className="mt-2 text-amber-100/80">
            Add a Stripe Payment Link (or any HTTPS checkout URL) to your environment:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-3 text-left text-xs text-emerald-100/90">
            NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your_link_here
          </pre>
          <p className="mt-3 text-xs text-amber-100/70">
            Alternatively set <span className="font-mono">NEXT_PUBLIC_PAYMENT_LINK</span>{" "}
            to the same kind of URL.
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/cart"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-emerald-100/85 hover:border-white/30 hover:text-white"
        >
          Back to cart
        </Link>
        <Link
          href="/products"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-emerald-100/85 hover:border-white/30 hover:text-white"
        >
          Product list
        </Link>
      </div>

      <p className="mt-8 text-xs leading-relaxed text-emerald-100/50">
        {SITE_NAME} does not store card numbers on this site when you use a hosted payment
        link from your processor.
      </p>
    </div>
  );
}
