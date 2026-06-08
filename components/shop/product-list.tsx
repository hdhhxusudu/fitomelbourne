import Link from "next/link"
import type { Product } from "@/lib/types"
import { formatUsd } from "@/lib/money"

export function ProductList({ items }: { items: Product[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">
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
                  className={`px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500${right ? " text-right" : ""}`}
                  scope="col"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {items.map((p) => (
              <tr key={p.slug} className="group transition hover:bg-blue-50/30">
                <td className="px-5 py-4">
                  <Link
                    href={`/shop/${p.slug}`}
                    className="font-semibold text-slate-900 transition hover:text-blue-600"
                  >
                    {p.name}
                  </Link>
                  <div className="mt-1 max-w-xs text-xs leading-relaxed text-slate-400">
                    {p.shortDescription}
                  </div>
                </td>
                <td className="px-5 py-4 font-mono text-xs text-slate-400">
                  {p.sku}
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600">
                    {p.purityLabel}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-slate-600">
                  {p.netWeightMg}&thinsp;mg
                </td>
                <td className="px-5 py-4 text-right font-bold text-slate-900">
                  {formatUsd(p.priceCents)}
                </td>
                <td className="px-5 py-4 text-right">
                  <Link
                    href={`/shop/${p.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border border-blue-400 px-3.5 py-1.5 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
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
