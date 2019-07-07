import React, { memo, useRef, useState } from 'react';
import { SliderProps } from './types';
import { 
  SliderContainer, PrevImageButton, NextImageButton,
  ImagesContainer, ImageItem,
} from './styled';

import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Icon, ImageViewer } from 'src/components/UI';

import { useImageViewer } from 'src/hooks';
import { createSliderItem, emptyFunc } from 'src/utils';

import { ImageDecorator } from 'react-viewer/lib/ViewerProps';
import Slider from 'react-slick';

const SliderComponent: React.FC<SliderProps> = ({ imageSizes, images, containerStyles }) => {
  const { height, width } = imageSizes;
  const sliderState = {
    initialSlide: 0,
    swipe: true,
    slidesToShow: 3,
    arrows: true,
    infinite: false,
    centerMode: false,
    centerPadding: '8px',
    variableWidth: true,
    lazyLoad: 'progressive' as 'progressive' | 'ondemand' | undefined,
    beforeChange: (oldIndex: number, newIndex: number) => {
      if (oldIndex === newIndex) {
        changeNextButtonStatus(false);
        changePrevButtonStatus(true);
      } else if (oldIndex === 0 && newIndex === images.high.length - 1) {
        changePrevButtonStatus(false);
        changeNextButtonStatus(true);
      } else {
        changePrevButtonStatus(true);
        changeNextButtonStatus(true);
      }
    },
  };

  const [prevButtonStatus, changePrevButtonStatus] = useState(false);
  const [nextButtonStatus, changeNextButtonStatus] = useState(true);

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
          onClick={!prevButtonStatus ? emptyFunc : handleChangeImg(false)}
          disabled={!prevButtonStatus}
        >
          <Icon icon={faLongArrowAltLeft} size='3x' />
        </PrevImageButton>

        <ImagesContainer ref={(slider) => { sliderObj = slider; }} sliderHeight={height} {...sliderState}>     
          {renderSliderImg}
        </ImagesContainer>

        <NextImageButton 
          onClick={!nextButtonStatus ? emptyFunc : handleChangeImg(true)}
          disabled={!nextButtonStatus}
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
