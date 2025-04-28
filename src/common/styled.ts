import styled, { css } from "styled-components";

export const Text = styled.span`
    cursor: default;
`

export const animateInMixin = css<{ $shouldAnimateIn: boolean }>`
    opacity: 0;
    transform: translateY(${({ theme }) => theme.px.base});
    transition:
        opacity 1000ms,
        transform 1000ms;

    ${({ $shouldAnimateIn }) =>
        $shouldAnimateIn &&
        css`
            opacity: 1;
            transform: translateY(0px);
        `};`