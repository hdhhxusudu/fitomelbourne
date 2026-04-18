"use client";

import Link from "next/link";
import { useCart } from "@/components/providers/cart-provider";
import { formatUsd } from "@/lib/money";

export default function CartPage() {
  const { lineViews, subtotalCents, setQty, removeLine, clear } = useCart();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">Cart</h1>
          <p className="mt-2 text-sm text-emerald-100/75">
            Adjust quantities here, then continue to checkout when you are ready.
          </p>
        </div>
        {lineViews.length > 0 ? (
          <button
            type="button"
            onClick={() => clear()}
            className="self-start rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-100/80 transition hover:border-white/30 hover:text-white"
          >
            Clear cart
          </button>
        ) : null}
      </div>

      {lineViews.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
          <p className="text-sm text-emerald-100/80">Your cart is empty.</p>
          <Link
            href="/shop"
            className="mt-6 inline-flex rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-emerald-300"
          >
            Browse catalog
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-4">
            {lineViews.map((line) => (
              <div
                key={line.slug}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <Link
                    href={`/shop/${line.slug}`}
                    className="text-base font-semibold text-white hover:text-emerald-200"
                  >
                    {line.name}
                  </Link>
                  <div className="mt-1 text-xs text-emerald-100/60">{line.sku}</div>
                  <div className="mt-2 text-sm text-emerald-100/80">
                    {formatUsd(line.priceCents)} each
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <label className="flex items-center gap-2 text-sm text-emerald-100/80">
                    Qty
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={line.qty}
                      onChange={(e) => {
                        const next = Number(e.target.value);
                        if (!Number.isFinite(next)) return;
                        setQty(line.slug, Math.min(99, Math.max(1, Math.floor(next))));
                      }}
                      className="w-24 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white outline-none ring-emerald-400/40 focus:ring-2"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => removeLine(line.slug)}
                    className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-100/80 transition hover:border-rose-400/40 hover:text-rose-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-sm font-semibold text-white">Summary</div>
            <div className="mt-4 flex items-baseline justify-between text-sm text-emerald-100/80">
              <span>Subtotal</span>
              <span className="text-lg font-semibold text-white">
                {formatUsd(subtotalCents)}
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-emerald-100/60">
              Taxes and shipping are finalized offline or in your processor. Use Pay to
              open your hosted checkout when a payment link is configured.
            </p>
            <Link
              href="/pay"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-300"
            >
              Pay
            </Link>
            <Link
              href="/checkout"
              className="mt-3 flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-emerald-100/85 hover:border-white/30 hover:text-white"
            >
              Checkout notes
            </Link>
            <Link
              href="/shop"
              className="mt-3 flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-emerald-100/85 hover:border-white/30 hover:text-white"
            >
              Keep shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
