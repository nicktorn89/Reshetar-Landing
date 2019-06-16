import React, { memo } from 'react';
import { SliderProps } from './types';
import { 
  SliderContainer, PrevImageButton, NextImageButton,
  ImagesContainer, ImageItem,
} from './styled';

import Icon from 'src/components/UI/Icon';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import { useSliderHook } from 'src/hooks/useSliderHook';

const RateSlider: React.FC<SliderProps> = ({ imageSizes, imagesToShowCount, images, containerStyles }) => {
  const { height, width } = imageSizes;

  const { currentImage, nextSlide, prevSlide, disabledButtons } = useSliderHook(images, imagesToShowCount);
  const imageToShowArray = [];

  for (let i = 0; i < imagesToShowCount; i += 1) {
    imageToShowArray.push(i);
  }

  const changeImages = (increment: boolean) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    increment 
      ? nextSlide()
      : prevSlide();
  };

  const renderSliderImgFrames = imageToShowArray.map((k, index) => <ImageItem 
    key={index} 
    width={width}
    src={images[currentImage + index]} 
  />);

  return (
      <SliderContainer height={height} style={containerStyles} >
        <PrevImageButton 
          onClick={changeImages(false)}
          disabled={disabledButtons.prev}
        >
          <Icon icon={faLongArrowAltLeft} size='2x' />
        </PrevImageButton>

        <ImagesContainer height={height}>     
          {renderSliderImgFrames}
        </ImagesContainer>

        <NextImageButton 
          onClick={changeImages(true)}
          disabled={disabledButtons.next}
        >
          <Icon icon={faLongArrowAltRight} size='2x' />
        </NextImageButton>
      </SliderContainer>
  );
};

export default memo(RateSlider);
