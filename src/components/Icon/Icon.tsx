import styled from 'styled-components';

import { IconTitle, iconMap } from '../../common/icons';
import { PixelSize } from '../../theme/styled';

type Size = keyof PixelSize;

interface NavBarIconProps {
    icon: IconTitle;
    size: Size;
}

const Icon: React.FC<NavBarIconProps> = ({ icon, size }) => {
    const IconComponent = iconMap[icon];
    return (
        <IconWrapper size={size}>
            <IconComponent />
        </IconWrapper>
    );
};

export default Icon;

const IconWrapper = styled.div<{ size: Size }>`
    height: ${({ theme, size }) => theme.px[size]};
    width: ${({ theme, size }) => theme.px[size]};

    svg {
        height: ${({ theme, size }) => theme.px[size]};
        width: ${({ theme, size }) => theme.px[size]};
    }
`;
