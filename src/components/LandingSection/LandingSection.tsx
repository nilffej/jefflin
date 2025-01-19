import styled from 'styled-components';

import { HOME_SECTION } from '../../common/sections';
import { SectionContainer, Text } from '../../common/styled';
import { links } from '../../data/links';
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

    @media only screen and (max-height: 600px) {
        padding-left: ${({ theme }) => theme.px.large};
    }
`;

const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const TitleText = styled(Text)`
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    margin-bottom: ${({ theme }) => theme.px.small};
`;

const TitleSubtext = styled(Text)`
    font-size: ${({ theme }) => theme.fontSize.medium};

    margin-bottom: 128px;
`;

const BoldedText = styled(Text)`
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
