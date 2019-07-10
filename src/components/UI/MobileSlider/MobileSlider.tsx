import React, { memo, useRef } from 'react';
import ImageViewer from '../ImageViewer';

import { useImageViewer } from 'src/hooks';
import { createSliderItem, emptyFunc } from 'src/utils';

import { MobileSliderProps } from './types';
import { ImageDecorator } from 'react-viewer/lib/ViewerProps';

import { SliderContainer, SliderItem, ItemImage, SliderBlock } from './styled';

const MobileSlider: React.FC<MobileSliderProps> = ({ images, sliderHeight = 230, initialSlide = 1 }) => {
  const sliderState = {
    initialSlide,
    swipe: true,
    slidesToShow: 1,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: '8px',
    variableWidth: true,
    lazyLoad: 'progressive' as 'progressive' | 'ondemand' | undefined,
  };

  const viewerImages: ImageDecorator[] = createSliderItem(images.high);

  const sliderContainer = useRef<HTMLDivElement>(null);
  const { viewerStatus, changeViewerStatus, activeIndex } = useImageViewer(sliderContainer);

  const renderItems = images.low.map((image, index) =>
    <SliderItem key={index} sliderHeight={sliderHeight} >
      <ItemImage src={image} sliderHeight={sliderHeight} onClick={!viewerStatus ? changeViewerStatus(index) : emptyFunc} />
    </SliderItem>);
  
  return (
    <SliderBlock ref={sliderContainer} sliderHeight={sliderHeight}>
      <SliderContainer {...sliderState} sliderHeight={sliderHeight}>
        {renderItems}
      </SliderContainer>

      <ImageViewer
        status={viewerStatus}
        onClose={changeViewerStatus(0)}
        images={viewerImages}
        activeIndex={activeIndex}
      />
    </SliderBlock>
  );
};

export default memo(MobileSlider);
