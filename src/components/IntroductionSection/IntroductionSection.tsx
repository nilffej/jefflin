import styled from 'styled-components';

const IntroductionSection = () => {
    return (
        <SectionContainer>
            <Container>
                <ItalicBold>Hello!</ItalicBold>
                <Text>
                    I'm a software engineer with <Semibold>two years</Semibold> of experience in{' '}
                    <Semibold>full stack development</Semibold> based in <Semibold>New York City</Semibold>.
                </Text>

                <Text>I love building beautiful products and wonderful user experiences with web technologies.</Text>

                <Text>Here's my journey...</Text>
            </Container>
        </SectionContainer>
    );
};

export default IntroductionSection;

const SectionContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Container = styled.div`
    padding: 14em 5em 14em;
    max-width: max(50vw, 64em);

    display: flex;
    flex-direction: column;

    gap: ${({ theme }) => theme.px.large};
`;

const Text = styled.span`
    font-weight: 200;
    font-size: ${({ theme }) => theme.fontSize.medium};
`;

const ItalicBold = styled(Text)`
    font-style: italic;
    font-weight: 600;
`;

const Semibold = styled(Text)`
    font-weight: 500;
`;
