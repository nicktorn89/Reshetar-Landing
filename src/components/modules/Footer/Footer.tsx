import React, { memo } from 'react';
import Header, { HeaderIconContainer, HeaderStyledIcon } from '../Header';

import FooterProps from './types';

import { FooterContainer, FooterText, CopyrightWrapper, FooterCopyright, FooterSocialLinks } from './styled';

const Footer: React.FC<FooterProps> = ({ data, isMobile }) => {
  const { headerClone, copyright, socialLinks } = data;

  const renderSocialLinks = socialLinks.map((link, index) => 
    <HeaderIconContainer key={index} href={link.url} target='_blank'>
      <HeaderStyledIcon size='lg' icon={link.icon} />
    </HeaderIconContainer>,
  );

  return (
    <FooterContainer>
      <Header data={headerClone} isMobile={isMobile} node='div' />

      <FooterText>
        <CopyrightWrapper>
          <FooterCopyright>{copyright}</FooterCopyright>
        </CopyrightWrapper>

        <FooterSocialLinks>{renderSocialLinks}</FooterSocialLinks>
      </FooterText>      
    </FooterContainer>
  );
};

export default memo(Footer);
