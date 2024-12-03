"use client";

import { cn } from "@/shared/lib";
import { InputFormType } from "@/shared/types";
import { RadioGroup, RadioGroupItem, Label } from "@/shared/components";

export const RadioForm = ({ name, title, options = [], id, register }: InputFormType) => {

    return (
        <>
            <Label
                htmlFor={`option-${id}-0`}
                className="text-[2.2rem] font-kyiv_titling my-[1rem]"
            >
                {title}
            </Label>
            <RadioGroup
                className="flex flex-col gap-y-[2rem]"
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
                            className="text-[1.8rem] font-kyiv_titling"
                        >
                            {option.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </>

    )
}