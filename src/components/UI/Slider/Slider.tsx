import React, { memo, useRef } from 'react';
import Slider from 'react-slick';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Icon, ImageViewer } from 'src/components/UI';

import { useImageViewer } from 'src/hooks';
import { createSliderItem, emptyFunc } from 'src/utils';

import { SliderProps } from './types';
import { ImageDecorator } from 'react-viewer/lib/ViewerProps';

import { 
  SliderContainer, PrevImageButton, NextImageButton,
  ImagesContainer, ImageItem,
} from './styled';

const SliderComponent: React.FC<SliderProps> = ({ imageSizes, images, containerStyles }) => {
  const { height, width } = imageSizes;
  const sliderState = {
    initialSlide: 0,
    swipe: false,
    slidesToShow: 3,
    arrows: false,
    infinite: true,
    centerMode: false,
    centerPadding: '8px',
    variableWidth: true,
    lazyLoad: 'progressive' as 'progressive' | 'ondemand' | undefined,
  };

  const sliderContainer = useRef<HTMLDivElement>(null);
  const { viewerStatus, changeViewerStatus, activeIndex } = useImageViewer(sliderContainer);
  const viewerImages: ImageDecorator[] = createSliderItem(images.high);

  let sliderObj = {} as unknown as Slider | null;

  const handleChangeImg = (isNext: boolean) => () => {
    isNext
      ? sliderObj && sliderObj.slickNext()
      : sliderObj && sliderObj.slickPrev();
  };

  const renderSliderImg = images.high.map((k, index) => 
    <ImageItem key={index} onClick={!viewerStatus ? changeViewerStatus(index) : emptyFunc}>
      <source srcSet={images.webp[index]} type='image/webp' />
      <source media='(max-width: 900px)' srcSet={images.low[index]} type='image/jpeg' />
      <img
        width={width}
        src={images.high[index]}
      />
    </ImageItem>);

  return (
      <SliderContainer ref={sliderContainer} height={height} style={containerStyles} >
        <PrevImageButton 
          onClick={handleChangeImg(false)}
          disabled={false}
        >
          <Icon icon={faLongArrowAltLeft} size='3x' />
        </PrevImageButton>

        <ImagesContainer ref={(slider) => { sliderObj = slider; }} sliderHeight={height} {...sliderState}>     
          {renderSliderImg}
        </ImagesContainer>

        <NextImageButton 
          onClick={handleChangeImg(true)}
          disabled={false}
        >
          <Icon icon={faLongArrowAltRight} size='3x' />
        </NextImageButton>

        <ImageViewer
          status={viewerStatus}
          onClose={changeViewerStatus(0)}
          images={viewerImages}
          activeIndex={activeIndex}
        />
      </SliderContainer>
  );
};

export default memo(SliderComponent);
