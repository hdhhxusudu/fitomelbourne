import Link from "next/link"
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/site"

const footerNav = [
  { href: "/shop", label: "Catalog" },
  { href: "/products", label: "Product list" },
  { href: "/cart", label: "Cart" },
  { href: "/pay", label: "Pay" },
  { href: "/checkout", label: "Checkout" },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t border-white/7 bg-[#020c09]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-linear-to-br from-emerald-400 to-teal-600 text-[10px] font-bold text-zinc-950">
                P4
              </span>
              <span className="text-sm font-semibold text-white">{SITE_NAME}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-emerald-100/55">
              {SITE_DESCRIPTION}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/55">
              Navigate
            </div>
            <ul className="mt-4 space-y-2.5" role="list">
              {footerNav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-emerald-100/55 transition hover:text-emerald-100/90"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/55">
              Compliance
            </div>
            <p className="mt-4 text-sm leading-relaxed text-emerald-100/55">
              Products are sold for research use only by qualified buyers. Nothing on
              this site constitutes medical advice.
            </p>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/55">
              Legal
            </div>
            <p className="mt-4 text-sm leading-relaxed text-emerald-100/55">
              You are solely responsible for lawful import, possession, and use in your
              jurisdiction. Verify local regulations before ordering.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/7 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-emerald-100/35">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-emerald-100/30">
            Research use only &middot; Not for human consumption
          </p>
        </div>
      </div>
    </footer>
  )
}
