import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductGrid } from "@/components/shop/product-grid";

export const metadata: Metadata = {
  title: "Peptides4Lifr · Research-grade peptides",
  description:
    "A modern storefront template for laboratory peptide supply with cart, catalog, and compliance-first copy.",
};

const featured = products.slice(0, 3);

export default function Home() {
  return (
    <div className="flex-1">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.35),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.22),transparent_40%),linear-gradient(180deg,#041a17,#020f0d)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
            Peptides4Lifr
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Research peptides with documentation you can audit.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-emerald-100/80">
            Built as a production-ready Next.js storefront: fast catalog pages, clean
            product detail, and a cart that persists locally while you integrate real
            checkout and fulfillment.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-300"
            >
              Shop catalog
            </Link>
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-emerald-50/90 hover:border-white/30 hover:text-white"
            >
              View cart
            </Link>
          </div>
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <dt className="text-xs uppercase tracking-wide text-emerald-200/70">
                Traceability
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-emerald-50/80">
                Batch records, identity testing, and release criteria modeled like a real
                supplier workflow.
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <dt className="text-xs uppercase tracking-wide text-emerald-200/70">
                Cold chain
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-emerald-50/80">
                Packaging and handling notes are surfaced on each product page so teams
                can plan receiving.
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <dt className="text-xs uppercase tracking-wide text-emerald-200/70">
                Compliance-first
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-emerald-50/80">
                Research-use positioning and jurisdiction reminders are included in the
                layout so you can adapt them with counsel.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Featured peptides</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-emerald-100/75">
              A curated slice of the catalog. Swap SKUs, purity targets, and pricing in
              one module to match your real inventory.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-sm font-semibold text-emerald-200 hover:text-white"
          >
            View all →
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid items={featured} />
        </div>
      </section>
    </div>
  );
}
