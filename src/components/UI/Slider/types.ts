export interface SliderProps {
  imageSizes: {
    height: number;
    width: number;
  };
  imagesToShowCount: number;
  images: string[];
  containerStyles?: {
    [property: string]: string | number;
  };
}
