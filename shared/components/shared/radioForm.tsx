"use client";

import { cn } from "@/shared/lib";
import { InputFormType } from "@/shared/types";
import { RadioGroup, RadioGroupItem, Label } from "@/shared/components";

export const RadioForm = ({ name, title, options = [], id, register }: InputFormType) => {

    return (
        <>
            <Label
                htmlFor={`option-${id}-0`}
                className={cn(
                    "text-[2.2rem] font-kyiv_titling my-[1rem]",
                    "max-tablet:text-[2.5rem]",
                    "max-mobile:text-[1.4rem] max-mobile:mt-0 max-mobile:mb-[1.9rem]"
                )}
            >
                {title}
            </Label>
            <RadioGroup
                className={cn(
                    "flex flex-col gap-y-[2rem]",
                    "max-mobile:gap-y-[1rem]"
                )}
            >
                {options.map((option, idx) => (
                    <div key={idx} className="flex items-center gap-x-[1rem]">
                        <RadioGroupItem
                            id={`option-${id}-${idx}`}
                            value={option.name}
                            {...register(name)}
                        />
                        <Label
                            htmlFor={`option-${id}-${idx}`}
                            className={cn(
                                "text-[1.8rem] font-kyiv_titling",
                                "max-tablet:text-[2rem]",
                                "max-mobile:text-[1.4rem]"
                            )}
                        >
                            {option.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </>

    )
}