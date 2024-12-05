"use client";

import { useEffect, useRef } from "react";

import { Container, Feedback, Section, Title } from "@/shared/components";
import Intersection from '@/shared/tools/intersection';
import useNavMenu from '@/store/useNavMenu';

export const FeedbackSection = () => {
    const setActiveLink = useNavMenu(state => state.setActiveLink);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            const cleanup = Intersection(sectionRef, setActiveLink, 'feedBackLink');

            return () => {
                if (cleanup) cleanup();
            };
        }
    }, [sectionRef, setActiveLink]);

    return (
        <Section
            id="feed_back"
            ref={sectionRef}
        >
            <Container>
                <Title>
                    Відгуки
                </Title>
                <Feedback />
            </Container>
        </Section>
    )
}