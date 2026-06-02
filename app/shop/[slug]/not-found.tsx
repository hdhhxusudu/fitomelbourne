import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-2xl font-semibold text-white">Product not found</h1>
      <p className="mt-3 text-sm leading-relaxed text-sky-100/75">
        That SKU is not in our catalog. Return to the shop and pick an in-stock item.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-flex rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-sky-300"
      >
        Back to catalog
      </Link>
    </div>
  );
}
