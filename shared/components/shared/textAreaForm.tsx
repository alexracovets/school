"use client";

import { cn } from "@/shared/lib";
import { InputFormType } from "@/shared/types";

export const TextAreaForm = ({ placeholder, name, register, className }: InputFormType) => {
    return (
        <textarea
            placeholder={placeholder}
            {...register(name)}
            className={cn(
                "text-[1.5rem] px-[1.6rem] py-[1rem] rounded-[.5rem] w-full max-h-[10rem]",
                className
            )}
        />
    )
}