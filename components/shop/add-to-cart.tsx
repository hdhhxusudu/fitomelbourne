"use client";

import { useState } from "react";
import { useCart } from "@/components/providers/cart-provider";

export function AddToCart({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [flash, setFlash] = useState(false);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="flex items-center gap-2 text-sm text-emerald-100/80">
        <span className="sr-only">Quantity</span>
        <input
          type="number"
          min={1}
          max={99}
          value={qty}
          onChange={(e) => {
            const next = Number(e.target.value);
            if (!Number.isFinite(next)) return;
            setQty(Math.min(99, Math.max(1, Math.floor(next))));
          }}
          className="w-24 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white outline-none ring-emerald-400/40 focus:ring-2"
        />
      </label>
      <button
        type="button"
        onClick={() => {
          addItem(slug, qty);
          setFlash(true);
          window.setTimeout(() => setFlash(false), 900);
        }}
        className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition hover:bg-emerald-300"
      >
        {flash ? "Added" : "Add to cart"}
      </button>
    </div>
  );
}
