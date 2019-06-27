import React, { memo, useRef } from 'react';
import { SliderProps } from './types';
import { 
  SliderContainer, PrevImageButton, NextImageButton,
  ImagesContainer, ImageItem,
} from './styled';

import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Icon, ImageViewer } from 'src/components/UI';

import { useSliderHook, useImageViewer } from 'src/hooks';
import { createSliderItem, emptyFunc } from 'src/utils';

import { ImageDecorator } from 'react-viewer/lib/ViewerProps';

const Slider: React.FC<SliderProps> = ({ imageSizes, imagesToShowCount, images, containerStyles }) => {
  const { height, width } = imageSizes;
  
  const { currentImage, nextSlide, prevSlide, disabledButtons } = useSliderHook(images, imagesToShowCount);
  const imageToShowArray = [];

  const sliderContainer = useRef<HTMLDivElement>(null);
  const { viewerStatus, changeViewerStatus, activeIndex } = useImageViewer(sliderContainer);
  const sliderImages: ImageDecorator[] = createSliderItem(images);

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
    onClick={!viewerStatus ? changeViewerStatus(currentImage + index) : emptyFunc}
  />);

  return (
      <SliderContainer ref={sliderContainer} height={height} style={containerStyles} >
        <PrevImageButton 
          onClick={changeImages(false)}
          disabled={disabledButtons.prev}
        >
          <Icon icon={faLongArrowAltLeft} size='3x' />
        </PrevImageButton>

        <ImagesContainer height={height}>     
          {renderSliderImgFrames}
        </ImagesContainer>

        <NextImageButton 
          onClick={changeImages(true)}
          disabled={disabledButtons.next}
        >
          <Icon icon={faLongArrowAltRight} size='3x' />
        </NextImageButton>

        <ImageViewer
          status={viewerStatus}
          onClose={changeViewerStatus(0)}
          images={sliderImages}
          activeIndex={activeIndex}
        />
      </SliderContainer>
  );
};

export default memo(Slider);
