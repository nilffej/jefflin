import styled, { ThemeProvider } from 'styled-components';

import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import LandingSection from './components/LandingSection/LandingSection';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { theme } from './theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationBar />
            <SnapScrollContainer>
                <LandingSection />
                <ExperienceSection />
            </SnapScrollContainer>
        </ThemeProvider>
    );
};

export default App;

const SnapScrollContainer = styled.div`
    max-height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
`;
