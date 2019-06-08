import React, { memo } from 'react';
import { SliderWithTabsProps } from './types';
import { 
  SliderContainer, SliderHeading, TabsContainer, 
  Tab, ImagesContainer, DescContainer, 
  HeadingDesc, TextDesc, DescControlsGroup, 
  DescControl, ImageItem,
} from './styled';

import parse from 'html-react-parser';
import Icon from 'src/components/UI/Icon';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { useSliderHook } from 'src/hooks/useSliderHook';

const SliderWithTabs: React.FC<SliderWithTabsProps> = ({ data }) => {
  const { heading, tabs, descriptions, activeTab, images, nextButtonText } = data;
  const { currentImage, setImage } = useSliderHook(images[activeTab]);

  const changeImages = (increment: boolean) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setImage(increment ? currentImage + 1 : currentImage - 1);
  };

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

          <DescControlsGroup>
            <DescControl onClick={changeImages(false)}>
              <Icon icon={faLongArrowAltLeft} />
            </DescControl>

            <DescControl onClick={changeImages(true)} next={true}>
              <span>{nextButtonText}</span>
              <Icon icon={faLongArrowAltRight} />
            </DescControl>
          </DescControlsGroup>
        </DescContainer>

        <ImageItem src={images[activeTab][currentImage]} />

        <ImageItem src={images[activeTab][currentImage + 1]} />
      </ImagesContainer>
    </SliderContainer>
  );
};

export default memo(SliderWithTabs);
