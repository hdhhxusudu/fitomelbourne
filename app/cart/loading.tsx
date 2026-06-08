import { CartSkeleton } from "@/components/ui/skeleton"

export default function CartLoading() {
  return (
    <div className="bg-paper">
      <CartSkeleton />
    </div>
  )
}
