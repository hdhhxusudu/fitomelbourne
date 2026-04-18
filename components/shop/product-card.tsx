import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatUsd } from "@/lib/money";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)] transition hover:border-emerald-400/30 hover:bg-white/[0.05]">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.35),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.25),transparent_45%),linear-gradient(145deg,#041a17,#0b2a24)]" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center backdrop-blur">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-200/80">
              Lyophilized
            </div>
            <div className="mt-2 text-lg font-semibold tracking-tight text-white">
              {product.name}
            </div>
            <div className="mt-1 text-xs text-emerald-100/70">
              {product.netWeightMg} mg · {product.purityLabel}
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-sm leading-relaxed text-emerald-50/75">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="text-base font-semibold text-white">
            {formatUsd(product.priceCents)}
          </div>
          <Link
            href={`/shop/${product.slug}`}
            className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-950 transition group-hover:bg-emerald-300"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
