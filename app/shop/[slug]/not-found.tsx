import Link from "next/link"

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
          <svg
            className="h-8 w-8 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-2xl font-bold text-slate-900">Product not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          That SKU is not in our catalog. Return to the shop and pick an in-stock item.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Back to catalog
        </Link>
      </div>
    </div>
  )
}
