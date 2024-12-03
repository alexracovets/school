"use client";

import { UseFormRegister } from "react-hook-form";
import { FormType } from "./formType";

type RadioOption = {
    name: string;
    label: string;
}

export type InputFormType = {
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
    placeholder?: string;
    register: UseFormRegister<FormType>;
    name: keyof FormType;
    className?: string;
    options?: RadioOption[];
    title?: string;
    id?: number;
} 