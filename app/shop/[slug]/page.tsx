import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/shop/add-to-cart";
import { formatUsd } from "@/lib/money";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="text-sm text-emerald-200/70">
        <Link href="/shop" className="hover:text-white">
          Catalog
        </Link>
        <span className="px-2 text-emerald-200/40">/</span>
        <span className="text-white">{product.name}</span>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.35),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.25),transparent_45%),linear-gradient(145deg,#041a17,#0b2a24)] p-10">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-200/80">
            Lyophilized reference
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-emerald-100/80">
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
              {product.netWeightMg} mg net
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
              {product.purityLabel} purity target
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
              SKU {product.sku}
            </span>
          </div>
        </div>

        <div>
          <div className="text-3xl font-semibold text-white">
            {formatUsd(product.priceCents)}
          </div>
          <p className="mt-5 text-base leading-relaxed text-emerald-100/80">
            {product.description}
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed text-emerald-100/75">
            Cold storage after reconstitution where applicable. Do not use outside a
            compliant research program. Verify import rules before purchasing.
          </div>

          <div className="mt-8">
            <AddToCart slug={product.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
