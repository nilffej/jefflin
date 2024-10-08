import 'styled-components';

export interface PixelSize {
    xxsmall: string;
    xsmall: string;
    small: string;
    base: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        px: PixelSize,
        fontSize: {
            small: string;
            base: string;
            medium: string;
            large: string;
        },
        fontWeight: {
            light: number,
            medium: number,
            semibold: number
        }
    }
}