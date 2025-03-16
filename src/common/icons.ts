import { ReactComponent as BootstrapIcon } from '../icons/bootstrap.svg';
import { ReactComponent as Chevron } from '../icons/chevron.svg';
import { ReactComponent as CodeIcon } from '../icons/code.svg';
import { ReactComponent as D3Icon } from '../icons/d3.svg';
import { ReactComponent as DartIcon } from '../icons/dart.svg';
import { ReactComponent as Document } from '../icons/document.svg';
import { ReactComponent as ExpressIcon } from '../icons/express.svg';
import { ReactComponent as FirebaseIcon } from '../icons/firebase.svg';
import { ReactComponent as FlutterIcon } from '../icons/flutter.svg';
import { ReactComponent as GitHub } from '../icons/github.svg';
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import { ReactComponent as JavaIcon } from '../icons/java.svg';
import { ReactComponent as JavascriptIcon } from '../icons/javascript.svg';
import { ReactComponent as LinkedIn } from '../icons/linkedin.svg';
import { ReactComponent as MongoDBIcon } from '../icons/mongodb.svg';
import { ReactComponent as NextJSIcon } from '../icons/nextjs.svg';
import { ReactComponent as NoSQLIcon } from '../icons/nosql.svg';
import { ReactComponent as PersonIcon } from '../icons/person.svg';
import { ReactComponent as PostgreSQLIcon } from '../icons/postgresql.svg';
import { ReactComponent as ReactIcon } from '../icons/react.svg';
import { ReactComponent as ReduxIcon } from '../icons/redux.svg';
import { ReactComponent as SQLIcon } from '../icons/sql.svg';
import { ReactComponent as SpringBootIcon } from '../icons/springboot.svg';
import { ReactComponent as TypescriptIcon } from '../icons/typescript.svg';
import { ReactComponent as WorkIcon } from '../icons/work.svg';

export const iconMap = {
    'Bootstrap': BootstrapIcon,
    'D3.js': D3Icon,
    'Dart': DartIcon,
    'Express': ExpressIcon,
    'Firebase': FirebaseIcon,
    'Flutter': FlutterIcon,
    'Java': JavaIcon,
    'Javascript': JavascriptIcon,
    'MongoDB': MongoDBIcon,
    'Next.js': NextJSIcon,
    'NoSQL': NoSQLIcon,
    'PostgreSQL': PostgreSQLIcon,
    'React': ReactIcon,
    'Redux': ReduxIcon,
    'SQL': SQLIcon,
    'Spring Boot': SpringBootIcon,
    'Typescript': TypescriptIcon,
    'chevron': Chevron,
    'code': CodeIcon,
    'document': Document,
    'github': GitHub,
    'home': HomeIcon,
    'linkedin': LinkedIn,
    'person': PersonIcon,
    'work': WorkIcon
};

export type IconTitle = keyof typeof iconMap;