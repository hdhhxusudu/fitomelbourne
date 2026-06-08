"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "@/components/providers/cart-provider"
import { buttonVariants } from "@/components/ui/button"
import { SITE_NAME } from "@/lib/site"
import { cn } from "@/lib/cn"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Products" },
  { href: "/products", label: "Catalog" },
  { href: "/pay", label: "Pay" },
] as const

export function SiteHeader() {
  const { itemCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-sm transition-[border-width]",
          scrolled && "border-b-[3px]",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${SITE_NAME} home`}
          >
            <div className="relative flex h-9 w-9 items-center justify-center border-2 border-ink bg-surface">
              <div className="absolute right-0 top-0 h-2 w-2 bg-accent" aria-hidden="true" />
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-ink">
                <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                <line x1="12" y1="8" x2="7" y2="17" stroke="currentColor" strokeWidth="1.2" />
                <line x1="12" y1="8" x2="17" y2="17" stroke="currentColor" strokeWidth="1.2" />
                <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="font-display text-[15px] font-bold tracking-tight">
                {SITE_NAME}
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Research Supply
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-0 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-150",
                    isActive
                      ? "border-accent text-ink"
                      : "border-transparent text-muted hover:border-ink hover:text-ink",
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              className={cn(
                "relative flex h-9 items-center gap-2 border-2 border-ink px-3.5 font-mono text-xs uppercase tracking-wider transition-colors duration-150 sm:px-4",
                itemCount > 0
                  ? "bg-accent text-surface hover:bg-accent/90"
                  : "bg-surface text-ink hover:border-accent",
              )}
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
                  className="flex h-5 min-w-5 items-center justify-center border border-current px-1 text-[10px] font-bold"
                  suppressHydrationWarning
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              ) : null}
            </Link>

            <Link
              href="/shop"
              className={cn(
                buttonVariants({ variant: "primary", size: "sm" }),
                "hidden sm:inline-flex",
              )}
            >
              Shop Now
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center border-2 border-ink text-muted transition-colors duration-150 hover:border-accent hover:text-ink md:hidden"
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

      {menuOpen ? (
        <div
          className="fixed inset-0 z-50 md:hidden"
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            tabIndex={0}
          />

          <div className="absolute right-0 top-0 flex h-full w-72 animate-fade-in flex-col border-l-2 border-ink bg-surface">
            <div className="flex h-16 items-center justify-between border-b-2 border-ink px-5">
              <span className="font-display text-sm font-bold">{SITE_NAME}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center border-2 border-ink text-muted transition-colors hover:border-accent"
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
                  className="flex items-center border-b border-ink/10 px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="mt-1 flex items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
                suppressHydrationWarning
              >
                Cart
                {itemCount > 0 ? (
                  <span
                    className="flex h-5 min-w-5 items-center justify-center bg-accent px-1 text-[10px] font-bold text-surface"
                    suppressHydrationWarning
                  >
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                ) : null}
              </Link>
            </nav>

            <div className="border-t-2 border-ink px-5 py-5">
              <Link
                href="/shop"
                onClick={() => setMenuOpen(false)}
                className={cn(buttonVariants({ variant: "primary", size: "md" }), "w-full")}
              >
                Shop Now
              </Link>
              <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted">
                Research use only &middot; For qualified institutions
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
