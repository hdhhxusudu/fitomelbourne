"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { CartStoredLine } from "@/lib/types";
import { getProductBySlug } from "@/lib/products";

type CartLineView = CartStoredLine & {
  name: string;
  priceCents: number;
  sku: string;
};

type CartContextValue = {
  lines: CartStoredLine[];
  lineViews: CartLineView[];
  addItem: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  removeLine: (slug: string) => void;
  clear: () => void;
  subtotalCents: number;
  itemCount: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "peptides4lifr-cart-v1";
const CART_EVENT = "peptides4lifr-cart-change";
const EMPTY_CART_LINES: CartStoredLine[] = [];

function readStored(): CartStoredLine[] {
  if (typeof window === "undefined") return EMPTY_CART_LINES;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_CART_LINES;
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return EMPTY_CART_LINES;
    const lines = parsed
      .map((row) => {
        if (typeof row !== "object" || row === null) return null;
        const slug = (row as { slug?: unknown }).slug;
        const qty = (row as { qty?: unknown }).qty;
        if (typeof slug !== "string" || typeof qty !== "number") return null;
        if (!Number.isFinite(qty) || qty < 1) return null;
        return { slug, qty: Math.floor(qty) };
      })
      .filter((x): x is CartStoredLine => x !== null);
    return lines.length === 0 ? EMPTY_CART_LINES : lines;
  } catch {
    return EMPTY_CART_LINES;
  }
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) onStoreChange();
  };
  const onLocal = () => onStoreChange();
  window.addEventListener("storage", onStorage);
  window.addEventListener(CART_EVENT, onLocal);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CART_EVENT, onLocal);
  };
}

function getServerCartSnapshot(): CartStoredLine[] {
  return EMPTY_CART_LINES;
}

function persistLines(next: CartStoredLine[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(CART_EVENT));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const lines = useSyncExternalStore(subscribe, readStored, getServerCartSnapshot);

  const addItem = useCallback((slug: string, qty = 1) => {
    const safeQty = Math.max(1, Math.floor(qty));
    const prev = readStored();
    const idx = prev.findIndex((l) => l.slug === slug);
    const next =
      idx === -1
        ? [...prev, { slug, qty: safeQty }]
        : (() => {
            const copy = [...prev];
            copy[idx] = { slug, qty: copy[idx].qty + safeQty };
            return copy;
          })();
    persistLines(next);
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    const safeQty = Math.max(1, Math.floor(qty));
    const prev = readStored();
    const idx = prev.findIndex((l) => l.slug === slug);
    const next =
      idx === -1
        ? [...prev, { slug, qty: safeQty }]
        : (() => {
            const copy = [...prev];
            copy[idx] = { slug, qty: safeQty };
            return copy;
          })();
    persistLines(next);
  }, []);

  const removeLine = useCallback((slug: string) => {
    persistLines(readStored().filter((l) => l.slug !== slug));
  }, []);

  const clear = useCallback(() => persistLines([]), []);

  const lineViews = useMemo(() => {
    return lines
      .map((line) => {
        const product = getProductBySlug(line.slug);
        if (!product) return null;
        return {
          ...line,
          name: product.name,
          priceCents: product.priceCents,
          sku: product.sku,
        };
      })
      .filter((x): x is CartLineView => x !== null);
  }, [lines]);

  const subtotalCents = useMemo(() => {
    return lineViews.reduce((sum, line) => sum + line.priceCents * line.qty, 0);
  }, [lineViews]);

  const itemCount = useMemo(() => {
    return lines.reduce((sum, line) => sum + line.qty, 0);
  }, [lines]);

  const value = useMemo(
    () => ({
      lines,
      lineViews,
      addItem,
      setQty,
      removeLine,
      clear,
      subtotalCents,
      itemCount,
    }),
    [
      lines,
      lineViews,
      addItem,
      setQty,
      removeLine,
      clear,
      subtotalCents,
      itemCount,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
