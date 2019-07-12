import { ImageType } from 'src/types';
import Slider from 'react-slick';

export interface SliderState {
  initialSlide: number;
  swipe: boolean;
  slidesToShow: number;
  arrows: boolean;
  infinite: boolean;
  centerMode: boolean;
  centerPadding: string;
  variableWidth: boolean;
  ref?: ((instance: Slider) => void);
}

export interface MobileSliderProps {
  images: ImageType;
  sliderHeight: number;
  initialSlide?: number;
  forwardRef?: ((instance: Slider) => void);
}
