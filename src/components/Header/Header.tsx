import React, { memo } from 'react';
import HeaderProps from './types';
import { 
  Header, ContactsBlock, BeforeContactsText,
  IconsBlock, IconContainer, StyledIcon, 
  IconText, NumberBlock, NumberSpan,
} from './styled';

import { faInstagram, faVk, faTelegramPlane, faViber } from '@fortawesome/free-brands-svg-icons';

const defaultText = [
  'Instagram', 'ВКонтакте', 'Telegram', 'Viber',
];
const defaultLinks: string[] = [
  '#', '#', '#', '#',
];
const icons = [
  faInstagram, faVk, faTelegramPlane, faViber,
];

const HeaderComponent: React.FC<HeaderProps> = ({ text = defaultText, links = defaultLinks }) => {
  const renderLinks = text.map((name, index) => (
    <IconContainer key={index} href={links[index]}>
      <StyledIcon size='lg' icon={icons[index]} />
      <IconText>{name}</IconText>
    </IconContainer>
  ));

  return (
    <Header>
      <ContactsBlock>
        <BeforeContactsText>Задайте вопрос:</BeforeContactsText>
        <IconsBlock>
          {renderLinks}
        </IconsBlock>
      </ContactsBlock>

      <NumberBlock>
        <NumberSpan>+7 926 720-82-60</NumberSpan>
      </NumberBlock>
    </Header>
  );
};

HeaderComponent.displayName = 'Header';

export default memo(HeaderComponent);
