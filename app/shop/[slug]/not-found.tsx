import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"

export default function NotFound() {
  return (
    <div className="bg-paper">
      <Container narrow className="py-24 text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 font-display text-6xl font-extrabold text-accent sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 font-display text-2xl font-bold">Product not found</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          That SKU is not in our catalog. Return to the shop and pick an in-stock item.
        </p>
        <Link
          href="/shop"
          className={`${buttonVariants({ variant: "primary", size: "md" })} mt-8`}
        >
          Back to catalog
        </Link>
      </Container>
    </div>
  )
}
