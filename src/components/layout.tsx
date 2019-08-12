import React, { useContext, useState, useEffect } from 'react';
import { 
  Header, Hero, Info, SliderWithTabs, RateSlider, 
  PriceBlock, SliderBlock, FAQ, OrderBlock, Footer,
} from 'src/components/modules';
import { throttle } from 'throttle-debounce';
import { Helmet } from 'react-helmet';
import ConnectedThemeProvider from 'src/components/modules/ThemeProvider/index';

import LocaleData from 'src/locale';
import { deviceSizes } from 'src/theme/vars/base';

import { LayoutProps } from './types';
import { FormType } from 'src/components/modules/Hero/types';

import './layout.css';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const checkScreen = () => document.documentElement.clientWidth < deviceSizes.desktop;

  const formObject: FormType = {
    serviceType: 0,
    phoneNumber: '',
    repetition: false,
    earlyDeparture: true,
    guestMakeup: false,
  };

  const localeData: LocaleDataType = useContext(LocaleData);
  const [isMobile, setScreenStatus] = useState(false);
  const [formState, handleChangeForm] = useState(formObject);

  const throttleMethod = throttle(500, () => {
    setScreenStatus(checkScreen);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') window.addEventListener('resize', throttleMethod);
    
    setScreenStatus(checkScreen);
  });
  
  const renderSliderBlocks = localeData.sliderBlocks.map((block, index) => <SliderBlock data={block} key={index} isMobile={isMobile} />);

  const handleChangeOrderBlock = (object: FormType) => {
    handleChangeForm(object);
  };

  return (
    <React.Fragment>
      <Helmet 
        defer={false} 
        title={'Свадебный образ 2019 от Екатерины Решетар'}
        script={[{
          type: 'text/javascript',
          innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
         
            ym(54484087, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });`,
        }]
        }
      >
        <html lang='ru' />
        <meta name='yandex-verification' content='71641501fafc5044' />
        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
      </Helmet>

      <ConnectedThemeProvider theme={'purple'}>
        <Header data={localeData.header} isMobile={isMobile} />
        <Hero data={localeData.hero} isMobile={isMobile} />
        <Info data={localeData.info} isMobile={isMobile} />
        <SliderWithTabs data={localeData.sliderWithTabs} isMobile={isMobile} />
        <RateSlider data={localeData.rateSlider} isMobile={isMobile} />
        <PriceBlock data={localeData.priceBlock} isMobile={isMobile} handleChangeForm={handleChangeOrderBlock} />
        
        {renderSliderBlocks}
        
        <FAQ data={localeData.faq} isMobile={isMobile} />
        <OrderBlock 
          data={localeData.orderBlock} 
          isMobile={isMobile} 
          formState={formState as FormType}
          handleChangeForm={handleChangeOrderBlock} 
        />
        <Footer data={localeData.footer} isMobile={isMobile} />

        {children}
      </ConnectedThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
