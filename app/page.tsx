import type { Metadata } from "next"
import Link from "next/link"
import { products } from "@/lib/products"
import { ProductGrid } from "@/components/shop/product-grid"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: `${SITE_NAME} · Research-grade peptides`,
  description:
    "A modern storefront for laboratory peptide supply with cart, catalog, and compliance-first copy.",
}

const featured = products.slice(0, 3)

const trustPills = [
  { label: "Research use only" },
  { label: "Batch traceability" },
  { label: "Cold-chain guidance" },
  { label: "\u226598\u201399% purity" },
] as const

const highlights = [
  {
    title: "Full Traceability",
    body: "Batch records, identity testing, and release criteria modeled after real supplier workflows — every shipment is fully auditable.",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Cold Chain",
    body: "Packaging and handling notes surface on every product page so your team has full cold-chain visibility before receiving.",
    path: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Compliance-First",
    body: "Research-use positioning, jurisdiction reminders, and institutional verification guidance are built into the purchase flow.",
    path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
] as const

export default function Home() {
  return (
    <div className="flex-1">
      {/* ——— Hero ——— */}
      <section
        className="relative overflow-hidden border-b border-white/8"
        aria-labelledby="hero-heading"
      >
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0 bg-[#020c09]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_140%_90%_at_50%_-15%,rgba(52,211,153,0.17),transparent_55%),radial-gradient(circle_at_8%_55%,rgba(45,212,191,0.09),transparent_42%),radial-gradient(circle_at_92%_12%,rgba(16,185,129,0.11),transparent_40%)]" />
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(52,211,153,0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 25%, black 75%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/9 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200/85">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {SITE_NAME}
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="mt-7 max-w-4xl text-[2.5rem] font-semibold leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]"
          >
            Research peptides with{" "}
            <span className="bg-linear-to-r from-emerald-200 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
              documentation you can audit
            </span>
            .
          </h1>

          {/* Sub-copy */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-emerald-100/65 sm:text-lg sm:leading-relaxed">
            Production-ready storefront: fast catalog pages, clean product detail, and a
            cart that persists locally while you integrate real checkout and fulfillment.
          </p>

          {/* Trust pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {trustPills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center rounded-full border border-white/9 bg-white/4 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-100/60"
              >
                {pill.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-teal-400 px-8 text-sm font-semibold text-zinc-950 shadow-[0_0_32px_-6px_rgba(52,211,153,0.5)] transition-all hover:shadow-[0_0_40px_-4px_rgba(52,211,153,0.6)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-1"
            >
              Browse catalog
            </Link>
            <Link
              href="/cart"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/4 px-8 text-sm font-semibold text-emerald-50/90 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/7 hover:text-white focus-visible:ring-2 focus-visible:ring-white/30"
            >
              View cart
            </Link>
          </div>

          {/* Highlight cards */}
          <dl className="mt-20 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-white/2 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/20 hover:shadow-[0_12px_48px_-16px_rgba(52,211,153,0.18)]"
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-400/8 blur-2xl transition-all group-hover:bg-emerald-400/15"
                  aria-hidden="true"
                />
                <dt className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/75">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-400/15 bg-emerald-500/10 text-emerald-300">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d={item.path}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item.title}
                </dt>
                <dd className="mt-4 text-sm leading-relaxed text-emerald-50/65">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ——— Featured products ——— */}
      <section
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
        aria-labelledby="featured-heading"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/65">
              Catalog
            </p>
            <h2
              id="featured-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Featured peptides
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-emerald-100/65">
              Swap SKUs, purity targets, and pricing in one module to match your real
              inventory.
            </p>
          </div>
          <Link
            href="/shop"
            className="self-start inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300/75 transition-all hover:gap-2.5 hover:text-emerald-200 focus-visible:ring-2 focus-visible:ring-emerald-400/55 focus-visible:ring-offset-1"
            aria-label="View all products in the catalog"
          >
            View all
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid items={featured} />
        </div>
      </section>
    </div>
  )
}
