import type { Product } from "@/lib/types"
import { ProductCard } from "@/components/shop/product-card"

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid border-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product, index) => (
        <div
          key={product.slug}
          className="border-b-2 border-ink sm:[&:nth-child(odd)]:border-r-2 lg:[&:not(:nth-child(3n))]:border-r-2"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
