import React, { memo } from 'react';
import { SliderBlockProps } from './types';
import { SliderBlockContainer, SliderBlockHeading } from './styled';
import Slider from 'src/components/UI/Slider';

const SliderBlock: React.FC<SliderBlockProps> = ({ data }) => {
  const { heading, images, styles } = data;
  const IMAGES_TO_SHOW_COUNT = 3;

  return (
    <SliderBlockContainer>
      <SliderBlockHeading>{heading}</SliderBlockHeading>

      <Slider 
        imageSizes={{ height: 340, width: 255 }}
        imagesToShowCount={IMAGES_TO_SHOW_COUNT}
        images={images}
        containerStyles={styles}
      />
    </SliderBlockContainer>
  );
};

export default memo(SliderBlock);
