import Image from "next/image"
import type { Product } from "@/lib/types"
import { VialIllustration } from "@/components/shop/vial-illustration"
import { cn } from "@/lib/cn"

type ProductImageSize = "sm" | "md" | "lg"

type ProductImageProps = {
  product: Pick<Product, "name" | "netWeightMg" | "purityLabel" | "image">
  size?: ProductImageSize
  className?: string
  priority?: boolean
}

const sizeHeights: Record<ProductImageSize, string> = {
  sm: "h-32",
  md: "h-48",
  lg: "h-auto min-h-80",
}

export function ProductImage({
  product,
  size = "md",
  className,
  priority = false,
}: ProductImageProps) {
  if (!product.image) {
    return (
      <VialIllustration
        name={product.name}
        netWeightMg={product.netWeightMg}
        purityLabel={product.purityLabel}
        size={size}
        className={className}
      />
    )
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-surface",
        sizeHeights[size],
        size === "lg" && "py-8",
        className,
      )}
    >
      <Image
        src={product.image}
        alt={`${product.name} research peptide vial`}
        fill
        sizes={
          size === "lg"
            ? "(max-width: 1024px) 100vw, 50vw"
            : size === "md"
              ? "(max-width: 768px) 50vw, 33vw"
              : "112px"
        }
        className="object-contain p-4"
        priority={priority}
      />
    </div>
  )
}
