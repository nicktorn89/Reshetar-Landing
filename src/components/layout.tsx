import React, { useContext } from 'react';
import { LayoutProps } from './types';

import './layout.css';
import LocaleData, { LocaleDataType } from '..//locale';
import ConnectedThemeProvider from './ThemeProvider/index';

import Header from './Header/index';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const localeData: LocaleDataType = useContext(LocaleData);

  return (
    <React.Fragment>
      <ConnectedThemeProvider theme={'purple'}>
        <Header data={localeData.header} />
        {children}
      </ConnectedThemeProvider>
    </React.Fragment>
  );
};

export default Layout;
