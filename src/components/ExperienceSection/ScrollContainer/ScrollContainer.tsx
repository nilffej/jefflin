import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface ScrollShadowContainerProps extends React.PropsWithChildren {
    className?: string;
    height: string;
}

const scrollTimelineSupported = CSS.supports('scroll-timeline: --scroll-effect y');

const ScrollShadowContainer: React.FC<ScrollShadowContainerProps> = ({ children, className, height }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [shouldShowScrollbar, setShouldShowScrollbar] = useState(false);
    const [shouldShowShadows, setShouldShowShadows] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                const { scrollHeight, clientHeight } = contentRef.current;
                const isScrollable = scrollHeight > clientHeight;

                if (scrollTimelineSupported) {
                    setShouldShowShadows(isScrollable);
                } else {
                    setShouldShowScrollbar(isScrollable);
                }
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [children]);

    return (
        <Container className={className} $shouldShowScrollbar={shouldShowScrollbar}>
            <ScrollableContent ref={contentRef} $height={height} onResize={console.log}>
                {shouldShowShadows && <ScrollShadow />}
                {children}
                {shouldShowShadows && <ScrollShadow $bottom />}
            </ScrollableContent>
        </Container>
    );
};

export default ScrollShadowContainer;

const Container = styled.div<{ $shouldShowScrollbar: boolean }>`
    position: relative;

    ${({ $shouldShowScrollbar }) =>
        $shouldShowScrollbar
            ? css`
                  ::-webkit-scrollbar {
                      width: 4px;
                      background: lightgray;
                  }

                  ::-webkit-scrollbar-thumb {
                      background: gray;
                      border-radius: 2px;
                  }
              `
            : css`
                  ::-webkit-scrollbar,
                  ::-webkit-scrollbar-thumb {
                      display: none;
                  }
              `}
`;

const ScrollableContent = styled.div<{ $height: string }>`
    height: ${({ $height }) => $height};
    overflow-y: scroll;
    scroll-timeline: --scroll-effect y;
`;

const opacityAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const ScrollShadow = styled.div<{
    $bottom?: boolean;
}>`
    height: ${({ theme }) => theme.px.base};
    width: 100%;

    ${({ $bottom }) => css`
        background: linear-gradient(
            ${$bottom ? '180deg' : '0deg'},
            rgb(from lightgray r g b / 0%) 0%,
            rgb(from lightgray r g b / 50%) 50%,
            rgb(from lightgray r g b / 100%) 100%
        );
    `};

    position: absolute;
    top: ${({ $bottom }) => !$bottom && '0px'};
    bottom: ${({ $bottom }) => $bottom && '0px'};

    // Scroll shadows ease in as user scrolls from one end until 'shadowWidth' away from end
    animation: ${opacityAnimation} linear both;
    animation-timeline: --scroll-effect;
    animation-range: ${({ theme, $bottom }) =>
        $bottom ? css`calc(100% 100% - ${theme.px.large}) ` : css`0px ${theme.px.large}`};
    animation-direction: ${({ $bottom }) => $bottom && 'reverse'};
`;
