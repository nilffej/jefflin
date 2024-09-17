import styled from 'styled-components';

import { ExperienceData } from '../../data/experience';
import Icon from '../Icon/Icon';

interface ExpandableExperienceItemProps {
    experience: ExperienceData;
}

const ExpandableExperienceItem: React.FC<ExpandableExperienceItemProps> = ({ experience }) => {
    const { company, title, startDate, endDate, descriptions, skills } = experience;

    return (
        <Container>
            <Icon icon="chevron" size="base" />
            <TextSection>
                <CompanyText>{company}</CompanyText>
                <TitleText>
                    {title} {`(${startDate} - ${endDate})`}
                </TitleText>
            </TextSection>
        </Container>
    );
};

export default ExpandableExperienceItem;

const Container = styled.div`
    width: fit-content;

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.px.medium};

    transition: transform 250ms;

    &:hover {
        cursor: pointer;
        transform: translateX(${({ theme }) => theme.px.xsmall});
    }
`;

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const CompanyText = styled.div`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.medium};
`;

const TitleText = styled.div`
    font-size: ${({ theme }) => theme.fontSize.base};
`;
