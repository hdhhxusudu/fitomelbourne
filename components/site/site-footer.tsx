import Link from "next/link"
import { SiteLogo } from "@/components/site/site-logo"
import { Container } from "@/components/ui/container"
import { footerNavLinks } from "@/lib/navigation"
import { SITE_NAME } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:divide-x-2 md:divide-paper/20">
          <div className="sm:col-span-2 md:col-span-1 md:pr-8">
            <SiteLogo variant="dark" />
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
              {footerNavLinks.map(({ href, label }) => (
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
