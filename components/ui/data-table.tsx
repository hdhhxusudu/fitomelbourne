import { cn } from "@/lib/cn"

type DataTableProps = {
  children: React.ReactNode
  className?: string
}

export function DataTable({ children, className }: DataTableProps) {
  return (
    <div className={cn("overflow-hidden border-2 border-ink bg-surface", className)}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">{children}</table>
      </div>
    </div>
  )
}

type DataTableHeadProps = {
  columns: readonly (readonly [string, boolean])[]
}

export function DataTableHead({ columns }: DataTableHeadProps) {
  return (
    <thead>
      <tr className="border-b-2 border-ink bg-ink text-paper">
        {columns.map(([heading, right]) => (
          <th
            key={heading}
            className={cn(
              "px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em]",
              right && "text-right",
            )}
            scope="col"
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  )
}

type DataTableRowProps = React.HTMLAttributes<HTMLTableRowElement>

export function DataTableRow({ className, ...props }: DataTableRowProps) {
  return (
    <tr
      className={cn(
        "border-b border-ink/10 transition-colors duration-150 last:border-b-0 hover:bg-accent-muted",
        className,
      )}
      {...props}
    />
  )
}

export function DataTableBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("text-sm", className)} {...props} />
}
