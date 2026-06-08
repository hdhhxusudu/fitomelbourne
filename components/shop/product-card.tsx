import Link from "next/link"
import type { Product } from "@/lib/types"
import { formatUsd } from "@/lib/money"

function VialIllustration({ name, netWeightMg, purityLabel }: { name: string; netWeightMg: number; purityLabel: string }) {
  return (
    <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 px-4">
      {/* Decorative blob */}
      <div className="absolute h-32 w-32 rounded-full bg-blue-200/30 blur-2xl" aria-hidden="true" />

      {/* Vial */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Rubber stopper / cap */}
        <div className="h-3 w-9 rounded-t-sm bg-gradient-to-b from-blue-500 to-blue-600 shadow-sm" />
        {/* Crimp ring */}
        <div className="h-1.5 w-11 bg-blue-400/60" />
        {/* Neck */}
        <div className="h-3 w-6 bg-gradient-to-b from-white/60 to-white/40" />
        {/* Body */}
        <div className="w-20 overflow-hidden rounded-b-3xl border border-blue-100 bg-gradient-to-b from-white/95 to-white/80 shadow-xl shadow-blue-200/50">
          {/* Blue label */}
          <div className="mx-2 mt-2 rounded-lg bg-gradient-to-b from-blue-600 to-blue-700 px-2.5 py-2 text-center">
            <div className="text-[7px] font-bold uppercase tracking-widest text-blue-100">
              Peptides4u
            </div>
            <div className="mt-1 text-[10px] font-black leading-tight text-white">
              {name}
            </div>
            <div className="mt-0.5 text-[7px] text-blue-200">
              {netWeightMg}mg &middot; {purityLabel}
            </div>
          </div>
          {/* Content window */}
          <div className="mx-3 my-2 h-8 rounded-md bg-blue-50/80 flex items-end justify-center gap-0.5 px-1 pb-1.5">
            {[4, 6, 3, 7, 5, 4].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h * 4}px` }}
                className="w-1 rounded-full bg-blue-400/60"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60">
      {/* Vial image area */}
      <Link
        href={`/shop/${product.slug}`}
        className="relative block overflow-hidden"
        tabIndex={0}
        aria-label={`View details for ${product.name}`}
      >
        <VialIllustration
          name={product.name}
          netWeightMg={product.netWeightMg}
          purityLabel={product.purityLabel}
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <Link
            href={`/shop/${product.slug}`}
            className="text-base font-bold text-slate-900 transition hover:text-blue-600"
          >
            {product.name}
          </Link>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">
            {product.shortDescription}
          </p>
        </div>

        <span className="inline-flex w-fit items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-600">
          {product.purityLabel} purity &middot; {product.netWeightMg}&thinsp;mg
        </span>

        {/* Footer row */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
          <div className="text-xl font-bold text-slate-900">
            {formatUsd(product.priceCents)}
          </div>
          <Link
            href={`/shop/${product.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-500 px-4 py-1.5 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            tabIndex={-1}
            aria-hidden="true"
          >
            View Shop
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 7h9M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
