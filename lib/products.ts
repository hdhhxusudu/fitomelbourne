import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    shortDescription: "Stable pentadecapeptide fragment in lyophilized presentation.",
    description:
      "High-purity lyophilized material intended for qualified laboratory protocols. " +
      "Ships with independent batch documentation and sealed glass vial.",
    priceCents: 4999,
    purityLabel: "≥99%",
    netWeightMg: 5,
    sku: "P4L-BPC-5",
  },
  {
    slug: "tb-500",
    name: "TB-500",
    shortDescription: "Thymosin beta-4 related sequence for controlled bench work.",
    description:
      "Manufactured under documented quality controls with consistent amino acid integrity. " +
      "Store cold, protect from light, and handle with standard PPE.",
    priceCents: 5499,
    purityLabel: "≥98%",
    netWeightMg: 5,
    sku: "P4L-TB5-5",
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    shortDescription: "Selective growth hormone secretagogue mimic for receptor studies.",
    description:
      "Clean chromatographic profile suitable for binding and signaling assays. " +
      "Not compounded or formulated for any route of administration.",
    priceCents: 6299,
    purityLabel: "≥99%",
    netWeightMg: 5,
    sku: "P4L-IPA-5",
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    shortDescription: "GHRH(1-29) analog used in endocrine research models.",
    description:
      "Documented identity testing and moisture specification on certificate of analysis. " +
      "For in vitro or approved animal models only, where legally permitted.",
    priceCents: 5899,
    purityLabel: "≥98%",
    netWeightMg: 5,
    sku: "P4L-SER-5",
  },
  {
    slug: "melanotan-ii",
    name: "Melanotan II",
    shortDescription: "Cyclic heptapeptide ligand for melanocortin pathway exploration.",
    description:
      "Reserved for institutional research with appropriate biosafety review. " +
      "Restricted in some regions; purchaser confirms lawful import and use.",
    priceCents: 4499,
    purityLabel: "≥98%",
    netWeightMg: 10,
    sku: "P4L-MT2-10",
  },
  {
    slug: "pt-141",
    name: "PT-141",
    shortDescription: "Bremelanotide analog for receptor pharmacology programs.",
    description:
      "Lyophilized peptide with verified mass spectrometry trace on release testing. " +
      "Sold exclusively as a reference standard for qualified laboratories.",
    priceCents: 5299,
    purityLabel: "≥98%",
    netWeightMg: 10,
    sku: "P4L-PT141-10",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
