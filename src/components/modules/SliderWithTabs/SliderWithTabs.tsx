import React, { memo, useRef, useState } from 'react';
import { 
  SliderContainer, SliderHeading, TabsContainer, 
  Tab, ImagesContainer, DescContainer, 
  HeadingDesc, TextDesc, SliderControlsGroup, 
  SliderControl, ImageItem, AccordionsContainer,
} from './styled';

import { default as Accordion } from 'react-collapsible';

import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Icon, ImageViewer, MobileSlider } from 'src/components/UI';

import { useSliderHook, useImageViewer } from 'src/hooks';
import { createSliderItem, emptyFunc } from 'src/utils';

import { ImageDecorator } from 'react-viewer/lib/ViewerProps';
import { SliderWithTabsProps } from './types';

const SliderWithTabs: React.FC<SliderWithTabsProps> = ({ data, isMobile }) => {
  const { heading, tabs, descriptions, images, nextButtonText } = data;

  const [activeTab, setActiveTab] = useState(0);

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

  const changeTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { tabIndex } = e.currentTarget.dataset;
    tabIndex && setActiveTab(+tabIndex);
  };

  const accordionChangeTab = (index: number) => () => {
    setActiveTab(index);
  };

  const renderSliderImgFrames = imageToShowArray.map((k, index) =>
    <ImageItem
      key={index}
      src={images[activeTab][currentImage + index]}
      onClick={!viewerStatus ? changeViewerStatus(currentImage + index) : emptyFunc}
    />);

  const renderTabs = tabs.map((tab, index) => <Tab
    key={index}
    active={index === activeTab}
    data-tab-index={index}
    onClick={changeTab}
  >
    {tab.text}
  </Tab>);

  const renderAccordions = isMobile && tabs.map((tab, index) =>
    <Accordion
      key={index}
      trigger={tab.text}
      open={index === activeTab}
      lazyRender={true}
      openedClassName={'opened-accordion'}
      transitionTime={200}
      data-tab-index={index}
      handleTriggerClick={accordionChangeTab(index)}
    >
      <MobileSlider images={images[activeTab]} sliderHeight={218} initialSlide={0} />
    </Accordion>,
  );
  
  const renderDescription = descriptions[activeTab].description.map((desc, index) => <span key={index}>{desc}</span>);

  return (
    <SliderContainer ref={sliderContainer}>
      <SliderHeading>{heading}</SliderHeading>

      {!isMobile && <TabsContainer>
        {renderTabs}
      </TabsContainer>
      }

      <ImagesContainer>
        <DescContainer>
          <HeadingDesc>{descriptions[activeTab].heading}</HeadingDesc>
          {!isMobile && <TextDesc>{renderDescription}</TextDesc>}

          {isMobile && <AccordionsContainer>
            {renderAccordions}
          </AccordionsContainer>}

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

        {!isMobile && renderSliderImgFrames}
      </ImagesContainer>
    </SliderContainer>
  );
};

export default memo(SliderWithTabs);
