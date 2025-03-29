import { styled } from 'styled-components';

import { Button } from '@/shared/ui';

const TabsStyled = styled.div.attrs({ role: 'tablist' })`
  border-bottom: 2px solid #ddd;
  display: flex;
`;

const TabButtonStyled = styled(Button).attrs({ role: 'tab' })`
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  flex: 1;

  &.active {
    pointer-events: none;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #000;
    opacity: 0;
    transform: scaleX(0.2);
    transition:
      transform 300ms ease,
      opacity 300ms ease;
  }

  &.active::before {
    transform: scaleX(1);
    opacity: 1;
  }
`;
type TabsProps = {
  tabs: string[];
  tabContent: React.ReactNode[];
  activeTab: number;
  onChange: (index: number) => void;
};

export const Tabs = ({ tabs, tabContent, activeTab, onChange }: TabsProps) => {
  return (
    <>
      <TabsStyled>
        {tabs.map((tab, index) => (
          <TabButtonStyled
            key={`${tab}-${index}`}
            className={activeTab === index ? 'active' : ''}
            onClick={() => onChange(index)}
          >
            {tab}
          </TabButtonStyled>
        ))}
      </TabsStyled>
      <div role="tabpanel" data-index={activeTab}>
        {tabContent[activeTab]}
      </div>
    </>
  );
};
