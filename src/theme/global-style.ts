import { createGlobalStyle } from './';
import baseTheme from './vars/base';
import normalize from 'styled-normalize';
import './style.css';

import slickcarousel from './libs/slick-carousel';

export default createGlobalStyle`
  ${normalize}
  ${slickcarousel}
  
  html, body, #root {
    width: 100%;
    height: 100%;

    @media screen and (min-width: 1024px) {
      overflow: auto;
    }
  }
  
  span, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, ol, ul, li, fieldset, form, label, legend, th, td,
  header, div {
    font-family: ${baseTheme.$font_family};
    color: ${baseTheme.$text_color};
  }

  svg:not(:root).svg-inline--fa {
    overflow: visible;
    font-size: 30px;
  }
`;