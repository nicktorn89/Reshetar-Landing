import React, { useContext } from 'react';
import { LayoutProps } from './types';

import './layout.css';
import LocaleData, { LocaleDataType } from 'src/locale';
import ConnectedThemeProvider from 'src/components/modules/ThemeProvider/index';

import Header from 'src/components/modules/Header';
import Hero from 'src/components/modules/Hero';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const localeData: LocaleDataType = useContext(LocaleData);

  return (
    <React.Fragment>
      <ConnectedThemeProvider theme={'purple'}>
        <Header data={localeData.header} />
        <Hero data={localeData.hero} />
        {children}
      </ConnectedThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
