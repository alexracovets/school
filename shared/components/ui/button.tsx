"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib";

const buttonVariants = cva(
  "uppercase w-max font-kyiv_titling transition ease-out duration-300", 
  {
    variants: {
      variant: {
        default: cn(
          "text-[1.671rem] bg-regal-blue px-[2.047rem] py-[2.85rem] rounded-[2.319rem]",
          "max-tablet:text-[1rem] max-tablet:px-[1.2rem] max-tablet:py-[1.65rem] max-tablet:rounded-[1.4rem]",
          "max-mobile:text-[.977rem] max-mobile:px-[1.2rem] max-mobile:py-[1.65rem]"
        ),
        header: cn(
          "text-[1.618rem] px-[3.862rem] py-[1.5rem] rounded-[2.319rem] leading-[1]",
          "max-tablet:text-[1rem] max-tablet:px-[1.5rem] max-tablet:py-[1.15rem] max-tablet:rounded-[1.4rem]",
          "max-mobile:text-[.977rem] max-mobile:px-[1.35rem] max-mobile:py-[.8rem] max-mobile:text-center",
          "scale-[1] bg-regal-blue origin-center",
          "hover:bg-regal-btn-hover hover:scale-[1.1]"
        ),
        outline: "",
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
