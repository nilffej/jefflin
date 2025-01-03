import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;

        @media only screen and (max-width: 768px) {
            font-size: 12px;
        }
    }

    body {
        background: #FAF9F6;
    }
`;

export default GlobalStyle;
