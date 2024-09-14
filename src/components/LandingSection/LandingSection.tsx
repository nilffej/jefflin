import styled from 'styled-components';

import { links } from '../../common/links';
import { HOME_SECTION } from '../../common/sections';
import { SectionContainer } from '../../common/styled';
import JeffPhoto from '../../images/Jeff - BW.jpg';
import HoverableButton from '../HoverableButton/HoverableButton';
import Icon from '../Icon/Icon';
import ResumeButton from './ResumeButton';

const LandingSection: React.FC = () => {
    return (
        <SectionContainer id={HOME_SECTION}>
            <Row>
                <LeftPanel>
                    <TitleText>jeff lin</TitleText>
                    <TitleSubtext>
                        software engineer
                        <br />
                        at <BoldedText>Here™</BoldedText>
                    </TitleSubtext>
                    <IconRow>
                        <ResumeButton />
                        <HoverableButton link={links.linkedin}>
                            <Icon icon="linkedin" size="medium" />
                        </HoverableButton>
                        <HoverableButton link={links.github}>
                            <Icon icon="github" size="medium" />
                        </HoverableButton>
                    </IconRow>
                </LeftPanel>
                <RightPanel>
                    <Image src={JeffPhoto} />
                </RightPanel>
            </Row>
        </SectionContainer>
    );
};

export default LandingSection;

const Row = styled.div`
    display: flex;
    height: 100%;
`;

const LeftPanel = styled.div`
    min-width: 50vmax;
    padding-left: ${({ theme }) => theme.px.xlarge};

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;

    box-shadow: 16px 0px 24px rgba(0, 0, 0, 0.75);
    clip-path: inset(0px -100% 0px 0px);
`;

const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleText = styled.span`
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    margin-bottom: ${({ theme }) => theme.px.small};
`;

const TitleSubtext = styled.span`
    font-size: ${({ theme }) => theme.fontSize.medium};

    margin-bottom: 128px;
`;

const BoldedText = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const IconRow = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.px.xsmall};
`;

const Image = styled.img`
    height: 100%;
    max-width: 100%;

    opacity: 80%;
    object-fit: cover;
`;
