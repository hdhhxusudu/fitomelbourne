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
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Page header card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/7 bg-linear-to-br from-white/5 to-transparent p-8 sm:p-10">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/9 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/65">
              Research catalog
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Peptide catalog
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-sky-100/65">
              Each listing includes net weight, purity target, and SKU. Review handling
              notes and compliance context before checkout.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-center sm:shrink-0">
            <div>
              <div className="text-2xl font-semibold text-white">{products.length}</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wide text-sky-300/55">
                SKUs
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">&ge;98%</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wide text-sky-300/55">
                Min purity
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm text-sky-100/55">
          Showing{" "}
          <span className="font-semibold text-white">{products.length}</span> products
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-200/65 transition hover:text-sky-200 focus-visible:ring-2 focus-visible:ring-sky-400/55"
          aria-label="Switch to table list view"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
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

      {/* Grid */}
      <div className="mt-6">
        <ProductGrid items={products} />
      </div>
    </div>
  )
}
