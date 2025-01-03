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

    @media only screen and (min-width: 480px) {
        margin-left: 4.625rem;
    }
`;
