import styled, { css } from 'styled-components';
import { ifProp } from 'src/theme';
import Slider from 'react-slick';

export const SliderContainer = styled.div<{ height?: number }>`
  ${({ theme: t, height }) => css`
    height: ${height ? height : t.$rythm * 33.625}px;
    width: 100%;

    padding: 0 ${t.$rythm * 10.3}px 0 ${t.$rythm * 10.3}px;
    display: flex;
    align-items: center;
  `}
`;

export const ImagesContainer = styled(Slider)<{sliderHeight: number}>`
  ${({ theme: t, sliderHeight }) => css`
    width: ${t.$rythm * 52}px;
    height: ${sliderHeight}px;

    overflow: hidden;
    
    .slick-slide {
     padding: 0 ${t.$rythm / 4}px;
     box-sizing: border-box;
     border-left: ${t.$rythm / 4}px solid transparent;
     border-right: ${t.$rythm / 4}px solid transparent;
    
     &:first-of-type {
       margin-left: -16px;
     }
  }
    
    .slick-prev, .slick-next {
      &::before {
        color: ${t.$text_color}
      }
    }
  `}
`;

export const PrevImageButton = styled.button<{ disabled?: boolean }>`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 3.375}px;
    padding: 0;
    margin-right: ${t.$rythm * 2.5625}px;

    outline: none;
    border: 0;
    background: ${t.$bg_transparent};
    color: ${t.$btn_icon_active};
    cursor: pointer;

    ${ifProp({
      disabled: true,
    }, css`
      color: ${t.$btn_icon_disabled};
    `)}

    &:after {
      box-shadow: none;
    }
  `}
`;

export const NextImageButton = styled(PrevImageButton)`
  margin-right: 0;
`;

export const ImageItem = styled.picture<{width?: number}>`
   ${({ theme: t, width }) => css`
    height: 100%;
    width: ${width ? width : t.$rythm * 16}px;
    cursor: zoom-in;
    margin-right:${t.$rythm * 2}px;

    & > img {
      height: 100%;
    }

    &:not(:last-of-type) {
      margin-right: ${t.$rythm * 2}px;
    }
  `}
`;
