import styled from 'styled-components';

import { EXPERIENCE_SECTION } from '../../common/sections';
import { SectionContainer, Text } from '../../common/styled';
import { experience } from '../../data/experience';
import ExpandableExperienceItem from './ExpandableExperienceItem';

const ExperienceSection: React.FC = () => {
    return (
        <SectionContainer id={EXPERIENCE_SECTION}>
            <Container>
                <Header>experience</Header>
                {experience.map((item) => (
                    <ExpandableExperienceItem experience={item} />
                ))}
            </Container>
        </SectionContainer>
    );
};

export default ExperienceSection;

const Container = styled.div`
    padding: ${({ theme }) => theme.px.xxlarge} ${({ theme }) => theme.px.xlarge};

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.px.large};
`;

const Header = styled(Text)`
    font-size: ${({ theme }) => theme.px.medium};
    font-weight: 200;
`;
