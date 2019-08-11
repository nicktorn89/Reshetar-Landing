import React, { memo, useRef, useState } from 'react';

import Slider from 'react-slick';
import { default as Accordion } from 'react-collapsible';
import { faLongArrowAltLeft, faLongArrowAltRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Icon, ImageViewer, MobileSlider } from 'src/components/UI';

import { useImageViewer } from 'src/hooks';
import { createSliderItem, emptyFunc } from 'src/utils';

import { ImageDecorator } from 'react-viewer/lib/ViewerProps';
import { SliderWithTabsProps } from './types';

import { 
  SliderContainer, SliderHeading, TabsContainer, 
  Tab, ImagesContainer, DescContainer, 
  HeadingDesc, TextDesc, SliderControlsGroup, 
  SliderControl, ImageItem, AccordionsContainer, SliderUI, 
  AdvantageTextContainer,
} from './styled';

const SliderWithTabs: React.FC<SliderWithTabsProps> = ({ data, isMobile }) => {
  const { heading, tabs, descriptions, images, nextButtonText } = data;

  const sliderState = {
    initialSlide: 0,
    swipe: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    infinite: true,
    variableWidth: false,
    lazyLoad: 'progressive' as 'progressive' | 'ondemand' | undefined,
  };
  
  let sliderObj = {} as unknown as Slider | null;

  const mobileSlider: Slider[] | Object[] = [
    {},
    {},
    {},
  ];

  const [activeTab, setActiveTab] = useState(0);

  const sliderContainer = useRef<HTMLDivElement>(null);
  const { viewerStatus, changeViewerStatus, activeIndex } = useImageViewer(sliderContainer);
  const viewerImages: ImageDecorator[] = createSliderItem(images[activeTab].high);

  const initializeMobileControls = (index: number) => (slider: Slider) => { mobileSlider[index] = slider; };

  const changeTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { tabIndex } = e.currentTarget.dataset;
    tabIndex && setActiveTab(+tabIndex);
    sliderObj && sliderObj.slickGoTo(0);

    isMobile && mobileSlider && (mobileSlider[activeTab] as Slider).slickGoTo(0);
  };

  const accordionChangeTab = (index: number) => () => {
    setActiveTab(index);
  };

  const handleChangeImg = (isNext: boolean) => () => {
    if (isMobile && mobileSlider) {
      isNext
        ? mobileSlider[activeTab] && (mobileSlider[activeTab] as Slider).slickNext()
        : mobileSlider[activeTab] && (mobileSlider[activeTab] as Slider).slickPrev();
    } else {
      isNext
        ? sliderObj && sliderObj.slickNext()
        : sliderObj && sliderObj.slickPrev();
    }    
  };

  const renderSliderImages = images[activeTab].high.map((k, index) =>
    <ImageItem key={index} onClick={!viewerStatus ? changeViewerStatus(index) : emptyFunc}>
        <source srcSet={images[activeTab].webp[index]} type='image/webp' />
        <source media='(max-width: 900px)' srcSet={images[activeTab].low[index]} type='image/jpeg' />
        <img src={images[activeTab].high[index]} />
    </ImageItem>,
  );

  const renderTabs = tabs.map((tab, index) => 
    <Tab key={index} active={index === activeTab} data-tab-index={index} onClick={changeTab}>
      {tab.text}
    </Tab>,
  );

  const renderAccordions = isMobile && tabs.map((tab, index) =>
    <Accordion
      key={index}
      trigger={tab.text}
      open={index === activeTab}
      lazyRender={false}
      easing={'ease-in'}
      openedClassName={'opened-accordion'}
      transitionTime={0.1}
      data-tab-index={index}
      handleTriggerClick={accordionChangeTab(index)}
    >
      <MobileSlider 
        forwardRef={initializeMobileControls(index)} 
        images={images[activeTab]} 
        sliderHeight={218} 
        initialSlide={0} 
      />
    </Accordion>,
  );
  
  const renderDescription = descriptions[activeTab].description.map((desc, index) => 
    <AdvantageTextContainer key={index}>
      <Icon icon={faCheck} size='lg' />
      <span>{desc}</span>
    </AdvantageTextContainer>,
  );

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
            <SliderControl onClick={handleChangeImg(false)}>
              <Icon icon={faLongArrowAltLeft} />
            </SliderControl>

            <SliderControl onClick={handleChangeImg(true)} next={true}>
              <span>{nextButtonText}</span>
              <Icon icon={faLongArrowAltRight} />
            </SliderControl>
          </SliderControlsGroup>
        </DescContainer>

        <ImageViewer
          status={viewerStatus}
          onClose={changeViewerStatus(0)}
          images={viewerImages}
          activeIndex={activeIndex}
        />

        {!isMobile && 
          <SliderUI ref={(slider) => { sliderObj = slider; }} sliderHeight={461} {...sliderState}>     
            {renderSliderImages}
          </SliderUI>
        }
      </ImagesContainer>
    </SliderContainer>
  );
};

export default memo(SliderWithTabs);
