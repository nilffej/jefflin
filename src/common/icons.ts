import { ReactComponent as CodeIcon } from '../icons/code.svg'
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import { ReactComponent as PersonIcon } from '../icons/person.svg';
import { ReactComponent as WorkIcon } from '../icons/work.svg';
import { ReactComponent as LinkedIn } from '../icons/linkedin.svg';
import { ReactComponent as GitHub } from '../icons/github.svg';
import { ReactComponent as Document } from '../icons/document.svg';


export const iconMap = {
    code: CodeIcon,
    home: HomeIcon,
    person: PersonIcon,
    work: WorkIcon,
    linkedin: LinkedIn,
    github: GitHub,
    document: Document
};

export type IconTitle = keyof typeof iconMap;