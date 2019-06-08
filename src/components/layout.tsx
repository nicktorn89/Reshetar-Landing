import React, { useContext } from 'react';
import { LayoutProps } from './types';

import './layout.css';
import LocaleData from 'src/locale';
import { LocaleDataType } from 'src/types';
import ConnectedThemeProvider from 'src/components/modules/ThemeProvider/index';

import Header from 'src/components/modules/Header';
import Hero from 'src/components/modules/Hero';
import InfoBlock from './modules/InfoBlock/index';
import SliderWithTabs from './modules/SliderWithTabs/index';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const localeData: LocaleDataType = useContext(LocaleData);

  return (
    <React.Fragment>
      <ConnectedThemeProvider theme={'purple'}>
        <Header data={localeData.header} />
        <Hero data={localeData.hero} />
        <InfoBlock data={localeData.infoBlock} />
        <SliderWithTabs data={localeData.sliderWithTabs} />
        {children}
      </ConnectedThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
