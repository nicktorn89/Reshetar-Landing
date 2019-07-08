import React, { memo } from 'react';
import { useDescImage, useAdvantagesImg } from 'src/hooks';

import InfoBlockProps from './types';

import { 
  InfoBlockContainer, DescriptionBlock, DescriptionPhoto, DescImg,
  DescriptionText, DescPart, DescLogo, AdvantagesBlock, AdvantageItem,
  AdvantageTitle, AdvantageDesc, AdvantageImageContainer, AdvantageImage,
  DescLogoContainer, Link,
} from './styled';

const InfoBlock: React.FC<InfoBlockProps> = ({ data, isMobile }) => {
  const { description, link, advantages } = data;
  const file = useDescImage();
  const advantagesImages = useAdvantagesImg();
  
  const renderAdvantages = advantages.map((advantage, index) => 
    <AdvantageItem key={index}>
      <AdvantageTitle>{advantage.title}</AdvantageTitle>
      {!isMobile && <AdvantageDesc>{advantage.text}</AdvantageDesc>}
      <AdvantageImageContainer>
       <AdvantageImage src={advantagesImages[index].publicURL} />
      </AdvantageImageContainer>
    </AdvantageItem>,
  );

  const renderDescription = description.map((desc, index) => <DescPart key={index}>{desc}</DescPart>);

  return (
    <InfoBlockContainer>
      <DescriptionBlock>
        <DescriptionPhoto>
          <DescImg fixed={file.childImageSharp.fixed} />
          {isMobile && <DescLogo />}
        </DescriptionPhoto>
        <DescriptionText>
          {renderDescription}

          {!isMobile && <DescLogoContainer>
            <DescLogo />

            <Link href={link.url}>
              {link.text}
            </Link>
          </DescLogoContainer>}
        </DescriptionText>
      </DescriptionBlock>

      <AdvantagesBlock>
        {renderAdvantages}
      </AdvantagesBlock>
    </InfoBlockContainer>
  );
};

export default memo(InfoBlock);
