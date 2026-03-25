import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full bg-clip-padding font-mono uppercase tracking-[0.25em] font-bold transition-all duration-300 outline-none select-none focus-visible:ring-1 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96] active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
        outline: "border border-border bg-background hover:bg-muted",
        secondary: "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground",
        ghost: "hover:bg-muted",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-8 text-[0.65rem]",
        sm: "h-9 px-6 text-[0.6rem]",
        lg: "h-14 px-10 text-[0.7rem]",
        xl: "h-14 px-12 md:h-16 md:px-32 text-[0.7rem] md:text-[0.8rem] gap-4",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
