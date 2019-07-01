import React, { memo } from 'react';
import { RateSliderProps } from './types';
import { 
  RateSliderContainer, RateContainer, RateNumber, 
  RateText, RateLink,
} from './styled';

import { Slider, MobileSlider } from 'src/components/UI';

const RateSlider: React.FC<RateSliderProps> = ({ data, isMobile }) => {
  const { rate, rateText, link, images } = data;
  const IMAGES_TO_SHOW_COUNT = 3;

  return (
    <RateSliderContainer>
      <RateContainer>
        <RateNumber>{rate}</RateNumber>

        <RateText>{rateText(rate)}</RateText>

        <RateLink href={link.url}>{link.text}</RateLink>
      </RateContainer>

      {isMobile
        ? <MobileSlider images={images} sliderHeight={309} />
        : <Slider
          imageSizes={{ height: 538, width: 256 }}
          imagesToShowCount={IMAGES_TO_SHOW_COUNT}
          images={images}
        />
      }
    </RateSliderContainer>
  );
};

export default memo(RateSlider);
