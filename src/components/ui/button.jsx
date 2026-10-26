import { cva } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap bg-[#173f35] px-5 text-sm font-semibold text-[#f5f3ec] transition-colors hover:bg-[#245849] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a55032] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outline: "border border-[#173f35]/25 bg-transparent text-[#173f35] hover:bg-[#173f35]/5",
        ghost: "bg-transparent text-[#173f35] hover:bg-[#173f35]/5",
      },
      size: {
        default: "px-5",
        sm: "min-h-9 px-3 text-xs",
        lg: "min-h-14 px-7 text-base",
        icon: "size-10 min-h-0 px-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }