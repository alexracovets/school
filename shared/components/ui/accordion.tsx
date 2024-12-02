"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { TiPlus, TiMinus } from "react-icons/ti";
import * as React from "react";

import { cn } from "@/shared/lib";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
  & { isOpen: boolean }
>(({ className, isOpen, children, ...props }, ref) => {

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center transition-all p-[2rem] rounded-[1.5rem] bg-regal-blue-opacity",
          "max-tablet:rounded-[1rem] max-tablet:p-[1.146rem]",
          className
        )}
        {...props}
      >
        {children}
        <div className={cn(
          "relative h-[4.5rem] w-[4.5rem] shrink-0 transition-all duration-300 ease-in-out",
          "max-tablet:w-[2.579rem] max-tablet:h-[2.579rem]",
          "max-mobile:w-[2.407rem] max-mobile:h-[2.407rem]",
          isOpen ? "rotate-[360deg]" : "rotate-0"
        )}>
          <TiMinus
            className={cn(
              "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full transition-all duration-300 ease-in-out",
              isOpen ? "opacity-1" : "opacity-0"
            )}
          />
          <TiPlus className={cn(
            "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full transition-all duration-300 ease-in-out",
            isOpen ? "opacity-0" : "opacity-1"
          )}
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
