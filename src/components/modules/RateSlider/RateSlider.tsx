import React, { memo } from 'react';
import { Slider, MobileSlider } from 'src/components/UI';

import { RateSliderProps } from './types';

import { 
  RateSliderContainer, RateContainer, RateNumber, 
  RateText, RateLink,
} from './styled';

const RateSlider: React.FC<RateSliderProps> = ({ data, isMobile }) => {
  const { rate, rateText, link, images } = data;

  return (
    <RateSliderContainer>
      <RateContainer>
        <RateNumber>{rate}</RateNumber>

        <RateText>{rateText(rate)}</RateText>

        {link && <RateLink href={link.url}>{link.text}</RateLink>}
      </RateContainer>

      {isMobile
        ? <MobileSlider images={images} sliderHeight={309} />
        : <Slider
          imageSizes={{ height: 538, width: 256 }}
          images={images}
          containerStyles={{ justifyContent: 'center', paddingLeft: '11.5%', paddingRight: '11.5%' }}
        />
      }
    </RateSliderContainer>
  );
};

export default memo(RateSlider);
