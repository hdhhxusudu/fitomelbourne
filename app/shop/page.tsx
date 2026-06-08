import type { Metadata } from "next"
import Link from "next/link"
import { products } from "@/lib/products"
import { ProductGrid } from "@/components/shop/product-grid"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { StatBlock } from "@/components/ui/stat-block"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Shop",
  description: `Browse research-grade peptides at ${SITE_NAME} with documented purity.`,
  alternates: { canonical: "/shop" },
}

export default function ShopPage() {
  return (
    <div className="bg-paper">
      <SectionHeader
        eyebrow="Research catalog"
        title="Peptide Catalog"
        description="Each listing includes net weight, purity target, and SKU. Review handling notes and compliance context before checkout."
      >
        <StatBlock value={String(products.length)} label="SKUs" />
        <StatBlock value="≥98%" label="Min purity" />
        <StatBlock value="−20°C" label="Cold storage" />
      </SectionHeader>

      <Container className="py-4">
        <div className="flex items-center justify-between gap-4 border-b-2 border-ink py-4">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Showing{" "}
            <span className="font-semibold text-ink">{products.length}</span> products
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent link-underline"
            aria-label="Switch to table list view"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2 4h12M2 8h12M2 12h12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            List view
          </Link>
        </div>
      </Container>

      <Container className="pb-16 pt-8 sm:pb-20">
        <ProductGrid items={products} />
      </Container>
    </div>
  )
}
