import Link from "next/link"
import type { Product } from "@/lib/types"
import { formatUsd } from "@/lib/money"

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/3 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/20 hover:shadow-[0_16px_48px_-16px_rgba(56,189,248,0.18)]">
      {/* Visual placeholder */}
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-5/3 overflow-hidden"
        tabIndex={0}
        aria-label={`View details for ${product.name}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_85%_5%,rgba(34,211,238,0.20),transparent_45%),linear-gradient(158deg,#040d20,#0a1620)]" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-[200px] rounded-xl border border-white/10 bg-black/25 px-5 py-4 text-center backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-[0.28em] text-sky-300/70">
              Lyophilized
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-white">
              {product.name}
            </div>
            <div className="mt-1.5 text-xs text-sky-100/60">
              {product.netWeightMg}&thinsp;mg &middot; {product.purityLabel}
            </div>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3.5 p-5">
        {/* Badges */}
        <div className="flex flex-wrap gap-1.5">
          <span className="rounded-full border border-sky-400/15 bg-sky-400/8 px-2.5 py-0.5 text-[11px] font-medium text-sky-200/80">
            {product.purityLabel} purity
          </span>
          <span className="rounded-full border border-white/8 bg-white/4 px-2.5 py-0.5 text-[11px] font-medium text-sky-100/55">
            {product.netWeightMg}&thinsp;mg
          </span>
        </div>

        <p className="text-sm leading-relaxed text-sky-50/65">
          {product.shortDescription}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <div className="text-lg font-semibold text-white">
            {formatUsd(product.priceCents)}
          </div>
          <Link
            href={`/shop/${product.slug}`}
            className="inline-flex items-center gap-1 rounded-full bg-sky-400/12 px-4 py-1.5 text-xs font-semibold text-sky-200 transition hover:bg-sky-400 hover:text-zinc-950"
            tabIndex={-1}
            aria-hidden="true"
          >
            View
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
