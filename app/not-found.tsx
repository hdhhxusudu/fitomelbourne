import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"

export default function RootNotFound() {
  return (
    <div className="bg-paper">
      <Container narrow className="py-24 text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 font-display text-6xl font-extrabold text-accent sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 font-display text-2xl font-bold">Page not found</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The page you requested does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className={buttonVariants({ variant: "primary", size: "md" })}>
            Go home
          </Link>
          <Link href="/shop" className={buttonVariants({ variant: "secondary", size: "md" })}>
            Browse catalog
          </Link>
        </div>
      </Container>
    </div>
  )
}
