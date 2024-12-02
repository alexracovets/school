"use client";

import { useState } from "react";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/shared/components";
import { QuestionItemType } from "@/shared/types";
import { cn } from "@/shared/lib";

export const QuestionItem = ({ idx, title, content }: QuestionItemType) => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    return (
        <Accordion
            type="single"
            collapsible
            onValueChange={(value) => setOpenItem(value)}
        >
            <AccordionItem value={`item-${idx}`}>
                <AccordionTrigger
                    isOpen={openItem === `item-${idx}`}
                    className={cn(
                        "font-kyiv_titling shadow-accordion",
                        "max-tablet:shadow-accordion-tablet"
                    )}
                >
                    <span
                        className={cn(
                            "text-[5.1rem]",
                            "max-tablet:text-[2.908rem]"
                        )}
                    >
                        {idx + 1 + '.'}
                    </span>
                    <p
                        className={cn(
                            "text-[3rem] pl-[2rem] pr-[.5rem]",
                            "max-tablet:text-[1.7rem] max-tablet:px-[1rem]"
                        )}
                    >
                        {title}
                    </p>
                </AccordionTrigger>
                <AccordionContent className={cn(
                    "p-[1.5rem]",
                    "max-tablet:p-[.5rem]",
                )}>
                    <div
                        className={cn(
                            "font-sawarabi px-[3rem] py-[1.95rem] rounded-[1.5rem] bg-regal-blue-opacity mt-[2rem] shadow-accordion",
                            "max-tablet:px-[1.7rem] max-tablet:py-[1.1rem] max-tablet:shadow-accordion-tablet"
                        )}
                    >
                        {
                            content.map((text, index) => {
                                return (
                                    <p
                                        key={index}
                                        className={cn(
                                            "text-[2.738rem] leading-[1.472]",
                                            "max-tablet:text-[1.569rem]"
                                        )}
                                    >
                                        {text}
                                    </p>
                                )
                            })
                        }
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}