/** Public site name (visible heading + meta). */
export const SITE_NAME = "Peptides4u";

export const SITE_DESCRIPTION =
  "Peptides4u supplies research-grade peptides with documented purity, traceable batch records, and a streamlined catalog for qualified laboratories.";

/** Short line for Open Graph / Twitter when a page does not override. */
export const SITE_OG_DESCRIPTION =
  "Shop research-grade peptides: documented purity, cold-chain guidance, and a cart-ready Next.js storefront.";

/**
 * Canonical origin for metadataBase, sitemap, and JSON-LD.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://peptides4u.com).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  return "http://localhost:3000";
}

export const titleTemplate = `%s · ${SITE_NAME}`;
