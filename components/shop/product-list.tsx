import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatUsd } from "@/lib/money";

export function ProductList({ items }: { items: Product[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-black/20 text-xs font-semibold uppercase tracking-wide text-emerald-200/80">
              <th className="px-4 py-3 font-semibold">Product</th>
              <th className="px-4 py-3 font-semibold">SKU</th>
              <th className="px-4 py-3 font-semibold">Purity</th>
              <th className="px-4 py-3 font-semibold">Net</th>
              <th className="px-4 py-3 text-right font-semibold">Price</th>
              <th className="px-4 py-3 text-right font-semibold"> </th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr
                key={p.slug}
                className="border-b border-white/[0.06] last:border-0 hover:bg-white/[0.03]"
              >
                <td className="px-4 py-4">
                  <Link
                    href={`/shop/${p.slug}`}
                    className="font-semibold text-white hover:text-emerald-200"
                  >
                    {p.name}
                  </Link>
                  <div className="mt-1 max-w-md text-xs leading-relaxed text-emerald-100/60">
                    {p.shortDescription}
                  </div>
                </td>
                <td className="px-4 py-4 font-mono text-xs text-emerald-100/70">{p.sku}</td>
                <td className="px-4 py-4 text-emerald-100/80">{p.purityLabel}</td>
                <td className="px-4 py-4 text-emerald-100/80">{p.netWeightMg} mg</td>
                <td className="px-4 py-4 text-right font-semibold text-white">
                  {formatUsd(p.priceCents)}
                </td>
                <td className="px-4 py-4 text-right">
                  <Link
                    href={`/shop/${p.slug}`}
                    className="inline-flex rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-emerald-100/90 hover:border-emerald-400/40 hover:text-white"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
