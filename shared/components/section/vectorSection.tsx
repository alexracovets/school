"use client";

import { Container, Title, Section, Vectors, Button } from "@/shared/components";
import { cn } from "@/shared/lib";

export const VectorSection = () => {
    return (
        <Section>
            <Container>
                <Title>
                    Напрямки навчання
                </Title>
                <Vectors />
                <div className={cn(
                    "flex justify-center w-full mt-[9.6rem]",
                    "max-tablet:mt-[4.3rem]"
                )}>
                    <Button>
                        Записатись на безкоштовне заняття
                    </Button>
                </div> 
            </Container >
        </Section>
    )
}