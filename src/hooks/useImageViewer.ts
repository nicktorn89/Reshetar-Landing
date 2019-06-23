import { useState, RefObject } from 'react';

export const useImageViewer = (imagesContainer?: RefObject<HTMLDivElement>) => {
  const [viewerStatus, setViewerStatus] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeViewerStatus = (index: number) => () => {
    setActiveIndex(index);
    setViewerStatus(!viewerStatus);
    
    setTimeout(() => {
      imagesContainer && (imagesContainer.current as HTMLDivElement).scrollIntoView();
    }, 100);
  };

  return { viewerStatus, changeViewerStatus, activeIndex };
};
