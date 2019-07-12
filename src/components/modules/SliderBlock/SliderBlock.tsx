import React, { memo } from 'react';
import { MobileSlider, Slider } from 'src/components/UI';

import { SliderBlockProps } from './types';

import { SliderBlockContainer, SliderBlockHeading } from './styled';

const SliderBlock: React.FC<SliderBlockProps> = ({ data, isMobile }) => {
  const { heading, images, styles } = data;

  return (
    <SliderBlockContainer>
      <SliderBlockHeading>{heading}</SliderBlockHeading>

      {
        isMobile 
          ? 
            <MobileSlider images={images} sliderHeight={230} />
          :
            <Slider
              imageSizes={{ height: 340, width: 255 }}
              images={images}
              containerStyles={styles}
            />
      }
    </SliderBlockContainer>
  );
};

export default memo(SliderBlock);
