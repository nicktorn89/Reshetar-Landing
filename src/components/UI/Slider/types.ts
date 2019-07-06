import { ImageType } from 'src/types';

export interface SliderProps {
  imageSizes: {
    height: number;
    width: number;
  };
  imagesToShowCount: number;
  images: ImageType;
  containerStyles?: {
    [property: string]: string | number;
  };
}
