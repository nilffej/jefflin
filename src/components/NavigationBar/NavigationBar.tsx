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
    return (
        <NavBar>
            {sectionsList.map((title, index) => (
                <NavBarIcon key={index} selected={false} icon={sectionIcons[title]} />
            ))}
        </NavBar>
    );
};

export default NavigationBar;

const NavBar = styled.div`
    height: 100vh;
    width: 74px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.px.xlarge};

    position: fixed;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
`;
