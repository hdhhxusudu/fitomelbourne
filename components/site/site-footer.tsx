import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#020f0d]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-white">{SITE_NAME}</div>
            <p className="mt-3 text-sm leading-relaxed text-emerald-100/70">
              Laboratory-grade peptides for qualified institutions. We emphasize
              traceability, documentation, and careful cold-chain handling on every
              shipment.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Navigate</div>
            <ul className="mt-3 space-y-2 text-sm text-emerald-100/70">
              <li>
                <Link href="/shop" className="hover:text-white">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Product list
                </Link>
              </li>
              <li>
                <Link href="/pay" className="hover:text-white">
                  Pay
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Compliance</div>
            <p className="mt-3 text-sm leading-relaxed text-emerald-100/70">
              Products are sold for research use only by qualified buyers. Nothing
              on this site is medical advice. You are responsible for lawful import,
              possession, and use in your jurisdiction.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-emerald-100/50">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
