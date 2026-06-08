"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Eyebrow } from "@/components/ui/eyebrow"

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="bg-paper">
      <Container narrow className="py-24 text-center">
        <Eyebrow>Error</Eyebrow>
        <h1 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <Button
          type="button"
          variant="primary"
          size="md"
          className="mt-8"
          onClick={() => reset()}
        >
          Try again
        </Button>
      </Container>
    </div>
  )
}
