import styled from 'styled-components';

import { IconTitle } from '../../common/icons';
import Icon from '../Icon/Icon';

interface NavBarIconProps {
    selected: boolean;
    icon: IconTitle;
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ selected, icon }) => {
    return (
        <SectionIconWrapper selected={selected}>
            <Icon icon={icon} size="base" />
        </SectionIconWrapper>
    );
};

export default NavBarIcon;

const SectionIconWrapper = styled.div<{ selected: boolean }>`
    height: ${({ theme }) => theme.px.large};
    width: ${({ theme }) => theme.px.large};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ selected }) => selected && '#000000'};

    svg path {
        fill: ${({ selected }) => selected && '#FFFFFF'};
    }
`;
