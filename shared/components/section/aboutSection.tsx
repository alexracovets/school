"use client";

import { AboutSlider, Container, Title, Separator, Section } from "@/shared/components";
import Intersection from '@/shared/tools/intersection';
import useNavMenu from '@/store/useNavMenu';
import { useEffect, useRef } from "react";

export const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const setActiveLink = useNavMenu(state => state.setActiveLink);

    useEffect(() => {
        if (sectionRef.current) {
            const cleanup = Intersection(sectionRef, setActiveLink, 'aboutLink');

            return () => {
                if (cleanup) cleanup();
            };
        }
    }, [sectionRef, setActiveLink]);

    return (
        <Section ref={sectionRef} id="about">
            <Container>
                <Title className="transition ease-in-out duration-300">
                    Хто ми?
                </Title>
            </Container >
            <Separator />
            <Container>
                <AboutSlider />
            </Container>
            <Separator />
        </Section>
    )
}