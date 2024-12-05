"use client";

import { useEffect, useRef } from "react";

import { Section, Container, Title, Prices, Button } from "@/shared/components";
import Intersection from '@/shared/tools/intersection';
import useFormState from '@/store/useFormState';
import useNavMenu from '@/store/useNavMenu';
import { cn } from "@/shared/lib";

export const PricesSection = () => {
    const setActiveForm = useFormState(state => state.setIsActive);
    const setActiveLink = useNavMenu(state => state.setActiveLink);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const cleanup = Intersection(sectionRef, setActiveLink, 'priceLink');

            return () => {
                if (cleanup) cleanup();
            };
        }
    }, [sectionRef, setActiveLink]);

    return (
        <Section
            id="price"
            ref={sectionRef}
            className="max-mobile:pt-[3.4rem] pb-0 max-tablet:pb-0 max-mobile:pb-0"
        >
            <Container>
                <Title>
                    Ціни
                </Title>
            </Container>
            <Prices />
            <Container>
                <div
                    className="w-full flex justify-center "
                >
                    <Button
                        className={cn(
                            "mt-[10rem] mb-[5rem]",
                            "max-tablet:mt-[3.888rem] max-tablet:mb-[3rem]",
                            "max-mobile:mb-[3.7rem]"
                        )}
                        onClick={() => setActiveForm(true)}
                    >
                        Записатись на безкоштовне заняття
                    </Button>
                </div>
            </Container>
        </Section>
    )
}