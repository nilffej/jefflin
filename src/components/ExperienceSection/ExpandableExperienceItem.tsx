import styled from 'styled-components';

import { ExperienceData } from '../../data/experience';
import Icon from '../Icon/Icon';

interface ExpandableExperienceItemProps {
    experience: ExperienceData;
    activeItem: number | null;
    index: number;
    onClick: () => void;
}

const ExpandableExperienceItem: React.FC<ExpandableExperienceItemProps> = ({
    experience,
    activeItem,
    index,
    onClick
}) => {
    const { id, company, title, startDate, endDate, descriptions, skills } = experience;
    const shouldMoveOffscreen = activeItem !== null && activeItem !== id;

    return (
        <HoverableContainer $active={activeItem === id}>
            <Container
                onClick={onClick}
                $shouldMoveOffscreen={shouldMoveOffscreen}
                $active={activeItem === id}
                $index={index}>
                <ChevronIcon icon="chevron" size="base" $active={activeItem === id} />
                <TextSection>
                    <CompanyText>{company}</CompanyText>
                    <TitleText>
                        {title} {`(${startDate} - ${endDate})`}
                    </TitleText>
                </TextSection>
            </Container>
        </HoverableContainer>
    );
};

export default ExpandableExperienceItem;

const HoverableContainer = styled.div<{ $active: boolean }>`
    transition: transform 100ms;

    &:hover {
        transform: translateX(${({ theme, $active }) => !$active && theme.px.xsmall});
    }
`;

const Container = styled.div<{ $shouldMoveOffscreen: boolean; $active: boolean; $index: number }>`
    position: relative;
    z-index: 0;
    width: fit-content;

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.px.medium};

    transition:
        /* top ${({ $index }) => `calc(${$index} * 100ms)`} ${({ $active }) => $active && '100ms'}, */
        left 500ms ${({ $active, $shouldMoveOffscreen }) => !$active && !$shouldMoveOffscreen && '100ms'},
        opacity 200ms ${({ $active, $shouldMoveOffscreen }) => !$active && !$shouldMoveOffscreen && '100ms'};

    left: ${({ $shouldMoveOffscreen }) => ($shouldMoveOffscreen ? '-40rem' : '0')};
    opacity: ${({ $shouldMoveOffscreen }) => ($shouldMoveOffscreen ? '0%' : '100%')};
    /* top: ${({ theme: { fontSize, px }, $active, $index }) =>
        // Calculate distance to top of list
        $active ? `calc((${fontSize.medium} + ${fontSize.base} + ${px.large} + 0.25rem) * -${$index})` : '0'}; */
`;

const ChevronIcon = styled(Icon)<{ $active: boolean }>`
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

const TitleText = styled.div`
    font-size: ${({ theme }) => theme.fontSize.base};
`;
