"use client";

import { Container, Title, Section, Vectors, Button } from "@/shared/components";
import useFormState from '@/store/useFormState';
import { cn } from "@/shared/lib";

export const VectorSection = () => {
    const setActiveForm = useFormState(state => state.setIsActive);

    return (
        <Section>
            <Container>
                <Title>
                    Напрямки навчання
                </Title>
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