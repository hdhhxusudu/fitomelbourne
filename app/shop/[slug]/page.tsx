import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AddToCart } from "@/components/shop/add-to-cart"
import { formatUsd } from "@/lib/money"
import { getAllProductSlugs, getProductBySlug } from "@/lib/products"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Product" }
  return {
    title: product.name,
    description: product.shortDescription,
  }
}

const specRows = (netWeightMg: number, purityLabel: string) =>
  [
    { label: "Net weight", value: `${netWeightMg}\u202fmg` },
    { label: "Purity target", value: purityLabel },
    { label: "Presentation", value: "Lyophilized" },
    { label: "Storage", value: "\u221220\u202f\u00b0C / \u22124\u202f\u00b0F" },
  ] as const

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
        <Link
          href="/shop"
          className="text-emerald-200/55 transition hover:text-emerald-200"
        >
          Catalog
        </Link>
        <svg
          className="h-3.5 w-3.5 text-emerald-200/25"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4.5 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-medium text-white">{product.name}</span>
      </nav>

      {/* Two-column layout */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start xl:gap-14">
        {/* Product hero panel */}
        <div className="overflow-hidden rounded-3xl border border-white/8 bg-[radial-gradient(circle_at_25%_15%,rgba(52,211,153,0.30),transparent_55%),radial-gradient(circle_at_85%_8%,rgba(45,212,191,0.20),transparent_48%),linear-gradient(155deg,#041810,#0a2b1e)] p-10 lg:p-12">
          <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-300/65">
            Lyophilized reference standard
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            {product.name}
          </h1>

          {/* Spec badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/9 px-3.5 py-1.5 text-sm font-medium text-emerald-200/90">
              {product.netWeightMg}&thinsp;mg net
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-emerald-100/80">
              {product.purityLabel} purity
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-sm text-emerald-100/65">
              {product.sku}
            </span>
          </div>

          {/* Spec grid */}
          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-white/7 pt-8">
            {specRows(product.netWeightMg, product.purityLabel).map(
              ({ label, value }) => (
                <div key={label}>
                  <dt className="text-[11px] uppercase tracking-[0.15em] text-emerald-300/55">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-emerald-50/90">{value}</dd>
                </div>
              ),
            )}
          </dl>
        </div>

        {/* Purchase panel */}
        <div className="flex flex-col gap-6">
          {/* Price */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-emerald-300/55">
              Price
            </div>
            <div className="mt-2 text-4xl font-semibold text-white">
              {formatUsd(product.priceCents)}
            </div>
            <div className="mt-1 text-xs text-emerald-100/45">
              Per unit &middot; excluding shipping
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-emerald-100/70">
            {product.description}
          </p>

          {/* Compliance callout */}
          <div className="flex gap-3 rounded-2xl border border-amber-400/15 bg-amber-400/5 p-4">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-amber-300/65"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 2L14 13H2L8 2z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
              <path
                d="M8 6.5v3M8 11h.01"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-xs leading-relaxed text-amber-100/70">
              Cold storage after reconstitution where applicable. For qualified research
              programs only. Verify import rules before purchasing.
            </p>
          </div>

          {/* Add to cart */}
          <div className="pt-1">
            <AddToCart slug={product.slug} />
          </div>

          {/* Trust badge row */}
          <div className="grid grid-cols-3 gap-2.5 border-t border-white/7 pt-4">
            {(
              [
                { label: "Batch docs", sub: "Included" },
                { label: "Cold chain", sub: "Noted" },
                { label: "Research use", sub: "Only" },
              ] as const
            ).map(({ label, sub }) => (
              <div
                key={label}
                className="rounded-xl border border-white/7 bg-white/3 p-3 text-center"
              >
                <div className="text-[11px] font-semibold text-emerald-100/75">{label}</div>
                <div className="mt-0.5 text-[10px] text-emerald-100/45">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
