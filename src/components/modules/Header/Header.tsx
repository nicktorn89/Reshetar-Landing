import React, { memo } from 'react';
import HeaderProps from './types';
import { 
  Header, ContactsBlock, BeforeContactsText,
  IconsBlock, IconContainer, StyledIcon, 
  IconText, NumberBlock, NumberSpan,
} from './styled';
import isNil from 'ramda/es/isNil';

const HeaderComponent: React.FC<HeaderProps> = ({ data }) => {
  if (isNil(data)) return null;
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
        <NumberSpan>{phoneNumber}</NumberSpan>
      </NumberBlock>
    </Header>
  );
};

HeaderComponent.displayName = 'Header';

export default memo(HeaderComponent);
