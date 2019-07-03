import styled, { css, ifProp } from 'src/theme';
import Slider from 'react-slick';
import { Button as ButtonComponent } from 'src/components/UI/Button';

export const SliderContainer = styled(Slider)<{sliderHeight: number}>`
  ${({ theme: t, sliderHeight }) => css`
    width: ${t.$rythm * 20}px;
    height: ${sliderHeight}px;
    
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

export const SliderItem = styled.div<{sliderHeight: number}>`
  ${({ theme: t, sliderHeight }) => css`
    height: ${sliderHeight}px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    outline: none;
  `}
`;

export const ItemImage = styled.img<{sliderHeight: number}>`
  ${({ theme: t, sliderHeight }) => css`
    height: ${sliderHeight}px;
  `}
`;

export const Button = styled(ButtonComponent)`
  ${({ theme: t }) => css`
    font-weight: normal;
    
    &::after {
      box-shadow: none;
    }
  `}
`;

export const ItemText = styled.div`
  ${({ theme: t }) => css`
    font-size: ${t.$font_size_sm}px;
    padding-top: ${t.$rythm / 2}px;
    padding-bottom: ${t.$rythm / 2}px;
    max-height: 30px;
    text-align: left;
    text-overflow: ellipsis;
  `}
`;
