import React, { memo } from 'react';
import FooterProps from './types';
import { Footer, FooterTextContainer, FooterCopyright, FooterSocialLinks } from './styled';

import Header from '../Header';
import { IconContainer, StyledIcon } from '../Header/styled';

const FooterComponent: React.FC<FooterProps> = ({ data }) => {
  const { headerClone: headerData, copyright, socialLinks } = data;

  const renderSocialLinks = socialLinks.map((link, index) => (
    <IconContainer key={index} href={link.url}>
      <StyledIcon size='lg' icon={link.icon} />
    </IconContainer>
  ));

  return (
    <Footer>
      <Header data={headerData} />

      <FooterTextContainer>
        <FooterCopyright>{copyright}</FooterCopyright>

        <FooterSocialLinks>{renderSocialLinks}</FooterSocialLinks>
      </FooterTextContainer>      
    </Footer>
  );
};

FooterComponent.displayName = 'Footer';

export default memo(FooterComponent);
