import { DefaultTheme } from "styled-components";
import { PixelSize } from "./styled";

const theme: DefaultTheme = {
    px: {
        xxsmall: '8px',
        xsmall: '12px',
        small: '16px',
        base: '24px',
        medium: '32px',
        large: '42px',
        xlarge: '80px',
        xxlarge: '96px'
    } as PixelSize,
    fontSize: {
        small: '18px',
        base: '24px',
        medium: '36px',
        large: '84px',
    },
    fontWeight: {
        medium: 500,
        semibold: 600,
    }
};

export default theme;