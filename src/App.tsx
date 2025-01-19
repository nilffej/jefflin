import styled, { ThemeProvider } from 'styled-components';

import ExperienceSection from './components/ExperienceSection/ExperienceSection';
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
                <ExperienceSection />
            </Container>
        </ThemeProvider>
    );
};

export default App;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4.625rem;

    @media only screen and (max-width: 600px), screen and (max-height: 480px) {
        margin-left: 0rem;
    }
`;
