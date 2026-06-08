import { cn } from "@/lib/cn"

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse bg-ink/5", className)}
      aria-hidden="true"
      {...props}
    />
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col border-2 border-ink bg-surface">
      <Skeleton className="h-48 w-full" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="mt-4 h-6 w-1/3" />
      </div>
    </div>
  )
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid border-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="border-b-2 border-ink sm:[&:nth-child(odd)]:border-r-2 lg:[&:not(:nth-child(3n))]:border-r-2"
        >
          <ProductCardSkeleton />
        </div>
      ))}
    </div>
  )
}

export function PageHeaderSkeleton() {
  return (
    <div className="border-b-2 border-ink pb-10 pt-16">
      <div className="mx-auto max-w-7xl space-y-4 px-6 sm:px-8 lg:px-12">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-12 w-2/3 max-w-lg" />
        <Skeleton className="h-5 w-full max-w-md" />
      </div>
    </div>
  )
}

export function PdpSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
      <Skeleton className="mb-10 h-4 w-48" />
      <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
        <Skeleton className="h-[480px] w-full" />
        <div className="space-y-6">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  )
}

export function CartSkeleton() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-6 py-12 sm:px-8 lg:px-12">
      <Skeleton className="h-10 w-48" />
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-3">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  )
}
