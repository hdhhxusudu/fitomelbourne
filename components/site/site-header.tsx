"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/components/providers/cart-provider"
import { SITE_NAME } from "@/lib/site"

const navLinks = [
  { href: "/shop", label: "Catalog" },
  { href: "/products", label: "Products" },
  { href: "/pay", label: "Pay" },
] as const

export function SiteHeader() {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/7 bg-[#02091a]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${SITE_NAME} home`}
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-sky-400 to-cyan-600 text-[11px] font-bold text-zinc-950 shadow-[0_0_12px_rgba(56,189,248,0.35)] transition-shadow group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              P4
            </span>
            <div className="leading-none">
              <div className="text-sm font-semibold text-white">{SITE_NAME}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-sky-300/55">
                Research supply
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-sky-100/65 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              className="relative flex h-9 items-center gap-2 rounded-full border border-white/9 bg-white/4 px-3.5 text-sm font-medium text-sky-100/75 transition hover:border-sky-400/25 hover:bg-white/7 hover:text-white sm:px-4"
              aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
              suppressHydrationWarning
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 1h1.5l.9 4.5m0 0L7 12h9l1.5-6.5H5.4z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8" cy="15.5" r="1.25" fill="currentColor" />
                <circle cx="15" cy="15.5" r="1.25" fill="currentColor" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 ? (
                <span
                  className="flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-400 px-1 text-[10px] font-bold text-zinc-950"
                  suppressHydrationWarning
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              ) : null}
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-sky-100/65 transition hover:bg-white/5 hover:text-white md:hidden"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen ? (
        <div
          className="fixed inset-0 z-50 md:hidden"
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            tabIndex={0}
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 flex h-full w-72 flex-col bg-[#040d20] shadow-[-1px_0_0_0_rgba(255,255,255,0.07)]">
            <div className="flex h-16 items-center justify-between border-b border-white/7 px-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-linear-to-br from-sky-400 to-cyan-600 text-[10px] font-bold text-zinc-950">
                  P4
                </span>
                <span className="text-sm font-semibold text-white">{SITE_NAME}</span>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sky-100/55 transition hover:bg-white/5 hover:text-white"
                aria-label="Close navigation menu"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 px-3 py-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-sky-100/75 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="mt-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-sky-100/75 transition hover:bg-white/5 hover:text-white"
                suppressHydrationWarning
              >
                Cart
                {itemCount > 0 ? (
                  <span
                    className="flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-400 px-1 text-[10px] font-bold text-zinc-950"
                    suppressHydrationWarning
                  >
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                ) : null}
              </Link>
            </nav>

            <div className="border-t border-white/7 px-5 py-5">
              <p className="text-[11px] leading-relaxed text-sky-100/40">
                Research use only &middot; For qualified institutions
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
