"use client";

import { Container, Title, Section, Vectors, Button, VectorsStar } from "@/shared/components";
import useFormState from '@/store/useFormState';
import { cn } from "@/shared/lib";

export const VectorSection = () => {
    const setActiveForm = useFormState(state => state.setIsActive);

    return (
        <Section>
            <Container>
                <Title
                    className="mb-[17.4rem] max-tablet:mb-[7.6rem]  "
                >
                    <span
                        className={cn(
                            "relative",
                            "before:content-[''] before:absolute before:z-[-1] before:left-0 before:bottom-[-.2rem] before:w-[27.053rem] before:h-[4.329rem] before:rounded-[50%] before:bg-[#2480C391]",
                            "max-tablet:before:w-[17.5rem] max-tablet:before:h-[2.8rem] max-tablet:before:left-[-3.4rem] max-tablet:before:bottom-[-.9rem] max-tablet:before:bg-[#2480C357]",
                            "max-mobile:before:w-[11.6rem] max-mobile:before:h-[2.4rem] max-mobile:before:left-[.2rem] max-mobile:before:bottom-[-1.05rem]"
                        )}
                    >Напрямки</span> навчання
                </Title>
                <VectorsStar />
                <Vectors />
                <div className={cn(
                    "flex justify-center w-full mt-[9.6rem]",
                    "max-tablet:mt-[4.3rem]",
                    "max-mobile:mt-[3.7rem]"
                )}>
                    <Button onClick={() => setActiveForm(true)}>
                        Записатись на безкоштовне заняття
                    </Button>
                </div>
            </Container >
        </Section>
    )
}