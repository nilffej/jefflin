import { ReactComponent as CodeIcon } from '../icons/code.svg'
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import { ReactComponent as PersonIcon } from '../icons/person.svg';
import { ReactComponent as WorkIcon } from '../icons/work.svg';

export const iconMap = {
    code: CodeIcon,
    home: HomeIcon,
    person: PersonIcon,
    work: WorkIcon
};

export type IconTitle = keyof typeof iconMap;