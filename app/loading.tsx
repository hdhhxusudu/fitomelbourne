import { PageHeaderSkeleton, ProductGridSkeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="bg-paper">
      <PageHeaderSkeleton />
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <ProductGridSkeleton count={3} />
      </div>
    </div>
  )
}
