import type { Metadata } from "next"
import Link from "next/link"
import { ProductList } from "@/components/shop/product-list"
import { products } from "@/lib/products"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Product list",
  description: `Full peptide catalog for ${SITE_NAME}: SKU, purity, net weight, and price.`,
  alternates: { canonical: "/products" },
}

export default function ProductsListPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">
                All products
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Product list
              </h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-500">
                All SKUs in one table. Open a row for full handling notes and add-to-cart on
                the detail page.
              </p>
            </div>
            <Link
              href="/shop"
              className="self-start inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
              aria-label="Switch to grid catalog view"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
                <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
                <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
                <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              Grid catalog
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <ProductList items={products} />
      </div>
    </div>
  )
}
