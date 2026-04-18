"use client";

import Link from "next/link";
import { useCart } from "@/components/providers/cart-provider";
import { SITE_NAME } from "@/lib/site";

export function SiteHeader() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#041a17]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-700 text-sm font-bold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
            P4
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-white">
              {SITE_NAME}
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-emerald-200/80">
              Research supply
            </div>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-emerald-50/90 sm:gap-6">
          <Link href="/shop" className="transition hover:text-white">
            Shop
          </Link>
          <Link href="/products" className="transition hover:text-white">
            List
          </Link>
          <Link href="/pay" className="transition hover:text-white">
            Pay
          </Link>
          <Link
            href="/cart"
            className="relative transition hover:text-white"
            aria-label={`Cart with ${itemCount} items`}
            suppressHydrationWarning
          >
            Cart
            {itemCount > 0 ? (
              <span
                className="absolute -right-3 -top-2 grid min-h-5 min-w-5 place-items-center rounded-full bg-emerald-400 px-1 text-[10px] font-bold text-zinc-950"
                suppressHydrationWarning
              >
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            ) : null}
          </Link>
        </nav>
      </div>
    </header>
  );
}
