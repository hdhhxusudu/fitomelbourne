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
    { label: "Net weight", value: `${netWeightMg} mg` },
    { label: "Purity target", value: purityLabel },
    { label: "Presentation", value: "Lyophilized" },
    { label: "Storage", value: "−20 °C / −4 °F" },
  ] as const

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
          <Link href="/shop" className="text-slate-400 transition hover:text-blue-600">
            Catalog
          </Link>
          <svg
            className="h-3.5 w-3.5 text-slate-300"
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
          <span className="font-medium text-slate-900">{product.name}</span>
        </nav>

        {/* Two-column layout */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start xl:gap-14">
          {/* Product visual panel */}
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 p-10 lg:p-12">
            {/* Vial illustration */}
            <div className="flex justify-center">
              <div className="relative flex flex-col items-center">
                {/* Cap */}
                <div className="h-4 w-12 rounded-t-sm bg-gradient-to-b from-blue-500 to-blue-600 shadow-sm" />
                <div className="h-2 w-14 bg-blue-400/50" />
                {/* Neck */}
                <div className="h-5 w-8 bg-gradient-to-b from-white/60 to-white/40" />
                {/* Body */}
                <div className="w-32 overflow-hidden rounded-b-[3rem] border border-blue-100 bg-white shadow-2xl shadow-blue-200/50">
                  {/* Label */}
                  <div className="mx-3 mt-3 rounded-xl bg-gradient-to-b from-blue-600 to-blue-700 px-3 py-4 text-center">
                    <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-200">
                      Peptides4u
                    </div>
                    <div className="mt-1.5 text-lg font-black leading-tight text-white">
                      {product.name}
                    </div>
                    <div className="mt-1 text-[10px] text-blue-200">
                      {product.netWeightMg}&thinsp;mg &middot; {product.purityLabel}
                    </div>
                  </div>
                  {/* Content window */}
                  <div className="mx-4 my-3 h-14 rounded-lg bg-blue-50 flex items-end justify-center gap-1 px-2 pb-2">
                    {[4, 7, 3, 9, 5, 6, 4].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h * 5}px` }}
                        className="w-2 rounded-full bg-blue-300/80"
                      />
                    ))}
                  </div>
                  <div className="mx-4 mb-5 h-5" />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-[11px] uppercase tracking-[0.28em] text-blue-500/70">
              Lyophilized reference standard
            </div>
            <h1 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              {product.name}
            </h1>

            {/* Spec badges */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-sm font-semibold text-blue-600">
                {product.netWeightMg}&thinsp;mg net
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-600">
                {product.purityLabel} purity
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-sm text-slate-500">
                {product.sku}
              </span>
            </div>

            {/* Spec grid */}
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-blue-100/60 pt-7">
              {specRows(product.netWeightMg, product.purityLabel).map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-white/70 p-3">
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-800">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Purchase panel */}
          <div className="flex flex-col gap-6">
            {/* Price */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Price
              </div>
              <div className="mt-1.5 text-4xl font-bold text-slate-900">
                {formatUsd(product.priceCents)}
              </div>
              <div className="mt-1 text-xs text-slate-400">
                Per unit &middot; excluding shipping
              </div>

              <div className="mt-6">
                <AddToCart slug={product.slug} />
              </div>

              <Link
                href="/cart"
                className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
              >
                View cart
              </Link>
            </div>

            {/* Description */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Description
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {product.description}
              </p>
            </div>

            {/* Compliance callout */}
            <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
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
              <p className="text-xs leading-relaxed text-amber-700">
                Cold storage after reconstitution where applicable. For qualified research
                programs only. Verify import rules before purchasing.
              </p>
            </div>

            {/* Trust badge row */}
            <div className="grid grid-cols-3 gap-2.5">
              {(
                [
                  { label: "Batch docs", sub: "Included" },
                  { label: "Cold chain", sub: "Noted" },
                  { label: "Research use", sub: "Only" },
                ] as const
              ).map(({ label, sub }) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-center"
                >
                  <div className="text-[11px] font-semibold text-slate-700">{label}</div>
                  <div className="mt-0.5 text-[10px] text-slate-400">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
