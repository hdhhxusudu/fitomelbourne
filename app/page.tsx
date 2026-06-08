import type { Metadata } from "next"
import Link from "next/link"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { SITE_NAME } from "@/lib/site"

export const metadata: Metadata = {
  title: `${SITE_NAME} · Research-grade peptides`,
  description:
    "Premium research-grade peptides with documented purity, batch traceability, and compliance-first distribution.",
}

const featured = products.slice(0, 3)
const premium = products.slice(3, 6)

const trustBadges = [
  { label: "GMP Certified" },
  { label: "Batch Traceable" },
  { label: "Cold-Chain Noted" },
  { label: "Research Only" },
] as const

const whyUs = [
  {
    title: "Guaranteed High Quality",
    body: "Every batch undergoes rigorous identity testing and purity verification. We publish full certificates of analysis so your team can audit release criteria before use.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 2l2.5 6h6.5l-5.3 3.8 2 6.2L14 14.5l-5.7 3.5 2-6.2L5 8h6.5L14 2z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Fast & Secure Shipping",
    body: "Orders are packed with cold-chain materials and dispatched promptly. Tracking is provided so you can plan receiving at your facility well in advance.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="9" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M20 13l4 2v5h-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="23" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="20" cy="23" r="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 14h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Dedicated Customer Support",
    body: "Our team is available to answer technical questions about specifications, handling requirements, and documentation needs for your research program.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M4 26c0-5.523 4.477-10 10-10s10 4.477 10 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const

const testimonials = [
  {
    name: "Dr. Sarah M.",
    role: "Research Biochemist",
    rating: 5,
    text: "Exceptional purity levels and comprehensive documentation. The batch certificates made our compliance review straightforward. Will continue ordering for our lab's research protocols.",
  },
  {
    name: "Prof. James R.",
    role: "University Laboratory Director",
    rating: 5,
    text: "Reliable supplier with consistent quality across multiple orders. The cold-chain packaging was professional and the peptides arrived in excellent condition every time.",
  },
] as const

export default function Home() {
  return (
    <div className="flex-1">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-white pb-0 pt-12 sm:pt-16 lg:pt-20"
        aria-labelledby="home-hero-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: copy */}
            <div className="relative z-10">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                {SITE_NAME}
              </span>

              <h1
                id="home-hero-heading"
                className="mt-5 text-[2.5rem] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]"
              >
                Advanced<br />
                <span className="text-blue-600">Scientific</span><br />
                Research Supply
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
                Ultra-Pure, Lab-Tested Peptides trusted by researchers worldwide. Every
                product ships with batch documentation and independent purity verification.
              </p>

              {/* Trust badges */}
              <div className="mt-7 flex flex-wrap gap-2">
                {trustBadges.map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
                  >
                    <svg
                      className="h-3.5 w-3.5 text-blue-500"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 1l1.5 3.5 3.5.5-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {b.label}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/shop"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Shop Now
                </Link>
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  View Catalog
                </Link>
              </div>
            </div>

            {/* Right: floating vials */}
            <div className="relative flex items-end justify-center pb-0 lg:justify-end">
              {/* Blue radial blob */}
              <div
                className="absolute right-0 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.55)_0%,rgba(219,234,254,0.35)_50%,transparent_72%)]"
                aria-hidden="true"
              />

              {/* Three vial thumbnails */}
              <div className="relative z-10 flex items-end gap-4 pb-4">
                {featured.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/shop/${p.slug}`}
                    className={`group block transition-all duration-500 hover:-translate-y-3 ${
                      i === 1 ? "-translate-y-8" : ""
                    }`}
                  >
                    <div className="w-24 overflow-hidden rounded-2xl bg-white shadow-xl shadow-blue-200/60 ring-1 ring-slate-100">
                      {/* Cap */}
                      <div className="mx-auto mt-3 h-3 w-7 rounded-t-sm bg-blue-500" />
                      <div className="mx-auto h-1 w-9 bg-blue-400/50" />
                      <div className="mx-auto h-3 w-5 bg-blue-100/60" />
                      {/* Body */}
                      <div className="mx-2.5 mb-3 rounded-b-2xl bg-gradient-to-b from-blue-50 to-blue-100 px-2 pb-3 pt-2">
                        <div className="rounded-md bg-gradient-to-b from-blue-600 to-blue-700 px-1.5 py-2 text-center">
                          <div className="text-[7px] font-bold uppercase tracking-widest text-blue-100">
                            P4U
                          </div>
                          <div className="mt-0.5 text-[9px] font-black leading-tight text-white">
                            {p.name}
                          </div>
                          <div className="mt-0.5 text-[7px] text-blue-200">
                            {p.netWeightMg}mg
                          </div>
                        </div>
                        <div className="mt-1.5 flex h-5 items-end justify-center gap-0.5">
                          {[3, 5, 2, 6, 4].map((h, j) => (
                            <div
                              key={j}
                              style={{ height: `${h * 3}px` }}
                              className="w-0.5 rounded-full bg-blue-300"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="mt-10">
          <svg
            viewBox="0 0 1440 56"
            fill="none"
            preserveAspectRatio="none"
            className="h-10 w-full text-slate-50"
            aria-hidden="true"
          >
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ── Best-Selling Products ─────────────────────────── */}
      <section
        className="bg-slate-50 py-16 sm:py-20"
        aria-labelledby="bestsellers-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">
                Catalog
              </p>
              <h2
                id="bestsellers-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Best-Selling Products
              </h2>
            </div>
            <Link
              href="/shop"
              className="self-start text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Shop With Us ──────────────────────────────── */}
      <section className="relative py-24 sm:py-28" aria-labelledby="why-heading">
        {/* Blue wave bg */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-blue-100"
          aria-hidden="true"
        />
        {/* Top wave cutout */}
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          preserveAspectRatio="none"
          className="absolute left-0 top-0 h-14 w-full text-slate-50"
          aria-hidden="true"
        >
          <path d="M0,0 C480,72 960,0 1440,48 L1440,0 Z" fill="currentColor" />
        </svg>
        {/* Bottom wave cutout */}
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-14 w-full text-white"
          aria-hidden="true"
        >
          <path d="M0,48 C480,0 960,72 1440,24 L1440,72 L0,72 Z" fill="currentColor" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Benefits
            </p>
            <h2
              id="why-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Why Shop With Us?
            </h2>
          </div>

          <dl className="grid gap-6 sm:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl bg-white/80 p-7 text-center shadow-sm backdrop-blur-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                  {item.icon}
                </div>
                <dt className="mt-5 text-base font-bold text-slate-900">{item.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-slate-500">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Premium Peptides ─────────────────────────────── */}
      <section
        className="bg-white py-16 sm:py-20"
        aria-labelledby="premium-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">
                Premium Range
              </p>
              <h2
                id="premium-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Premium Peptides
              </h2>
            </div>
            <Link
              href="/shop"
              className="self-start text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {premium.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section
        className="bg-slate-50 py-16 sm:py-20"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-500">
              Reviews
            </p>
            <h2
              id="testimonials-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              What Our Customers Are Saying
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-amber-400"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 1l1.5 4h4l-3.3 2.4 1.3 4L8 9l-3.5 2.4 1.3-4L2.5 5h4L8 1z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-50 pt-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-xs font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/shop"
              className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:bg-blue-700"
            >
              Shop the Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
