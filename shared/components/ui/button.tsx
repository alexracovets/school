import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib";

const buttonVariants = cva(
  "uppercase w-max font-kyiv_titling rounded-[2.319rem]",
  {
    variants: {
      variant: {
        default: "text-[1.671rem] bg-regal-blue px-[2.047rem] py-[2.85rem]",
        header: "text-[1.618rem] bg-regal-blue px-[3.862rem] py-[1.5rem]",
        secondary: "",
        ghost: "",
        link: "",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
