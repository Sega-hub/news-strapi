import { 
    SubNav,
    SubNavHeader,
    SubNavSection,
    SubNavSections,
    SubNavLink,
    Link
} from '@strapi/design-system';
import { NewsTable } from './NewsTable';
import { CardItem } from './CardItem';
import { Agents } from './Agents';
import { Process } from './Process';
import { Models } from './Models';

const SideMenu = ({ setComponent }) => {

    return (
        <SubNav>
            <SubNavHeader label="LLM" />
            <SubNavSections>
                 <SubNavSection label="Common">
                     <SubNavLink>
                         <Link onClick={() => setComponent(<NewsTable />)}>Переводы</Link>
                     </SubNavLink>
                 </SubNavSection>
                 <SubNavSection label="System">                     
                     <SubNavLink>
                        <Link onClick={() => setComponent(<Agents />)}>Агенты</Link>
                     </SubNavLink>
                     <SubNavLink>
                        <Link onClick={() => setComponent(<Process />)}>Процессы</Link>
                     </SubNavLink>
                     <SubNavLink>
                        <Link onClick={() => setComponent(<Models />)}>Модели</Link>
                     </SubNavLink>
                 </SubNavSection>
            </SubNavSections>
        </SubNav>
    );
}

export { SideMenu };
