export interface SliderProps {
  imageSizes: {
    height: number;
    width: number;
  };
  images: ImageType;
  containerStyles?: {
    [property: string]: string | number;
  };
}
