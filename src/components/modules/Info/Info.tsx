import React, { memo } from 'react';
import { useDescImage, useAdvantagesImg } from 'src/hooks';

import InfoBlockProps from './types';

import { 
  InfoContainer, InfoDescriptionBlock, InfoDescriptionPhoto, InfoDescImg,
  InfoDescriptionText, InfoDescPart, InfoDescLogo, 
  InfoAdvantagesBlock, InfoAdvantageItem, InfoAdvantageTitle, InfoAdvantageDesc, 
  InfoAdvantageImageContainer, InfoAdvantageImage, InfoDescLogoContainer, InfoDescLink,
} from './styled';

const Info: React.FC<InfoBlockProps> = ({ data, isMobile }) => {
  const { description, link, advantages } = data;
  const file = useDescImage();
  const advantagesImages = useAdvantagesImg();
  
  const renderAdvantages = advantages.map((advantage, index) => 
    <InfoAdvantageItem key={index}>
      <InfoAdvantageTitle>{advantage.title}</InfoAdvantageTitle>
      {!isMobile && <InfoAdvantageDesc>{advantage.text}</InfoAdvantageDesc>}
      <InfoAdvantageImageContainer>
       <InfoAdvantageImage src={advantagesImages[index].publicURL} />
      </InfoAdvantageImageContainer>
    </InfoAdvantageItem>,
  );

  const renderDescription = description.map((desc, index) => <InfoDescPart key={index}>{desc}</InfoDescPart>);

  return (
    <InfoContainer>
      <InfoDescriptionBlock>
        <InfoDescriptionPhoto>
          <InfoDescImg fixed={file.childImageSharp.fixed} />
          {isMobile && <InfoDescLogo />}
        </InfoDescriptionPhoto>
        <InfoDescriptionText>
          {renderDescription}

          {!isMobile && <InfoDescLogoContainer>
            <InfoDescLogo />

            <InfoDescLink href={link.url} target='_blank'>
              {link.text}
            </InfoDescLink>
          </InfoDescLogoContainer>}
        </InfoDescriptionText>
      </InfoDescriptionBlock>

      <InfoAdvantagesBlock>
        {renderAdvantages}
      </InfoAdvantagesBlock>
    </InfoContainer>
  );
};

export default memo(Info);
