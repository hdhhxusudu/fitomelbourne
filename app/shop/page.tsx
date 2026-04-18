import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductGrid } from "@/components/shop/product-grid";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description: `Browse research-grade peptides at ${SITE_NAME} with documented purity.`,
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Catalog
          </h1>
          <p className="mt-3 text-base leading-relaxed text-emerald-100/75">
            Each listing includes net weight, purity target, and SKU. Expand any item
            for handling notes and compliance context before you check out.
          </p>
        </div>
        <Link
          href="/products"
          className="self-start text-sm font-semibold text-emerald-200 hover:text-white"
        >
          View product list →
        </Link>
      </div>
      <div className="mt-10">
        <ProductGrid items={products} />
      </div>
    </div>
  );
}
