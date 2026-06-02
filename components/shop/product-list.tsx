import Link from "next/link"
import type { Product } from "@/lib/types"
import { formatUsd } from "@/lib/money"

export function ProductList({ items }: { items: Product[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/[0.07] bg-black/20">
              {(
                [
                  ["Product", false],
                  ["SKU", false],
                  ["Purity", false],
                  ["Net weight", false],
                  ["Price", true],
                  [" ", true],
                ] as const
              ).map(([heading, right]) => (
                <th
                  key={heading}
                  className={`px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-sky-200/65${right ? " text-right" : ""}`}
                  scope="col"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05]">
            {items.map((p) => (
              <tr key={p.slug} className="group transition hover:bg-white/[0.025]">
                <td className="px-5 py-4">
                  <Link
                    href={`/shop/${p.slug}`}
                    className="font-semibold text-white transition hover:text-sky-200"
                  >
                    {p.name}
                  </Link>
                  <div className="mt-1 max-w-xs text-xs leading-relaxed text-sky-100/50">
                    {p.shortDescription}
                  </div>
                </td>
                <td className="px-5 py-4 font-mono text-xs text-sky-100/55">
                  {p.sku}
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-full border border-sky-400/15 bg-sky-400/[0.08] px-2.5 py-0.5 text-xs font-medium text-sky-200/80">
                    {p.purityLabel}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-sky-100/70">
                  {p.netWeightMg}&thinsp;mg
                </td>
                <td className="px-5 py-4 text-right font-semibold text-white">
                  {formatUsd(p.priceCents)}
                </td>
                <td className="px-5 py-4 text-right">
                  <Link
                    href={`/shop/${p.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border border-white/[0.1] px-3.5 py-1.5 text-xs font-semibold text-sky-100/70 transition hover:border-sky-400/25 hover:text-sky-200"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
