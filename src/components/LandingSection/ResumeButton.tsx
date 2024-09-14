import styled from 'styled-components';

import { links } from '../../common/links';
import HoverableButton from '../HoverableButton/HoverableButton';
import Icon from '../Icon/Icon';

const ResumeButton: React.FC = () => {
    return (
        <HoverableButton link={links.resume}>
            <Container>
                <Icon icon="document" size="small" />
                <Text>Resume</Text>
            </Container>
        </HoverableButton>
    );
};

export default ResumeButton;

const Container = styled.div`
    height: ${({ theme }) => theme.px.medium};
    padding-left: ${({ theme }) => theme.px.xxsmall};
    border: unset;
    border-radius: ${({ theme }) => theme.px.xxsmall};

    background-color: black;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: white;

    display: flex;
    align-items: center;
`;

const Text = styled.span`
    margin: 0px ${({ theme }) => theme.px.xsmall};

    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
