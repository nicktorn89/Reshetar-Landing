import React, { useContext, useState, useEffect } from 'react';
import { 
  Header, Hero, InfoBlock, SliderWithTabs, RateSlider, 
  PriceBlock, SliderBlock, FAQ, OrderBlock, Footer,
} from 'src/components/modules';
import { throttle } from 'throttle-debounce';
import { Helmet } from 'react-helmet';
import ConnectedThemeProvider from 'src/components/modules/ThemeProvider/index';

import LocaleData from 'src/locale';
import { deviceSizes } from 'src/theme/vars/base';

import { LocaleDataType } from 'src/types';
import { LayoutProps } from './types';

import './layout.css';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const checkScreen = () => document.documentElement.clientWidth < deviceSizes.desktop;

  const localeData: LocaleDataType = useContext(LocaleData);
  const [isMobile, setScreenStatus] = useState(false);

  const throttleMethod = throttle(500, () => {
    setScreenStatus(checkScreen);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') window.addEventListener('resize', throttleMethod);
    
    setScreenStatus(checkScreen);
  });
  
  const renderSliderBlocks = localeData.sliderBlocks.map((block, index) => <SliderBlock data={block} key={index} isMobile={isMobile} />);

  return (
    <React.Fragment>
      <Helmet defer={false} title={'Reshetar'}>
        <html lang='ru' />
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
      </Helmet>

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
