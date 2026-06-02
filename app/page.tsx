import type { Metadata } from "next"
import Link from "next/link"
import { products } from "@/lib/products"
import { ProductGrid } from "@/components/shop/product-grid"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: `${SITE_NAME} · Research-grade peptides`,
  description:
    "A modern storefront template for laboratory peptide supply with cart, catalog, and compliance-first copy.",
}

const featured = products.slice(0, 3)

const trustPills = [
  { label: "Research use only" },
  { label: "Batch traceability" },
  { label: "Cold-chain notes" },
] as const

const highlights = [
  {
    title: "Traceability",
    body: "Batch records, identity testing, and release criteria modeled like a real supplier workflow.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Cold chain",
    body: "Packaging and handling notes are surfaced on each product page so teams can plan receiving.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Compliance-first",
    body: "Research-use positioning and jurisdiction reminders are included in the layout so you can adapt them with counsel.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const

export default function Home() {
  return (
    <div className="flex-1">
      <section
        className="relative overflow-hidden border-b border-white/[0.08]"
        aria-labelledby="home-hero-heading"
      >
        {/* Base + mesh */}
        <div className="pointer-events-none absolute inset-0 bg-[#020a08]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(52,211,153,0.22),transparent_50%),radial-gradient(circle_at_15%_40%,rgba(45,212,191,0.12),transparent_42%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.14),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0px,transparent_1px)] bg-[length:100%_64px] opacity-[0.35]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0px,transparent_1px)] bg-[length:64px_100%] opacity-30" />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:pt-24">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
              {SITE_NAME}
            </span>
            {trustPills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-100/70"
              >
                {pill.label}
              </span>
            ))}
          </div>

          <h1
            id="home-hero-heading"
            className="mt-8 max-w-4xl text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl sm:leading-[1.06] lg:text-6xl"
          >
            Research peptides with{" "}
            <span className="bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
              documentation you can audit
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/75 sm:text-lg">
            Built as a production-ready Next.js storefront: fast catalog pages, clean product
            detail, and a cart that persists locally while you integrate real checkout and
            fulfillment.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-8 text-sm font-semibold text-zinc-950 shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)] transition hover:from-emerald-300 hover:to-teal-300 hover:shadow-[0_0_48px_-6px_rgba(45,212,191,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              Shop catalog
            </Link>
            <Link
              href="/cart"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 text-sm font-semibold text-emerald-50/95 backdrop-blur-sm transition hover:border-emerald-400/35 hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/50"
            >
              View cart
            </Link>
          </div>

          <dl className="mt-16 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/25 hover:shadow-[0_28px_90px_-40px_rgba(16,185,129,0.18)]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-emerald-400/20" />
                <dt className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/85">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-200">
                    {item.icon}
                  </span>
                  {item.title}
                </dt>
                <dd className="mt-4 text-sm leading-relaxed text-emerald-50/78">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby="featured-heading"
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                Catalog
              </p>
              <h2
                id="featured-heading"
                className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Featured peptides
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-100/72 sm:text-base">
                A curated slice of the catalog. Swap SKUs, purity targets, and pricing in one
                module to match your real inventory.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-emerald-200 transition hover:gap-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/60"
            >
              View all
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative mt-10">
            <ProductGrid items={featured} />
          </div>
        </div>
      </section>
    </div>
  )
}
