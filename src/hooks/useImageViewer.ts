import { useState, RefObject } from 'react';

export const useImageViewer = (imagesContainer?: RefObject<HTMLDivElement>) => {
  const [viewerStatus, setViewerStatus] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeViewerStatus = (index: number) => () => {
    setActiveIndex(index);
    setViewerStatus(!viewerStatus);
    
    setTimeout(() => {  // Без этого после закрытия просмотрщика, скроллится к верху экрана
      imagesContainer && (imagesContainer.current as HTMLDivElement).scrollIntoView();

      if (!activeIndex) document.body.style.cssText = 'overflow: auto;';
    }, 330);
  };

  return { viewerStatus, changeViewerStatus, activeIndex };
};
