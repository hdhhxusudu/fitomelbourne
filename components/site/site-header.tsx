"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/components/providers/cart-provider"
import { SITE_NAME } from "@/lib/site"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Products" },
  { href: "/products", label: "Catalog" },
  { href: "/pay", label: "Pay" },
] as const

export function SiteHeader() {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${SITE_NAME} home`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-md shadow-blue-600/25">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.9" />
                <circle cx="7" cy="17" r="2.5" fill="currentColor" opacity="0.7" />
                <circle cx="17" cy="17" r="2.5" fill="currentColor" opacity="0.7" />
                <line x1="12" y1="8" x2="7" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <line x1="12" y1="8" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="text-[15px] font-bold tracking-tight text-slate-900">
                {SITE_NAME}
              </div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-blue-500">
                Research Supply
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              className="relative flex h-9 items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 text-sm font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600 sm:px-4"
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
                  className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white"
                  suppressHydrationWarning
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              ) : null}
            </Link>

            <Link
              href="/shop"
              className="hidden h-9 items-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:inline-flex"
            >
              Shop Now
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-50 hover:text-slate-900 md:hidden"
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
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            tabIndex={0}
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5">
              <span className="text-sm font-bold text-slate-900">{SITE_NAME}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
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
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="mt-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                suppressHydrationWarning
              >
                Cart
                {itemCount > 0 ? (
                  <span
                    className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white"
                    suppressHydrationWarning
                  >
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                ) : null}
              </Link>
            </nav>

            <div className="border-t border-slate-100 px-5 py-5">
              <Link
                href="/shop"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Shop Now
              </Link>
              <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
                Research use only &middot; For qualified institutions
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
