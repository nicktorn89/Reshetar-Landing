import React, { memo } from 'react';
import { SliderBlockProps } from './types';
import { SliderBlockContainer, SliderBlockHeading } from './styled';
import { MobileSlider, Slider } from 'src/components/UI';

const SliderBlock: React.FC<SliderBlockProps> = ({ data, isMobile }) => {
  const { heading, images, styles } = data;
  const IMAGES_TO_SHOW_COUNT = 3;

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
              imagesToShowCount={IMAGES_TO_SHOW_COUNT}
              images={images}
              containerStyles={styles}
            />
      }
    </SliderBlockContainer>
  );
};

export default memo(SliderBlock);
