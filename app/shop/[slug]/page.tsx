import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AddToCart } from "@/components/shop/add-to-cart"
import { VialIllustration } from "@/components/shop/vial-illustration"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { formatUsd } from "@/lib/money"
import { getAllProductSlugs, getProductBySlug } from "@/lib/products"
import { cn } from "@/lib/cn"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Product" }
  return {
    title: product.name,
    description: product.shortDescription,
  }
}

const specRows = (netWeightMg: number, purityLabel: string) =>
  [
    { label: "Net weight", value: `${netWeightMg} mg` },
    { label: "Purity target", value: purityLabel },
    { label: "Presentation", value: "Lyophilized" },
    { label: "Storage", value: "−20 °C / −4 °F" },
  ] as const

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  return (
    <div className="bg-paper">
      <Container className="py-10 sm:py-14">
        <nav
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider"
          aria-label="Breadcrumb"
        >
          <Link href="/shop" className="text-muted link-underline">
            Catalog
          </Link>
          <span className="text-muted" aria-hidden="true">
            /
          </span>
          <span className="font-semibold text-ink">{product.name}</span>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start xl:gap-14">
          <div className="lg:col-span-7">
            <div className="border-2 border-ink bg-surface">
              <VialIllustration
                name={product.name}
                netWeightMg={product.netWeightMg}
                purityLabel={product.purityLabel}
                size="lg"
              />

              <div className="border-t-2 border-ink p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                  Lyophilized reference standard
                </div>
                <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight lg:text-4xl">
                  {product.name}
                </h1>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge variant="accent">
                    {product.netWeightMg}&thinsp;mg net
                  </Badge>
                  <Badge variant="outline">{product.purityLabel} purity</Badge>
                  <Badge variant="default">{product.sku}</Badge>
                </div>

                <table className="mt-8 w-full border-collapse border-2 border-ink text-sm">
                  <tbody>
                    {specRows(product.netWeightMg, product.purityLabel).map(({ label, value }) => (
                      <tr key={label} className="border-b border-ink/10 last:border-b-0">
                        <th
                          scope="row"
                          className="border-r-2 border-ink bg-paper px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider text-muted"
                        >
                          {label}
                        </th>
                        <td className="px-4 py-3 font-mono font-semibold tabular-nums">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5 lg:sticky lg:top-24">
            <Card hardShadow padding="md">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Price
              </div>
              <div className="mt-2 font-mono text-4xl font-bold tabular-nums">
                {formatUsd(product.priceCents)}
              </div>
              <div className="mt-1 font-mono text-xs text-muted">
                Per unit &middot; excluding shipping
              </div>

              <div className="mt-6">
                <AddToCart slug={product.slug} />
              </div>

              <Link
                href="/cart"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "md" }),
                  "mt-3 w-full",
                )}
              >
                View cart
              </Link>
            </Card>

            <Card padding="md">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Description
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p>
            </Card>

            <div className="border-l-4 border-accent bg-warning-bg p-5">
              <p className="text-xs leading-relaxed text-ink">
                Cold storage after reconstitution where applicable. For qualified research
                programs only. Verify import rules before purchasing.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-0 border-2 border-ink">
              {(
                [
                  { label: "Batch docs", sub: "Included" },
                  { label: "Cold chain", sub: "Noted" },
                  { label: "Research use", sub: "Only" },
                ] as const
              ).map(({ label, sub }, i) => (
                <div
                  key={label}
                  className={cn(
                    "bg-surface p-3 text-center",
                    i < 2 && "border-r-2 border-ink",
                  )}
                >
                  <div className="font-mono text-[11px] font-semibold uppercase">{label}</div>
                  <div className="mt-0.5 font-mono text-[10px] text-muted">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
