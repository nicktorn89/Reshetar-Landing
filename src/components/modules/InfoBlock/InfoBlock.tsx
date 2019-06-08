import React, { memo } from 'react';
import { 
  InfoBlockContainer, DescriptionBlock, DescriptionPhoto, DescImg,
  DescriptionText, DescLogo, AdvantagesBlock, AdvantageItem,
  AdvantageTitle, AdvantageDesc, AdvantageImageContainer, AdvantageImage,
  DescLogoContainer, Link,
} from './styled';
import InfoBlockProps from './types';
import parse from 'html-react-parser';
import { useDescImage } from 'src/hooks/useDescImage';
import { useAdvantagesImg } from 'src/hooks/useAdvantagesImg';

const InfoBlock: React.FC<InfoBlockProps> = ({ data }) => {
  const { description, link, advantages, images } = data;
  const file = useDescImage();
  const advantagesImages = useAdvantagesImg();
  
  const renderAdvantages = advantages.map((advantage, index) => (
    <AdvantageItem key={index}>
      <AdvantageTitle>{advantage.title}</AdvantageTitle>
      <AdvantageDesc>{advantage.text}</AdvantageDesc>
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
        </DescriptionPhoto>
        <DescriptionText>
          {parse(description)}

          <DescLogoContainer>
            <DescLogo />

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
