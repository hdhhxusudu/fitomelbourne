import type { Product } from "@/lib/types"
import { ProductCard } from "@/components/shop/product-card"

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
