import { RefObject, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { EXPERIENCE_SECTION } from '../../common/sections';
import { SectionContainer, Text } from '../../common/styled';
import { experience } from '../../data/experience';
import ExpandableExperienceItem from './ExpandableExperienceItem';

const ExperienceSection: React.FC = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const columnContainerRef = useRef() as RefObject<HTMLDivElement>;

    const getDistanceToContainterTop = useCallback(() => {
        return columnContainerRef.current!.getBoundingClientRect().top;
    }, []);

    return (
        <SectionContainer id={EXPERIENCE_SECTION}>
            <Container>
                {activeItem ? <Header onClick={() => setActiveItem(null)}>back</Header> : <Header>experience</Header>}
                <PositionedContainer ref={columnContainerRef}>
                    {experience.map((item, index) => (
                        <ExpandableExperienceItem
                            key={`experience-item-${item.id}`}
                            experience={item}
                            activeItem={activeItem}
                            index={index}
                            setActiveItem={setActiveItem}
                            getDistanceToContainterTop={getDistanceToContainterTop}
                        />
                    ))}
                </PositionedContainer>
            </Container>
        </SectionContainer>
    );
};

export default ExperienceSection;

const Container = styled.div`
    padding: ${({ theme }) => theme.px.xxlarge} ${({ theme }) => theme.px.xlarge};

    @media only screen and (max-width: 600px) {
        padding: ${({ theme }) => theme.px.xlarge} ${({ theme }) => theme.px.large};
    }
`;

const PositionedContainer = styled.div`
    margin-top: ${({ theme }) => theme.px.large};

    position: relative;

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.px.large};
`;

const Header = styled(Text)`
    font-size: ${({ theme }) => theme.px.medium};
    font-weight: 200;
`;
