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
                    className="font-kyiv_titling shadow-accordion"
                >
                    <span
                        className={cn(
                            "text-[5.1rem]"
                        )}
                    >
                        {idx + 1 + '.'}
                    </span>
                    <p
                        className={cn(
                            'text-[3rem] pl-[2rem] pr-[.5rem]'
                        )}
                    >
                        {title}
                    </p>
                </AccordionTrigger>
                <AccordionContent className="p-[1.5rem]">
                    <div
                        className="font-sawarabi px-[3rem] py-[1.95rem] rounded-[1.5rem] bg-regal-blue-opacity mt-[3.5rem] shadow-accordion"
                    >
                        {
                            content.map((text, index) => {
                                return (
                                    <p
                                        key={index}
                                        className="text-[2.738rem] leading-[1.472]"
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