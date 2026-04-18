import type { Metadata } from "next";
import Link from "next/link";
import { getPaymentLinkUrl } from "@/lib/payments";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checkout",
  description: `Finalize your ${SITE_NAME} order and pay securely.`,
  alternates: { canonical: "/checkout" },
};

export default function CheckoutPage() {
  const paymentUrl = getPaymentLinkUrl();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white">Checkout</h1>
      <p className="mt-4 text-sm leading-relaxed text-emerald-100/75">
        Your cart is stored in this browser until you connect a full server checkout.
        When a payment link is configured, use Pay below to complete card payment on
        your processor (for example Stripe Payment Links).
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="text-sm font-semibold text-white">Payment</div>
        <p className="mt-2 text-sm leading-relaxed text-emerald-100/75">
          {paymentUrl
            ? "Open the hosted checkout page to enter card details securely."
            : "Add NEXT_PUBLIC_STRIPE_PAYMENT_LINK (or NEXT_PUBLIC_PAYMENT_LINK) to enable the Pay button on /pay and in cart."}
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/pay"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-300"
          >
            Go to Pay
          </Link>
          <Link
            href="/cart"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-emerald-100/85 hover:border-white/30 hover:text-white"
          >
            Review cart
          </Link>
          <Link
            href="/shop"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-emerald-100/85 hover:border-white/30 hover:text-white"
          >
            Continue shopping
          </Link>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-emerald-100/80">
        <div className="font-semibold text-white">What to wire up next</div>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Server routes for cart validation and inventory locks</li>
          <li>PCI-compliant payment capture and email receipts</li>
          <li>Address capture with carrier rate shopping</li>
          <li>Age and institutional verification for regulated SKUs</li>
        </ul>
      </div>
    </div>
  );
}
