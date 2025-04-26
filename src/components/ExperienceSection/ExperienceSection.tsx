import { RefObject, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { EXPERIENCE_SECTION } from '../../common/sections';
import { Text } from '../../common/styled';
import { experience } from '../../data/experience';
import ExpandableExperienceItem from './ExpandableExperienceItem';

const ExperienceSection: React.FC = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const columnContainerRef = useRef() as RefObject<HTMLDivElement>;
    const containerRef = useRef() as RefObject<HTMLDivElement>;

    const getDistanceToContainterTop = useCallback(() => {
        return columnContainerRef.current!.getBoundingClientRect().top;
    }, []);

    const scrollToTopOfSection = useCallback(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <Container ref={containerRef}>
            {/* <HeaderContainer>
                <HeaderRow>
                    {activeItem && <BackButton onClick={() => setActiveItem(null)}>back</BackButton>}
                    <Header>my journey</Header>
                </HeaderRow>
                <Separator />
            </HeaderContainer> */}
            <Body id={EXPERIENCE_SECTION}>
                <PositionedContainer ref={columnContainerRef}>
                    {experience.map((item, index) => (
                        <ExpandableExperienceItem
                            key={`experience-item-${item.id}`}
                            experience={item}
                            activeItem={activeItem}
                            index={index}
                            setActiveItem={setActiveItem}
                            getDistanceToContainterTop={getDistanceToContainterTop}
                            scrollToTopOfSection={scrollToTopOfSection}
                        />
                    ))}
                </PositionedContainer>
            </Body>
        </Container>
    );
};

export default ExperienceSection;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 70%;

    @media only screen and (max-width: 768px) {
        max-width: 85%;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const HeaderRow = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: ${({ theme }) => theme.px.medium} 0;
`;

const Header = styled(Text)`
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 200;
    font-style: italic;
`;

const BackButton = styled(Text)`
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 500;
    justify-self: flex-start;
    left: 0;
`;

const Separator = styled.div`
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const Body = styled.div`
    position: relative;
    min-height: 100vh;
    max-width: 80em;
    width: 100%;
    padding: ${({ theme }) => theme.px.base} ${({ theme }) => theme.px.large};

    @media only screen and (max-width: 768px) {
        padding: ${({ theme }) => theme.px.small} ${({ theme }) => theme.px.small};
    }
`;

const PositionedContainer = styled.div`
    margin-top: ${({ theme }) => theme.px.large};

    position: relative;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.px.large};
`;
