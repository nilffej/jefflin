import styled, { ThemeProvider } from 'styled-components';

import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import LandingSection from './components/LandingSection/LandingSection';
import NavigationBar from './components/NavigationBar/NavigationBar';
import theme from './theme/theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <SnapScrollContainer>
                <NavigationBar />
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

    scroll-timeline: --page-scroll y;
`;
