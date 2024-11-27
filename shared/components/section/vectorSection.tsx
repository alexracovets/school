import { Container, Title, Section, Vectors, Button } from "@/shared/components";

export const VectorSection = () => {
    return (
        <Section>
            <Container>
                <Title>
                    Напрямки навчання
                </Title>
                <Vectors />
                <div className="flex justify-center w-full mt-[9.6rem]">
                    <Button>
                        Записатись на безкоштовне заняття
                    </Button>
                </div> 
            </Container >
        </Section>
    )
}