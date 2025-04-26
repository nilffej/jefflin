import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Text } from '../../common/styled';
import { Skill } from '../../data/experience';
import SkillsSection from './SkillsSection';

interface ExperienceDescriptionProps {
    isActive: boolean;
    activated: boolean;
    company: string;
    descriptions: string[];
    skills: Skill[];
}

const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({
    isActive,
    activated,
    company,
    descriptions,
    skills
}) => {
    return (
        <Container $active={isActive} $activated={activated}>
            <Body>
                <DescriptionSection>
                    {descriptions.map((text, index) => (
                        <Text key={`${company}-desc-${index}`}>{text}</Text>
                    ))}
                </DescriptionSection>
                <SkillsSection company={company} skills={skills} />
            </Body>
        </Container>
    );
};

export default ExperienceDescription;

const Container = styled.div<{ $active: boolean; $activated: boolean }>`
    position: absolute;
    margin-top: ${({ theme }) => theme.px.base};

    ${({ $active, $activated }) =>
        $active && $activated
            ? css`
                  animation: ${fadeIn} 200ms;
              `
            : $activated
              ? css`
                    animation: ${fadeOut} 200ms;
                    animation-fill-mode: forwards;
                `
              : css`
                    display: none;
                `};
`;

const fadeIn = keyframes`
    from { 
        opacity: 0%;
    } to {
        opacity: 100%;
    }
`;

const fadeOut = keyframes`
    from { 
        opacity: 100%;
    } to {
        opacity: 0%;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.px.xlarge};

    margin-left: ${({ theme }) => theme.px.large};
    margin-bottom: ${({ theme }) => theme.px.xlarge};
    padding: ${({ theme }) => theme.px.xsmall} ${({ theme }) => theme.px.base};
`;

const DescriptionSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.px.medium};

    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 300;
`;
