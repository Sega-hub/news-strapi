import { useState } from 'react';
import styled from 'styled-components';
import { 
    SubNav,
    SubNavHeader,
    SubNavSection,
    SubNavSections,
    SubNavLink,
    Link
} from '@strapi/design-system';
import { NewsTable } from './NewsTable';
import { Agents } from './Agents';
import { Process } from './Process';
import { Models } from './Models';

const StyledSubNavLink = styled(SubNavLink)`
    &[aria-current="page"] {
        background-color: #f0f0ff; /* Светлый фон */
    }

    &:hover {
        background-color: #e6e6e6; /* Серый при наведении */
    }
`;

const SideMenu = ({ setComponent }) => {
    const [activeTab, setActiveTab] = useState('Переводы');

    const handleClick = (component, label) => {
        setComponent(component);
        setActiveTab(label);
    };

    return (
        <SubNav>
            <SubNavHeader label="LLM"/>
            <SubNavSections>
                <SubNavSection label="Common">
                    <StyledSubNavLink active={activeTab === 'Переводы'} aria-current={activeTab === 'Переводы' ? 'page' : undefined}>
                        <Link onClick={() => handleClick(<NewsTable />, 'Переводы')}>Переводы</Link>
                    </StyledSubNavLink>
                </SubNavSection>
                <SubNavSection label="System">                     
                    <StyledSubNavLink active={activeTab === 'Агенты'} aria-current={activeTab === 'Агенты' ? 'page' : undefined}>
                        <Link onClick={() => handleClick(<Agents />, 'Агенты')}>Агенты</Link>
                    </StyledSubNavLink>
                    <StyledSubNavLink active={activeTab === 'Процессы'} aria-current={activeTab === 'Процессы' ? 'page' : undefined}>
                        <Link onClick={() => handleClick(<Process />, 'Процессы')}>Процессы</Link>
                    </StyledSubNavLink>
                    <StyledSubNavLink active={activeTab === 'Модели'} aria-current={activeTab === 'Модели' ? 'page' : undefined}>
                        <Link onClick={() => handleClick(<Models />, 'Модели')}>Модели</Link>
                    </StyledSubNavLink>
                </SubNavSection>
            </SubNavSections>
        </SubNav>
    );
};

export { SideMenu };
