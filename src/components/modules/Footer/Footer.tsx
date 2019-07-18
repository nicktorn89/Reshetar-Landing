import React, { memo } from 'react';
import Header, { HeaderIconContainer, HeaderStyledIcon } from '../Header';

import FooterProps from './types';

import { Footer, FooterTextContainer, CopyrightWrapper, FooterCopyright, FooterSocialLinks } from './styled';

const FooterComponent: React.FC<FooterProps> = ({ data, isMobile }) => {
  const { headerClone, copyright, socialLinks } = data;

  const renderSocialLinks = socialLinks.map((link, index) => 
    <HeaderIconContainer key={index} href={link.url} target='_blank'>
      <HeaderStyledIcon size='lg' icon={link.icon} />
    </HeaderIconContainer>,
  );

  return (
    <Footer>
      <Header data={headerClone} isMobile={isMobile} node='div' />

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
