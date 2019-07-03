import React, { useContext, useState, useEffect } from 'react';
import { throttle } from 'throttle-debounce';
import { LayoutProps } from './types';

import './layout.css';
import LocaleData from 'src/locale';
import { LocaleDataType } from 'src/types';
import ConnectedThemeProvider from 'src/components/modules/ThemeProvider/index';

import { 
  Header, Hero, InfoBlock, SliderWithTabs, RateSlider, 
  PriceBlock, SliderBlock, FAQ, OrderBlock, Footer,
} from 'src/components/modules';
import { deviceSizes } from 'src/theme/vars/base';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const checkScreen = () => document.documentElement.clientWidth < deviceSizes.desktop;

  const localeData: LocaleDataType = useContext(LocaleData);
  const [isMobile, setScreenStatus] = useState(false);

  const throttleMethod = throttle(500, () => {
    setScreenStatus(checkScreen);
  });

  if (typeof window !== 'undefined') window.addEventListener('resize', throttleMethod);

  useEffect(() => {
    setScreenStatus(checkScreen);
  });
  
  const renderSliderBlocks = localeData.sliderBlocks.map((block, index) => <SliderBlock data={block} key={index} isMobile={isMobile} />);

  return (
    <React.Fragment>
      <ConnectedThemeProvider theme={'purple'}>
        {!isMobile && <Header data={localeData.header} isMobile={isMobile} />}

        <Hero data={localeData.hero} isMobile={isMobile} />
        <InfoBlock data={localeData.infoBlock} isMobile={isMobile} />
        <SliderWithTabs data={localeData.sliderWithTabs} isMobile={isMobile} />
        <RateSlider data={localeData.rateSlider} isMobile={isMobile} />
        <PriceBlock data={localeData.priceBlock} isMobile={isMobile} />
        
        {renderSliderBlocks}
        
        <FAQ data={localeData.faq} isMobile={isMobile} />
        <OrderBlock data={localeData.orderBlock} isMobile={isMobile} />
        <Footer data={localeData.footer} isMobile={isMobile} />

        {children}
      </ConnectedThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
