import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { IconTitle } from '../../common/icons';
import { ABOUT_SECTION, EXPERIENCE_SECTION, HOME_SECTION, SKILLS_SECTION, sectionsList } from '../../common/sections';
import NavBarIcon from './NavBarIcon';

const sectionIcons: { [section: string]: IconTitle } = {
    [HOME_SECTION]: 'home',
    [ABOUT_SECTION]: 'person',
    [EXPERIENCE_SECTION]: 'work',
    [SKILLS_SECTION]: 'code'
};

const NavigationBar: React.FC = () => {
    const [selectedSection, setSelectedSection] = useState<(typeof sectionsList)[number]>('home-section');

    return (
        <NavBar>
            <IconsColumn>
                <ScrollTracker />
                {sectionsList.map((title, index) => (
                    <NavBarIcon key={index} selected={selectedSection === title} icon={sectionIcons[title]} />
                ))}
            </IconsColumn>
        </NavBar>
    );
};

export default NavigationBar;

const NavBar = styled.div`
    height: 100vh;
    width: 74px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 1;
    background-color: white;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
`;

const IconsColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.px.xlarge};

    position: relative;
`;

const scrollAnimation = keyframes`
    0% { top: 0%; }
    100% { top: calc(100% - 42px); }
`;

const ScrollTracker = styled.div`
    height: ${({ theme }) => theme.px.large};
    width: ${({ theme }) => theme.px.large};
    border-radius: 50%;

    position: absolute;
    top: 0;
    background-color: red;

    animation: ${scrollAnimation} linear;
    animation-timeline: --page-scroll;
`;
