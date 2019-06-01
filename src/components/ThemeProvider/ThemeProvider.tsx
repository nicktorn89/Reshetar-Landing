import React, { Fragment } from 'react';
import GlobalStyle  from '../../theme/global-style';
import {  ThemeProvider as ThemeProviderByStyledComponents, themes, base } from '../../theme';
import { ThemeProviderProps } from './types';

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const currentTheme = { ...base, ...themes[theme] };

  return (
    <ThemeProviderByStyledComponents theme={currentTheme}>
      <Fragment>
        {children}
        <GlobalStyle theme={currentTheme} />
      </Fragment>
    </ThemeProviderByStyledComponents>
  );
};

export default ThemeProvider;
