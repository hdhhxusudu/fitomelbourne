import type { Metadata } from "next"
import Link from "next/link"
import { ProductList } from "@/components/shop/product-list"
import { products } from "@/lib/products"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { SITE_NAME } from "@/lib/site"
import { cn } from "@/lib/cn"

export const metadata: Metadata = {
  title: "Product list",
  description: `Full peptide catalog for ${SITE_NAME}: SKU, purity, net weight, and price.`,
  alternates: { canonical: "/products" },
}

export default function ProductsListPage() {
  return (
    <div className="bg-paper">
      <SectionHeader
        eyebrow="All products"
        title="Product list"
        description="All SKUs in one table. Open a row for full handling notes and add-to-cart on the detail page."
      >
        <Link
          href="/shop"
          className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "self-start")}
          aria-label="Switch to grid catalog view"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="5" height="5" stroke="currentColor" strokeWidth="1.3" />
            <rect x="9" y="2" width="5" height="5" stroke="currentColor" strokeWidth="1.3" />
            <rect x="2" y="9" width="5" height="5" stroke="currentColor" strokeWidth="1.3" />
            <rect x="9" y="9" width="5" height="5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          Grid catalog
        </Link>
      </SectionHeader>

      <Container className="py-10 sm:py-14">
        <ProductList items={products} />
      </Container>
    </div>
  )
}
