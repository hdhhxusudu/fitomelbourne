/**
 * Hosted checkout URL (e.g. Stripe Payment Link: https://buy.stripe.com/...).
 * Set `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` or `NEXT_PUBLIC_PAYMENT_LINK` in `.env.local`.
 */
export function getPaymentLinkUrl(): string | null {
  const stripe = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK?.trim();
  if (stripe) return stripe;
  const generic = process.env.NEXT_PUBLIC_PAYMENT_LINK?.trim();
  if (generic) return generic;
  return null;
}

export function hasPaymentLink(): boolean {
  return getPaymentLinkUrl() !== null;
}
