import type { Metadata } from "next"
import Link from "next/link"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/shop/product-card"
import { ProductImage } from "@/components/shop/product-image"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"
import { Section } from "@/components/ui/section"
import { SITE_NAME } from "@/lib/site"
import { cn } from "@/lib/cn"

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
    num: "01",
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
    num: "02",
    title: "Fast & Secure Shipping",
    body: "Orders are packed with cold-chain materials and dispatched promptly. Tracking is provided so you can plan receiving at your facility well in advance.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="9" width="18" height="12" stroke="currentColor" strokeWidth="1.8" />
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
    num: "03",
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
    text: "Exceptional purity levels and comprehensive documentation. The batch certificates made our compliance review straightforward. Will continue ordering for our lab's research protocols.",
  },
  {
    name: "Prof. James R.",
    role: "University Laboratory Director",
    text: "Reliable supplier with consistent quality across multiple orders. The cold-chain packaging was professional and the peptides arrived in excellent condition every time.",
  },
] as const

export default function Home() {
  return (
    <div className="flex-1">
      <section
        className="relative overflow-hidden border-b-2 border-ink bg-paper pb-0 pt-16 lg:pt-24 grid-lines"
        aria-labelledby="home-hero-heading"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="relative z-10 lg:col-span-7">
              <Eyebrow>{SITE_NAME}</Eyebrow>

              <h1
                id="home-hero-heading"
                className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
              >
                Advanced
                <br />
                <span className="text-accent">Research</span>
                <br />
                Supply
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Ultra-pure, lab-tested peptides trusted by researchers worldwide. Every
                product ships with batch documentation and independent purity verification.
              </p>

              <div className="mt-8 flex flex-wrap gap-2 border-t-2 border-ink pt-6">
                {trustBadges.map((b) => (
                  <Badge key={b.label} variant="outline">
                    {b.label}
                  </Badge>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/shop" className={buttonVariants({ variant: "primary", size: "lg" })}>
                  Shop Now
                </Link>
                <Link
                  href="/products"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  View Catalog
                </Link>
              </div>
            </div>

            <div className="relative flex flex-col gap-4 lg:col-span-5">
              {featured.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className={cn(
                    "animate-fade-up border-2 border-ink bg-surface transition-colors duration-200 hover:border-accent",
                    i === 1 && "lg:ml-8",
                  )}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center gap-0">
                    <ProductImage
                      product={p}
                      size="sm"
                      className="h-32 w-28 shrink-0 border-r-2 border-ink"
                    />
                    <div className="flex-1 p-4">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-accent">
                        Featured
                      </div>
                      <div className="mt-1 font-display font-bold">{p.name}</div>
                      <div className="mt-1 font-mono text-xs text-muted">
                        {p.purityLabel} &middot; {p.netWeightMg}mg
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow="Catalog" title="Best-Selling Products" titleId="bestsellers-heading">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div />
            <Link
              href="/shop"
              className="font-mono text-xs uppercase tracking-wider text-accent link-underline"
            >
              View All &rarr;
            </Link>
          </div>
          <div className="grid border-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <div
                key={p.slug}
                className="animate-fade-up border-b-2 border-ink sm:[&:nth-child(odd)]:border-r-2 lg:[&:not(:nth-child(3n))]:border-r-2"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" gridLines aria-labelledby="why-heading">
        <Container>
          <div className="mb-12 text-center">
            <Eyebrow>Benefits</Eyebrow>
            <h2
              id="why-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Why Shop With Us?
            </h2>
          </div>

          <dl className="grid gap-0 border-2 border-ink sm:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col border-b-2 border-ink p-8 sm:border-b-0 sm:[&:not(:last-child)]:border-r-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-accent">{item.num}</span>
                  <div className="flex h-14 w-14 items-center justify-center border-2 border-ink text-ink">
                    {item.icon}
                  </div>
                </div>
                <dt className="mt-6 font-display text-lg font-bold">{item.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section eyebrow="Premium Range" title="Premium Peptides" titleId="premium-heading">
        <Container>
          <div className="mb-10 flex items-end justify-end">
            <Link
              href="/shop"
              className="font-mono text-xs uppercase tracking-wider text-accent link-underline"
            >
              View All &rarr;
            </Link>
          </div>
          <div className="grid border-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
            {premium.map((p, i) => (
              <div
                key={p.slug}
                className="animate-fade-up border-b-2 border-ink sm:[&:nth-child(odd)]:border-r-2 lg:[&:not(:nth-child(3n))]:border-r-2"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface" aria-labelledby="testimonials-heading">
        <Container>
          <div className="mb-12 text-center">
            <Eyebrow>Reviews</Eyebrow>
            <h2
              id="testimonials-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What Researchers Say
            </h2>
          </div>

          <div className="grid gap-0 border-2 border-ink sm:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col border-b-2 border-ink p-8 sm:border-b-0 sm:[&:first-child]:border-r-2"
              >
                <span
                  className="font-display text-6xl leading-none text-accent"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.text}</p>
                <footer className="mt-8 border-t-2 border-ink pt-6">
                  <div className="font-semibold">{t.name}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                    {t.role}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-accent">
                    Verified researcher
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/shop" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Shop the Catalog
            </Link>
          </div>
        </Container>
      </Section>

      <section className="border-t-2 border-ink bg-ink py-20 lg:py-28">
        <Container className="text-center">
          <Eyebrow className="text-accent">Get started</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl">
            Ready to equip your lab?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-paper/60">
            Browse our full catalog of research-grade peptides with documented purity and batch traceability.
          </p>
          <Link
            href="/shop"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-10")}
          >
            Explore Catalog
          </Link>
        </Container>
      </section>
    </div>
  )
}
