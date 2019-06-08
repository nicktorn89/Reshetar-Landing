import { useState } from 'react';

export const useSliderHook = (imagesArray: string[]) => {
  const { length } = imagesArray;
  const [currentImage, setImage] = useState(0);

  return { currentImage, setImage };
};
