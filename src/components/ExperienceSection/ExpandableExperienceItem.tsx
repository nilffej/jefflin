import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Text } from '../../common/styled';
import { ExperienceData } from '../../data/experience';
import Icon from '../Icon/Icon';

interface ExpandableExperienceItemProps {
    experience: ExperienceData;
    activeItem: number | null;
    index: number;
    setActiveItem: (id: number) => void;
    getDistanceToContainterTop: () => number;
}

const ExpandableExperienceItem: React.FC<ExpandableExperienceItemProps> = ({
    experience,
    activeItem,
    index,
    setActiveItem,
    getDistanceToContainterTop
}) => {
    const { id, company, title, startDate, endDate, descriptions, skills } = experience;
    const shouldMoveOffscreen = activeItem !== null && activeItem !== id;

    const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [distanceToColumnTop, setDistanceToColumnTop] = useState<number>(0);
    const [activated, setActivated] = useState<boolean>(false);

    const isActive = activeItem === id;

    useEffect(() => {
        if (isActive) {
            const { top } = containerRef.current!.getBoundingClientRect();
            setDistanceToColumnTop(top - getDistanceToContainterTop());
        }

        const timeout = setTimeout(() => setActivated(isActive), 75 * index + 200);
        return () => clearTimeout(timeout);
    }, [activeItem]);

    const handleClick = () => {
        setActiveItem(id);
    };

    return (
        <HoverableContainer
            ref={containerRef}
            $active={isActive}
            $index={index}
            $distanceToColumnTop={distanceToColumnTop}
            $activated={activated}>
            <Container onClick={handleClick} $shouldMoveOffscreen={shouldMoveOffscreen} $active={isActive}>
                <ChevronIcon icon="chevron" size="base" $active={isActive} $index={index} />
                <TextSection>
                    <CompanyText>{company}</CompanyText>
                    <RoleText>
                        {title} {`(${startDate} - ${endDate})`}
                    </RoleText>
                </TextSection>
            </Container>
            {isActive && activated && (
                <Body>
                    {descriptions.map((text) => (
                        <Text>{text}</Text>
                    ))}
                </Body>
            )}
        </HoverableContainer>
    );
};

export default ExpandableExperienceItem;

const animation = ($distanceToColumnTop: number) => keyframes`
    from { 
        transform: translateY(-${$distanceToColumnTop}px);
    } to {
        transform: translateY(0px);
    }
`;

const HoverableContainer = styled.div<{
    $active: boolean;
    $index: number;
    $distanceToColumnTop: number;
    $activated: boolean;
}>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.px.medium};

    transition: transform 100ms;

    ${({ $active, $distanceToColumnTop, $index, $activated }) =>
        $active
            ? $activated
                ? css`
                      order: -1;
                      transition: unset;
                  `
                : css`
                      transition: transform calc(${75 * $index}ms + 100ms) 100ms;
                      transform: translateY(-${$distanceToColumnTop}px);
                  `
            : css`
                  animation-name: ${animation($distanceToColumnTop)};
                  animation-duration: calc(${75 * $index}ms + 100ms);
              `}

    &:hover {
        transform: ${({ theme, $active }) => !$active && `translateX(${theme.px.xsmall})`};
    }
`;

const Container = styled.div<{
    $shouldMoveOffscreen: boolean;
    $active: boolean;
}>`
    position: relative;
    z-index: 0;
    width: fit-content;

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.px.large};

    left: ${({ $shouldMoveOffscreen }) => ($shouldMoveOffscreen ? '-40rem' : '0')};
    opacity: ${({ $shouldMoveOffscreen }) => ($shouldMoveOffscreen ? '0%' : '100%')};

    ${({ $shouldMoveOffscreen, $active }) => css`
        transition:
            left 500ms ${!$active && !$shouldMoveOffscreen && '100ms'},
            opacity 200ms ${!$active && !$shouldMoveOffscreen && '100ms'};
    `}
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

const fadeIn = keyframes`
    from { 
        opacity: 0%;
    } to {
        opacity: 100%;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.px.medium};

    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 300;

    padding: 0px ${({ theme }) => theme.px.base};
    ${({ theme }) => css`
        margin-left: calc(${theme.px.base} + ${theme.px.large});
    `};

    animation-name: ${fadeIn};
    animation-duration: 200ms;
`;
