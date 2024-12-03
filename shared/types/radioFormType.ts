"use client";

import { FormType } from "./formType";

export type RadioFormType = {
    title: string;
    name: keyof FormType;
    values: Array<{ name: string; label: string }>;
}