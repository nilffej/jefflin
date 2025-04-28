import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { ExperienceData } from '../../data/experience';
import Icon from '../Icon/Icon';
import ExperienceDescription from './ExperienceDescription';

interface ExpandableExperienceItemProps {
    experience: ExperienceData;
    activeItem: number | null;
    index: number;
    setActiveItem: (id: number | null) => void;
    getDistanceToContainterTop: () => number;
    scrollToTopOfSection: () => void;
}

const ExpandableExperienceItem: React.FC<ExpandableExperienceItemProps> = ({
    experience,
    activeItem,
    index,
    setActiveItem,
    getDistanceToContainterTop,
    scrollToTopOfSection
}) => {
    const { id, company, title, startDate, endDate, descriptions, skills } = experience;
    const shouldMoveOffscreen = activeItem !== null && activeItem !== id;

    const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [distanceToColumnTop, setDistanceToColumnTop] = useState<number>(0);
    const [activated, setActivated] = useState<boolean>(false);

    const isActive = activeItem === id;

    useEffect(() => {
        if (activated && containerRef.current) {
            scrollToTopOfSection();
        }
    }, [isActive, activated]);

    useEffect(() => {
        if (isActive) {
            const { top } = containerRef.current!.getBoundingClientRect();
            setDistanceToColumnTop(top - getDistanceToContainterTop());
        }

        const timeout = setTimeout(() => setActivated(isActive), 75 * index + 200);
        return () => clearTimeout(timeout);
    }, [activeItem]);

    const handleClick = () => {
        if (activeItem) {
            setActiveItem(null);
        } else {
            setActiveItem(id);
        }
    };

    return (
        <HoverableContainer
            ref={containerRef}
            $index={index}
            $distanceToColumnTop={distanceToColumnTop}
            $active={isActive}
            $activated={activated}>
            <Container
                onClick={handleClick}
                $shouldMoveOffscreen={shouldMoveOffscreen}
                $active={isActive}
                $activated={activated}
                $activeIndex={(activeItem ?? 0) + 1}>
                <ChevronIcon icon="chevron" size="base" $active={isActive} $index={index} />
                <TextSection>
                    <CompanyText>{company}</CompanyText>
                    <RoleText>
                        {title} {`(${startDate} - ${endDate})`}
                    </RoleText>
                </TextSection>
            </Container>
            <div style={{ position: 'relative' }}>
                <ExperienceDescription
                    isActive={isActive}
                    activated={activated}
                    company={company}
                    descriptions={descriptions}
                    skills={skills}
                />
            </div>
        </HoverableContainer>
    );
};

export default ExpandableExperienceItem;

const animation = ($distanceToColumnTop: number) => {
    return keyframes`
    from { 
        transform: translateY(-${$distanceToColumnTop}px);
    } to {
        transform: translateY(0px);
    }
`;
};

const HoverableContainer = styled.div<{
    $index: number;
    $distanceToColumnTop: number;
    $active: boolean;
    $activated: boolean;
}>`
    cursor: pointer;
    display: flex;
    flex-direction: column;

    transition: transform 150ms;

    ${({ $active, $distanceToColumnTop, $index, $activated }) =>
        $active
            ? $activated
                ? // Item is activated and expanded
                  css`
                      order: -1;
                      transition: unset;
                  `
                : // Item was just clicked and is animating to top of the list
                  css`
                      transition: transform calc(${75 * $index}ms + 100ms) 100ms;
                      transform: translateY(-${$distanceToColumnTop}px);
                  `
            : // Item has been deactivated and is animating back to place in list
              css`
                  animation-fill-mode: backwards;
                  animation-name: ${animation($distanceToColumnTop)};
                  animation-duration: calc(${75 * $index}ms + 100ms);
                  animation-delay: 200ms;
              `}
`;

const Container = styled.div<{
    $shouldMoveOffscreen: boolean;
    $active: boolean;
    $activated: boolean;
    $activeIndex: number;
}>`
    position: relative;
    z-index: 0;
    width: fit-content;

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.px.large};

    left: ${({ $shouldMoveOffscreen }) => ($shouldMoveOffscreen ? '-40rem' : '0')};
    opacity: ${({ $shouldMoveOffscreen }) => ($shouldMoveOffscreen ? '0%' : '100%')};

    transition: transform 150ms;

    ${({ $shouldMoveOffscreen, $active, $activeIndex }) => css`
        transition:
            transform 150ms,
            left 500ms ${!$active && !$shouldMoveOffscreen && `calc(${75 * $activeIndex}ms + 300ms)`},
            opacity 200ms ${!$active && !$shouldMoveOffscreen && `calc(${75 * $activeIndex}ms + 300ms)`};
    `}

    &:hover {
        transform: ${({ theme, $active, $activated }) => !($active || $activated) && `translateX(${theme.px.xsmall})`};
    }
`;

const ChevronIcon = styled(Icon)<{ $active: boolean; $index: number }>`
    transition: transform 500ms;
    transform: ${({ $active }) => $active && 'rotate(90deg)'};
`;

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const CompanyText = styled.div`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.medium};
`;

const RoleText = styled.div`
    font-size: ${({ theme }) => theme.fontSize.base};
`;
