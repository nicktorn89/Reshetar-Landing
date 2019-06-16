import React, { memo } from 'react';
import { RateSliderProps } from './types';
import { 
  RateSliderContainer, RateContainer, RateNumber, RateText,
  RateLink, SliderBlock, PrevImageButton, NextImageButton,
  ImagesContainer, ImageItem,
} from './styled';

import Icon from 'src/components/UI/Icon';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import { useSliderHook } from 'src/hooks/useSliderHook';

const RateSlider: React.FC<RateSliderProps> = ({ data }) => {
  const { rate, rateText, link, images } = data;
  const IMAGES_TO_SHOW_COUNT = 3;
  const { currentImage, nextSlide, prevSlide, disabledButtons } = useSliderHook(images, IMAGES_TO_SHOW_COUNT);
  const imageToShowArray = [];

  for (let i = 0; i < IMAGES_TO_SHOW_COUNT; i += 1) {
    imageToShowArray.push(i);
  }

  const changeImages = (increment: boolean) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    increment 
      ? nextSlide()
      : prevSlide();
  };

  const renderSliderImgFrames = imageToShowArray.map((k, index) => <ImageItem key={index} src={images[currentImage + index]} />);

  return (
    <RateSliderContainer>
      <RateContainer>
        <RateNumber>{rate}</RateNumber>

        <RateText>{rateText(rate)}</RateText>

        <RateLink href={link.url}>{link.text}</RateLink>
      </RateContainer>

      <SliderBlock>
        <PrevImageButton 
          onClick={changeImages(false)}
          disabled={disabledButtons.prev}
        >
          <Icon icon={faLongArrowAltLeft} size='2x' />
        </PrevImageButton>

        <ImagesContainer>     
          {renderSliderImgFrames}
        </ImagesContainer>

        <NextImageButton 
          onClick={changeImages(true)}
          disabled={disabledButtons.next}
        >
          <Icon icon={faLongArrowAltRight} size='2x' />
        </NextImageButton>
      </SliderBlock>
    </RateSliderContainer>
  );
};

export default memo(RateSlider);
