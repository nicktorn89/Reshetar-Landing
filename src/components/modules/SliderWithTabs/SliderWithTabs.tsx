import React, { memo, useRef } from 'react';
import { 
  SliderContainer, SliderHeading, TabsContainer, 
  Tab, ImagesContainer, DescContainer, 
  HeadingDesc, TextDesc, SliderControlsGroup, 
  SliderControl, ImageItem,
} from './styled';

import parse from 'html-react-parser';

import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Icon, ImageViewer } from 'src/components/UI';

import { useSliderHook, useImageViewer } from 'src/hooks';
import { createSliderItem, emptyFunc } from 'src/utils';

import { ImageDecorator } from 'react-viewer/lib/ViewerProps';
import { SliderWithTabsProps } from './types';

const SliderWithTabs: React.FC<SliderWithTabsProps> = ({ data }) => {
  const { heading, tabs, descriptions, activeTab, images, nextButtonText } = data; // TODO: создать action для изменения табы

  const IMAGES_TO_SHOW_COUNT = 2;
  const { currentImage, nextSlide, prevSlide } = useSliderHook(images[activeTab], IMAGES_TO_SHOW_COUNT);
  const imageToShowArray = [];

  const sliderContainer = useRef<HTMLDivElement>(null);
  const { viewerStatus, changeViewerStatus, activeIndex } = useImageViewer(sliderContainer);
  const sliderImages: ImageDecorator[] = createSliderItem(images[activeTab]);

  for (let i = 0; i < IMAGES_TO_SHOW_COUNT; i += 1) {
    imageToShowArray.push(i);
  }

  const changeImages = (increment: boolean) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    increment 
      ? nextSlide()
      : prevSlide();
  };

  const renderSliderImgFrames = imageToShowArray.map((k, index) => 
    <ImageItem 
      key={index} 
      src={images[activeTab][currentImage + index]}
      onClick={!viewerStatus ? changeViewerStatus(currentImage + index) : emptyFunc}
    />);

  const renderTabs = tabs.map((tab, index) => 
    <Tab key={index} active={index === activeTab}>
      {tab.text}
    </Tab>);

  return (
    <SliderContainer ref={sliderContainer}>
      <SliderHeading>{heading}</SliderHeading>

      <TabsContainer>
        {renderTabs}
      </TabsContainer>

      <ImagesContainer>
        <DescContainer>
          <HeadingDesc>{descriptions[activeTab].heading}</HeadingDesc>
          <TextDesc>{parse(descriptions[activeTab].description)}</TextDesc>

          <SliderControlsGroup>
            <SliderControl onClick={changeImages(false)}>
              <Icon icon={faLongArrowAltLeft} />
            </SliderControl>

            <SliderControl onClick={changeImages(true)} next={true}>
              <span>{nextButtonText}</span>
              <Icon icon={faLongArrowAltRight} />
            </SliderControl>
          </SliderControlsGroup>
        </DescContainer>

        <ImageViewer
          status={viewerStatus}
          onClose={changeViewerStatus(0)}
          images={sliderImages}
          activeIndex={activeIndex}
        />

        {renderSliderImgFrames}
      </ImagesContainer>
    </SliderContainer>
  );
};

export default memo(SliderWithTabs);
