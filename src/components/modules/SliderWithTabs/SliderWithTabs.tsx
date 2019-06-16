import React, { memo } from 'react';
import { SliderWithTabsProps } from './types';
import { 
  SliderContainer, SliderHeading, TabsContainer, 
  Tab, ImagesContainer, DescContainer, 
  HeadingDesc, TextDesc, SliderControlsGroup, 
  SliderControl, ImageItem,
} from './styled';

import parse from 'html-react-parser';
import Icon from 'src/components/UI/Icon';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { useSliderHook } from 'src/hooks/useSliderHook';

const SliderWithTabs: React.FC<SliderWithTabsProps> = ({ data }) => {
  const { heading, tabs, descriptions, activeTab, images, nextButtonText } = data; // TODO: создать action для изменения табы
  const IMAGES_TO_SHOW_COUNT = 2;
  const { currentImage, nextSlide, prevSlide } = useSliderHook(images[activeTab], IMAGES_TO_SHOW_COUNT);
  const imageToShowArray = [];

  for (let i = 0; i < IMAGES_TO_SHOW_COUNT; i += 1) {
    imageToShowArray.push(i);
  }

  const changeImages = (increment: boolean) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    increment 
      ? nextSlide()
      : prevSlide();
  };

  const renderSliderImgFrames = imageToShowArray.map((k, index) => <ImageItem key={index} src={images[activeTab][currentImage + index]} />);

  const renderTabs = tabs.map((tab, index) => 
    <Tab key={index} active={index === activeTab}>
      {tab.text}
    </Tab>);

  return (
    <SliderContainer>
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
        
        {renderSliderImgFrames}
      </ImagesContainer>
    </SliderContainer>
  );
};

export default memo(SliderWithTabs);
