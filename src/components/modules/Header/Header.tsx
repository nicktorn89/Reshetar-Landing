import React, { memo } from 'react';

import HeaderProps from './types';

import { 
  Header, HeaderContactsBlock, HeaderContactsText,
  HeaderIconsBlock, HeaderIconContainer, HeaderStyledIcon, 
  HeaderIconText, HeaderNumberBlock, HeaderNumberSpan, MobileHeaderContactsText,
} from './styled';

const HeaderComponent: React.FC<HeaderProps> = ({ data, isMobile, node = 'header' }) => {
  const { beforeContacts, text, links, icons, phoneNumber } = data;

  const renderLinks = text.map((name, index) => 
    <HeaderIconContainer key={index} href={links[index]} target='_blank'>
      <HeaderStyledIcon size='lg' icon={icons[index]} />
      <HeaderIconText>{name}</HeaderIconText>
    </HeaderIconContainer>,
  );

  return (
    <Header as={node}>
      <HeaderContactsBlock>
        <HeaderContactsText>{beforeContacts}</HeaderContactsText>
        <HeaderIconsBlock>
          {renderLinks}
        </HeaderIconsBlock>
      </HeaderContactsBlock>

      <HeaderNumberBlock>
        <MobileHeaderContactsText>Контакты</MobileHeaderContactsText>
        <HeaderNumberSpan>{phoneNumber}</HeaderNumberSpan>
      </HeaderNumberBlock>
    </Header>
  );
};

HeaderComponent.displayName = 'Header';

export default memo(HeaderComponent);
