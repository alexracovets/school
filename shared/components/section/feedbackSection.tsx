"use client";

import { Container, Feedback, Section, Title } from "@/shared/components";

export const FeedbackSection = () => {
    return (
        <Section id="feed_back">
            <Container>
                <Title>
                    Відгуки
                </Title>
                <Feedback />
            </Container>
        </Section>
    )
}