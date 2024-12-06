"use client";

import { UseFormRegister, RegisterOptions, FieldError, Control } from "react-hook-form";

import { FormType } from "./formType";

type RadioOption = {
    name: string;
    label: string | undefined;
}

export type InputFormType = {
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
    placeholder?: string;
    register?: UseFormRegister<FormType>;
    control?: Control<FormType>;
    name: keyof FormType;
    className?: string;
    options?: RadioOption[];
    title?: string;
    id?: number;
    error?: FieldError;
    validation?: RegisterOptions<FormType, keyof FormType>;
    mask?: string | (string | RegExp)[];
} 