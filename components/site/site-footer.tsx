import Link from "next/link"
import { Container } from "@/components/ui/container"
import { SITE_NAME } from "@/lib/site"

const shopLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/products", label: "Product List" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/pay", label: "Pay" },
] as const

const policyLinks = [
  { href: "/shop", label: "Research Use Policy" },
  { href: "/shop", label: "Shipping Information" },
  { href: "/shop", label: "Returns & Refunds" },
  { href: "/shop", label: "Privacy Policy" },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:divide-x-2 md:divide-paper/20">
          <div className="sm:col-span-2 md:col-span-1 md:pr-8">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center border-2 border-paper bg-ink">
                <div className="absolute right-0 top-0 h-2 w-2 bg-accent" aria-hidden="true" />
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-paper">
                  <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="12" y1="8" x2="7" y2="17" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="12" y1="8" x2="17" y2="17" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="font-display text-base font-bold">{SITE_NAME}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              Research-grade peptides with documented purity, traceable batch records, and compliance-first distribution for qualified laboratories.
            </p>
            <p className="mt-4 text-sm text-paper/60">
              <span className="font-mono text-[11px] uppercase tracking-wider text-paper/80">
                Email
              </span>
              <br />
              <span className="text-accent">support@peptides4u.com</span>
            </p>
          </div>

          <div className="md:px-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2.5" role="list">
              {shopLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-paper/60 link-underline transition-colors hover:text-paper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:px-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
              Policies
            </div>
            <ul className="mt-4 space-y-2.5" role="list">
              {policyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-paper/60 link-underline transition-colors hover:text-paper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
              Compliance
            </div>
            <div className="mt-4 border-2 border-paper/20 p-4">
              <p className="text-sm leading-relaxed text-paper/60">
                All products are sold for research use only by qualified buyers. Nothing on this site constitutes medical advice or a direction for human consumption.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                You are solely responsible for lawful import, possession, and use in your jurisdiction.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t-2 border-paper/20 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-paper/40">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-paper/40">
            Research use only &middot; Not for human consumption
          </p>
        </div>
      </Container>
    </footer>
  )
}
