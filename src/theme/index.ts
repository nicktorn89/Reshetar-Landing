import * as styledComponents from 'styled-components';
import { switchProp, ifProp } from 'styled-tools';
import { themes } from './vars/colors';
import base from './vars/base';
import purple from './vars/colors/purple';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export type ThemeInterface = typeof base & typeof purple;

export { css, createGlobalStyle, keyframes, ThemeProvider, switchProp, ifProp, themes, base };
export default styled;
