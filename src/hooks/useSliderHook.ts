import { useState } from 'react';

export const useSliderHook = (imagesArray: string[], imagesToShowCount: number) => {
  const [currentImage, setImage] = useState(0);
  const { length } = imagesArray;

  const nextSlide = () => {
    currentImage + imagesToShowCount < length && setImage(currentImage + 1);
  };

  const prevSlide = () => {
    currentImage > 0 && setImage(currentImage - 1);
  };

  return { currentImage, nextSlide, prevSlide };
};
