import React, { memo } from 'react';
import { MobileSliderProps } from './types';
import { SliderContainer, SliderItem, ItemImage } from './styled';

const MobileSlider: React.FC<MobileSliderProps> = ({ images, sliderHeight = 230, initialSlide = 1 }) => {
  const sliderState = {
    initialSlide,
    swipe: true,
    slidesToShow: 1,
    arrows: true,
    infinite: false,
    centerMode: true,
    centerPadding: '8px',
    variableWidth: true,
    lazyLoad: 'progressive' as 'progressive' | 'ondemand' | undefined,
  };

  const renderItems = images.map((image, index) =>
    <SliderItem key={index} sliderHeight={sliderHeight} >
      <ItemImage src={image} sliderHeight={sliderHeight} />
    </SliderItem>);
  
  return <SliderContainer {...sliderState} sliderHeight={sliderHeight} >
    {renderItems}
  </SliderContainer>;
};

export default memo(MobileSlider);
