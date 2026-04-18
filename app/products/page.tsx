import type { Metadata } from "next";
import Link from "next/link";
import { ProductList } from "@/components/shop/product-list";
import { products } from "@/lib/products";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Product list`,
  description: `Full peptide catalog for ${SITE_NAME}: SKU, purity, net weight, and price.`,
  alternates: { canonical: "/products" },
};

export default function ProductsListPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Product list
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-emerald-100/75">
            All SKUs in one table. Open a row for full handling notes and add-to-cart on
            the detail page.
          </p>
        </div>
        <Link
          href="/shop"
          className="self-start text-sm font-semibold text-emerald-200 hover:text-white"
        >
          Grid catalog →
        </Link>
      </div>
      <div className="mt-10">
        <ProductList items={products} />
      </div>
    </div>
  );
}
