import styled, { ThemeProvider } from 'styled-components';

import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import IntroductionSection from './components/IntroductionSection/IntroductionSection';
import LandingSection from './components/LandingSection/LandingSection';
import NavigationBar from './components/NavigationBar/NavigationBar';
import GlobalStyle from './theme/globalStyles';
import theme from './theme/theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NavigationBar />
            <Container>
                <LandingSection />
                <IntroductionSection />
                <Separator />
                <ExperienceSection />
            </Container>
        </ThemeProvider>
    );
};

export default App;

const Container = styled.div`
    margin-left: 4.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 600px), screen and (max-height: 480px) {
        margin-left: 0rem;
    }
`;

const Separator = styled.div`
    margin: 6em 0em;
    width: 16em;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
