import type { Metadata } from "next"
import Link from "next/link"
import { products } from "@/lib/products"
import { ProductGrid } from "@/components/shop/product-grid"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: "Shop",
  description: `Browse research-grade peptides at ${SITE_NAME} with documented purity.`,
  alternates: { canonical: "/shop" },
}

export default function ShopPage() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">
            Research catalog
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Peptide Catalog
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-500">
            Each listing includes net weight, purity target, and SKU. Review handling notes
            and compliance context before checkout.
          </p>

          {/* Stats row */}
          <div className="mt-7 flex flex-wrap gap-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3" />
                  <rect x="9" y="2" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3" />
                  <rect x="2" y="9" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3" />
                  <rect x="9" y="9" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">{products.length}</div>
                <div className="text-[11px] uppercase tracking-wide text-slate-400">SKUs</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2l1.5 3.5 3.5.5-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">&ge;98%</div>
                <div className="text-[11px] uppercase tracking-wide text-slate-400">Min purity</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-900">{products.length}</span> products
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
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
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <ProductGrid items={products} />
      </div>
    </div>
  )
}
