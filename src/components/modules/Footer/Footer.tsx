import React, { memo } from 'react';

import Header from '../Header';

import FooterProps from './types';

import { Footer, FooterTextContainer, CopyrightWrapper, FooterCopyright, FooterSocialLinks } from './styled';
import { IconContainer, StyledIcon } from '../Header/styled';

const FooterComponent: React.FC<FooterProps> = ({ data, isMobile }) => {
  const { headerClone, copyright, socialLinks } = data;

  const renderSocialLinks = socialLinks.map((link, index) => 
    <IconContainer key={index} href={link.url}>
      <StyledIcon size='lg' icon={link.icon} />
    </IconContainer>,
  );

  return (
    <Footer>
      <Header data={headerClone} isMobile={isMobile} />

      <FooterTextContainer>
        <CopyrightWrapper>
          <FooterCopyright>{copyright}</FooterCopyright>
        </CopyrightWrapper>

        <FooterSocialLinks>{renderSocialLinks}</FooterSocialLinks>
      </FooterTextContainer>      
    </Footer>
  );
};

FooterComponent.displayName = 'Footer';

export default memo(FooterComponent);
