import Link from "next/link"
import type { Product } from "@/lib/types"
import { formatUsd } from "@/lib/money"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableRow,
} from "@/components/ui/data-table"
import { cn } from "@/lib/cn"

const columns = [
  ["Product", false],
  ["SKU", false],
  ["Purity", false],
  ["Net weight", false],
  ["Price", true],
  [" ", true],
] as const

export function ProductList({ items }: { items: Product[] }) {
  return (
    <DataTable>
      <DataTableHead columns={columns} />
      <DataTableBody>
        {items.map((p) => (
          <DataTableRow key={p.slug}>
            <td className="px-5 py-4">
              <Link
                href={`/shop/${p.slug}`}
                className="font-semibold text-ink link-underline"
              >
                {p.name}
              </Link>
              <div className="mt-1 max-w-xs text-xs leading-relaxed text-muted">
                {p.shortDescription}
              </div>
            </td>
            <td className="px-5 py-4 font-mono text-xs text-muted">{p.sku}</td>
            <td className="px-5 py-4">
              <Badge variant="accent">{p.purityLabel}</Badge>
            </td>
            <td className="px-5 py-4 font-mono text-sm tabular-nums">
              {p.netWeightMg}&thinsp;mg
            </td>
            <td className="px-5 py-4 text-right font-mono font-bold tabular-nums">
              {formatUsd(p.priceCents)}
            </td>
            <td className="px-5 py-4 text-right">
              <Link
                href={`/shop/${p.slug}`}
                className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
              >
                View
              </Link>
            </td>
          </DataTableRow>
        ))}
      </DataTableBody>
    </DataTable>
  )
}
