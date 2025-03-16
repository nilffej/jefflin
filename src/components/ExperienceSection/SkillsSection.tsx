import React from 'react';
import styled from 'styled-components';

import { Skill } from '../../data/experience';
import Icon from '../Icon/Icon';

interface SkillsSectionProps {
    company: string;
    skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ company, skills }) => {
    return (
        <Container>
            <SkillsHeader>Skills</SkillsHeader>
            <SkillsGrid>
                {skills.map((skill, index) => (
                    <SkillItem key={`${company}-skill-${index}`} skill={skill} />
                ))}
            </SkillsGrid>
        </Container>
    );
};

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
        <SkillContainer>
            <Icon icon={skill} size="large" />
            <SkillName>{skill}</SkillName>
        </SkillContainer>
    );
};

export default SkillsSection;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.px.large};
`;

const SkillsHeader = styled.div`
    margin-left: -${({ theme }) => theme.px.base};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.base};
`;

const SkillsGrid = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.px.xxlarge};
    row-gap: ${({ theme }) => theme.px.large};
    flex-wrap: wrap;
`;

const SkillContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.px.small};
`;

const SkillName = styled.div`
    font-size: ${({ theme }) => theme.fontSize.base};
`;
