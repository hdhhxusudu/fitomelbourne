type StatBlockProps = {
  value: string
  label: string
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="border-l-2 border-ink pl-5">
      <div className="font-mono text-2xl font-semibold tabular-nums">{value}</div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
        {label}
      </div>
    </div>
  )
}
