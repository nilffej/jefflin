import { useState } from 'react';
import styled from 'styled-components';

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
    width: 4.625rem;

    position: fixed;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    background-color: #faf9f6;
    border-right: 1px solid rgba(0, 0, 0, 0.2);

    @media only screen and (max-width: 600px), screen and (max-height: 480px) {
        display: none;
    }
`;

const IconsColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.px.xlarge};

    position: relative;
`;
