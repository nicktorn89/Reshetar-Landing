import React, { memo } from 'react';
import { 
  InfoBlockContainer, DescriptionBlock, DescriptionPhoto, DescImg,
  DescriptionText, DescLogo, AdvantagesBlock, AdvantageItem,
  AdvantageTitle, AdvantageDesc, AdvantageImageContainer, AdvantageImage,
  DescLogoContainer, Link,
} from './styled';

import { useDescImage, useAdvantagesImg } from 'src/hooks';

import InfoBlockProps from './types';

const InfoBlock: React.FC<InfoBlockProps> = ({ data, isMobile }) => {
  const { description, link, advantages } = data;
  const file = useDescImage();
  const advantagesImages = useAdvantagesImg();
  
  const renderAdvantages = advantages.map((advantage, index) => (
    <AdvantageItem key={index}>
      <AdvantageTitle>{advantage.title}</AdvantageTitle>
      {!isMobile && <AdvantageDesc>{advantage.text}</AdvantageDesc>}
      <AdvantageImageContainer>
       <AdvantageImage src={advantagesImages[index].publicURL} />
      </AdvantageImageContainer>
    </AdvantageItem>
  ));

  return (
    <InfoBlockContainer>
      <DescriptionBlock>
        <DescriptionPhoto>
          <DescImg fixed={file.childImageSharp.fixed} />
          {isMobile && <DescLogo />}
        </DescriptionPhoto>
        <DescriptionText>
          {description.firstPart}
          <br />
          <br />
          {description.secondPart}

          <DescLogoContainer>
            {!isMobile && <DescLogo />}

            <Link href={link.url}>
              {link.text}
            </Link>
          </DescLogoContainer>
        </DescriptionText>
      </DescriptionBlock>

      <AdvantagesBlock>
        {renderAdvantages}
      </AdvantagesBlock>
    </InfoBlockContainer>
  );
};

export default memo(InfoBlock);
