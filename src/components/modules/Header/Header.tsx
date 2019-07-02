import React, { memo } from 'react';
import HeaderProps from './types';
import { 
  Header, ContactsBlock, BeforeContactsText,
  IconsBlock, IconContainer, StyledIcon, 
  IconText, NumberBlock, NumberSpan,
} from './styled';

const HeaderComponent: React.FC<HeaderProps> = ({ data, isMobile }) => {
  const { beforeContacts, text, links, icons, phoneNumber } = data;

  const renderLinks = text.map((name, index) => (
    <IconContainer key={index} href={links[index]}>
      <StyledIcon size='lg' icon={icons[index]} />
      <IconText>{name}</IconText>
    </IconContainer>
  ));

  return (
    <Header>
      <ContactsBlock>
        <BeforeContactsText>{beforeContacts}</BeforeContactsText>
        <IconsBlock>
          {renderLinks}
        </IconsBlock>
      </ContactsBlock>

      <NumberBlock>
        {isMobile && <BeforeContactsText>Контакты</BeforeContactsText>}
        <NumberSpan>{phoneNumber}</NumberSpan>
      </NumberBlock>
    </Header>
  );
};

HeaderComponent.displayName = 'Header';

export default memo(HeaderComponent);
