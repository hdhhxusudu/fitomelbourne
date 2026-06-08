import { cn } from "@/lib/cn"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  mono?: boolean
}

export function Input({ mono = false, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full border-2 border-ink bg-surface px-4 text-sm text-ink outline-none transition-colors duration-150 placeholder:text-muted focus:border-accent",
        mono && "font-mono tabular-nums",
        className,
      )}
      {...props}
    />
  )
}
