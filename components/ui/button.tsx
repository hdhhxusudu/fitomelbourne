import { cn } from "@/lib/cn"

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive"
type ButtonSize = "sm" | "md" | "lg"

type ButtonVariants = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-2 border-ink bg-accent text-surface hard-shadow hard-shadow-hover transition-[transform,box-shadow] duration-150 hover:bg-accent/90",
  secondary:
    "border-2 border-ink bg-surface text-ink transition-colors duration-150 hover:border-accent hover:text-accent",
  ghost:
    "border-2 border-transparent bg-transparent text-ink transition-colors duration-150 hover:border-ink hover:bg-accent-muted",
  destructive:
    "border-2 border-ink bg-surface text-muted transition-colors duration-150 hover:border-accent hover:text-accent",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs font-mono uppercase tracking-wider",
  md: "h-11 px-6 text-sm font-semibold",
  lg: "h-12 px-8 text-sm font-semibold",
}

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: ButtonVariants = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 font-sans disabled:pointer-events-none disabled:opacity-40",
    variantStyles[variant],
    sizeStyles[size],
    className,
  )
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}
