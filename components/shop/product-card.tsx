import Link from "next/link"
import type { Product } from "@/lib/types"
import { formatUsd } from "@/lib/money"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { VialIllustration } from "@/components/shop/vial-illustration"
import { cn } from "@/lib/cn"

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col bg-surface transition-colors duration-200 hover:bg-accent-muted/30">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block overflow-hidden border-b-2 border-ink"
        tabIndex={0}
        aria-label={`View details for ${product.name}`}
      >
        <VialIllustration
          name={product.name}
          netWeightMg={product.netWeightMg}
          purityLabel={product.purityLabel}
          size="md"
          className="transition-colors duration-200 group-hover:bg-paper"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <Link
            href={`/shop/${product.slug}`}
            className="font-display text-base font-bold text-ink link-underline"
          >
            {product.name}
          </Link>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {product.shortDescription}
          </p>
        </div>

        <Badge variant="accent">
          {product.purityLabel} &middot; {product.netWeightMg}&thinsp;mg
        </Badge>

        <div className="mt-auto flex items-center justify-between gap-3 border-t-2 border-ink pt-4">
          <div className="font-mono text-xl font-semibold tabular-nums">
            {formatUsd(product.priceCents)}
          </div>
          <Link
            href={`/shop/${product.slug}`}
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
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
