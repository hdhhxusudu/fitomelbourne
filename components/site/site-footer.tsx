import Link from "next/link"
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
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                  <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.9" />
                  <circle cx="7" cy="17" r="2.5" fill="currentColor" opacity="0.7" />
                  <circle cx="17" cy="17" r="2.5" fill="currentColor" opacity="0.7" />
                  <line x1="12" y1="8" x2="7" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                  <line x1="12" y1="8" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                  <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">{SITE_NAME}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Research-grade peptides with documented purity, traceable batch records, and compliance-first distribution for qualified laboratories.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              <span className="font-medium text-slate-300">Email:</span>{" "}
              <span className="text-blue-400">support@peptides4u.com</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2.5" role="list">
              {shopLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Policies
            </div>
            <ul className="mt-4 space-y-2.5" role="list">
              {policyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Compliance
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              All products are sold for research use only by qualified buyers. Nothing on this site constitutes medical advice or a direction for human consumption.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              You are solely responsible for lawful import, possession, and use in your jurisdiction.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Research use only &middot; Not for human consumption
          </p>
        </div>
      </div>
    </footer>
  )
}
