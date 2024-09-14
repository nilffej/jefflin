import React from 'react';
import styled from 'styled-components';

interface HoverableButtonProps {
    children: React.ReactNode;
    link?: string;
}

const HoverableButton: React.FC<HoverableButtonProps> = ({ children, link }) => {
    return <Container href={link}>{children}</Container>;
};

export default HoverableButton;

const Container = styled.a`
    color: unset;
    text-decoration: unset;

    &:hover {
        transition: transform 250ms;
        transform: scale(1.05);
        cursor: pointer;
    }
`;
