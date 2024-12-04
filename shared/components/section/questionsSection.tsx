"use client";

import { Container, Questions, Section, Title } from "@/shared/components";

export const QuestionsSection = () => {
    return (
        <Section id="questions">
            <Container>
                <Title>
                    Часті питання
                </Title>
                <Questions />
            </Container>
        </Section>
    )
}