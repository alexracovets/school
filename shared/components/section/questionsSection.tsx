"use client";

import { useEffect, useRef } from "react";

import { Container, Questions, Section, Title } from "@/shared/components";
import Intersection from '@/shared/tools/intersection';
import useNavMenu from '@/store/useNavMenu';

export const QuestionsSection = () => {
    const setActiveLink = useNavMenu(state => state.setActiveLink);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const cleanup = Intersection(sectionRef, setActiveLink, 'questionsLink');

            return () => {
                if (cleanup) cleanup();
            };
        }
    }, [sectionRef, setActiveLink]);

    return (
        <Section
            id="questions"
            ref={sectionRef}
        >
            <Container>
                <Title>
                    Часті питання
                </Title>
                <Questions />
            </Container>
        </Section>
    )
}