import { DefaultTheme } from "styled-components";
import { PixelSize } from "./styled";

const theme: DefaultTheme = {
    px: {
        xxsmall: '0.5rem',
        xsmall: '0.75rem',
        small: '1rem',
        base: '1.5rem',
        medium: '2rem',
        large: '2.625rem',
        xlarge: '5rem',
        xxlarge: '6rem'
    } as PixelSize,
    fontSize: {
        small: '1.125rem',
        base: '1.5rem',
        medium: '2.25rem',
        large: '5.25rem',
    },
    fontWeight: {
        light: 200,
        medium: 500,
        semibold: 600,
    }
};

export default theme;