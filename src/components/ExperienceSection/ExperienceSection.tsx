import { MutableRefObject, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { EXPERIENCE_SECTION } from '../../common/sections';
import { animateInMixin } from '../../common/styled';
import { experience } from '../../data/experience';
import { useAnimateIn } from '../../hooks/useAnimateIn';
import ExpandableExperienceItem from './ExpandableExperienceItem';

const ExperienceSection: React.FC = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const columnContainerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const shouldAnimateIn = useAnimateIn(columnContainerRef);

    const getDistanceToContainterTop = useCallback(() => {
        return columnContainerRef.current!.getBoundingClientRect().top;
    }, []);

    const scrollToTopOfSection = useCallback(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <Container ref={containerRef} $shouldAnimateIn={shouldAnimateIn}>
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

const Container = styled.div<{ $shouldAnimateIn: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 65%;

    @media only screen and (max-width: 80em) {
        max-width: 90%;
    }

    ${animateInMixin}
`;

const Body = styled.div`
    position: relative;
    min-height: 100vh;
    max-width: 80em;
    width: 100%;
`;

const PositionedContainer = styled.div`
    margin-top: ${({ theme }) => theme.px.large};

    position: relative;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.px.large};
`;
