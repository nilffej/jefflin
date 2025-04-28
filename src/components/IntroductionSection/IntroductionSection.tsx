import { MutableRefObject, useRef } from 'react';
import styled from 'styled-components';

import { animateInMixin } from '../../common/styled';
import { useAnimateIn } from '../../hooks/useAnimateIn';

const IntroductionSection = () => {
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const shouldAnimateIn = useAnimateIn(containerRef);

    return (
        <SectionContainer ref={containerRef} $shouldAnimateIn={shouldAnimateIn}>
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

const SectionContainer = styled.div<{ $shouldAnimateIn: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;

    ${animateInMixin}
`;

const Container = styled.div`
    padding: 12em 4em 6em;
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
