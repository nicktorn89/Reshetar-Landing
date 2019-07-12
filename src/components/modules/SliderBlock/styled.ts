import styled, { css } from 'styled-components';
import { SliderContainer } from 'src/components/UI/MobileSlider/styled';

export const SliderBlockContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 47.8125}px;
    border-top: 1px solid ${t.$block_border_color};

    &:nth-child(odd) {
      background: #fafbfc;
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      height: ${t.$rythm * 21.28125}px;

      overflow: hidden;

      ${SliderContainer} {
        width: ${t.$rythm * 20}px;
        margin: 0 auto;
      }
    }
  `}
`;

export const SliderBlockHeading = styled.h3`
  ${({ theme: t }) => css`
    display: block;
    margin: ${t.$rythm * 9.2}px auto ${t.$rythm * 3.8}px auto;

    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    
    text-align: left;

    color: ${t.$text_color_black};

    text-align: center;

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;
      
      margin: ${t.$rythm * 1.6875}px auto ${t.$rythm * 0.625}px auto;

      display: block;

      line-height: 1.4;
      font-size: ${t.$rythm * 1.5625}px;
    }
  `}
`;
