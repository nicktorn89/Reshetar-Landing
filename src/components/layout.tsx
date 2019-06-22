import React, { useContext } from 'react';
import { LayoutProps } from './types';

import './layout.css';
import LocaleData from 'src/locale';
import { LocaleDataType } from 'src/types';
import ConnectedThemeProvider from 'src/components/modules/ThemeProvider/index';

import Header from 'src/components/modules/Header';
import Hero from 'src/components/modules/Hero';
import InfoBlock from './modules/InfoBlock';
import SliderWithTabs from './modules/SliderWithTabs';
import RateSlider from './modules/RateSlider';
import PriceBlock from './modules/PriceBlock';
import SliderBlock from './modules/SliderBlock';
import FAQ from './modules/FAQ';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const localeData: LocaleDataType = useContext(LocaleData);
  const renderSliderBlocks = localeData.sliderBlocks.map((block, index) => <SliderBlock data={block} key={index} />);

  return (
    <React.Fragment>
      <ConnectedThemeProvider theme={'purple'}>
        <Header data={localeData.header} />
        <Hero data={localeData.hero} />
        <InfoBlock data={localeData.infoBlock} />
        <SliderWithTabs data={localeData.sliderWithTabs} />
        <RateSlider data={localeData.rateSlider} />
        <PriceBlock data={localeData.priceBlock} />
        
        {renderSliderBlocks}
        
        <FAQ data={localeData.faq} />

        {children}
      </ConnectedThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
