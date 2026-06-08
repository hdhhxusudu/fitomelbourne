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
    sku: "P4U-BPC-5",
    image: "/products/bpc-157.png",
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
    sku: "P4U-TB5-5",
    image: "/products/tb-500.png",
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
    sku: "P4U-IPA-5",
    image: "/products/ipamorelin.png",
  },
  {
    slug: "cjc-1295-no-dac",
    name: "CJC-1295 (No DAC)",
    shortDescription: "GHRH analog for growth hormone secretagogue receptor research.",
    description:
      "Modified GHRH(1-29) sequence without drug affinity complex for controlled half-life studies. " +
      "Lyophilized presentation with verified identity and purity on certificate of analysis.",
    priceCents: 6499,
    purityLabel: "≥99%",
    netWeightMg: 5,
    sku: "P4U-CJC-5",
    image: "/products/cjc-1295-no-dac.png",
  },
  {
    slug: "ghrp-6",
    name: "GHRP-6",
    shortDescription: "Growth hormone releasing hexapeptide for secretagogue pathway studies.",
    description:
      "Synthetic hexapeptide growth hormone secretagogue for receptor binding and signaling assays. " +
      "Lyophilized presentation with documented purity and identity testing on release.",
    priceCents: 5999,
    purityLabel: "≥99%",
    netWeightMg: 5,
    sku: "P4U-GHRP6-5",
    image: "/products/ghrp-6.png",
  },
  {
    slug: "ghrp-2",
    name: "GHRP-2",
    shortDescription: "Growth hormone releasing dipeptide for secretagogue receptor research.",
    description:
      "Synthetic growth hormone releasing peptide for binding and signaling pathway studies. " +
      "Lyophilized presentation with verified identity and purity on certificate of analysis.",
    priceCents: 5999,
    purityLabel: "≥99%",
    netWeightMg: 5,
    sku: "P4U-GHRP2-5",
    image: "/products/ghrp-2.png",
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
    sku: "P4U-SER-5",
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
    sku: "P4U-MT2-10",
    image: "/products/melanotan-ii.png",
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
    sku: "P4U-PT141-10",
    image: "/products/pt-141.png",
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    shortDescription: "Modified growth hormone fragment for metabolic pathway research.",
    description:
      "Synthetic peptide fragment derived from human growth hormone for laboratory binding studies. " +
      "Lyophilized presentation with documented identity and purity on certificate of analysis.",
    priceCents: 5699,
    purityLabel: "≥99%",
    netWeightMg: 5,
    sku: "P4U-AOD-5",
    image: "/products/aod-9604.png",
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    shortDescription: "GLP-1 receptor agonist analog for metabolic pathway research.",
    description:
      "Synthetic glucagon-like peptide-1 analog for receptor binding and signaling studies. " +
      "Lyophilized presentation with verified identity and purity on certificate of analysis.",
    priceCents: 7999,
    purityLabel: "≥99%",
    netWeightMg: 5,
    sku: "P4U-SEMA-5",
    image: "/products/semaglutide.png",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    shortDescription: "Dual GIP/GLP-1 receptor agonist for metabolic pathway research.",
    description:
      "Synthetic dual incretin receptor agonist for binding and signaling studies in qualified laboratories. " +
      "Lyophilized presentation with verified identity and purity on certificate of analysis.",
    priceCents: 8499,
    purityLabel: "≥99%",
    netWeightMg: 5,
    sku: "P4U-TIRZ-5",
    image: "/products/tirzepatide.png",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
