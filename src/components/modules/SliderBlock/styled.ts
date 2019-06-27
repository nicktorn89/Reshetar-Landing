import styled, { css } from 'styled-components';

export const SliderBlockContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 58}px;
    border-top: 1px solid ${t.$block_border_color};
  `}
`;

export const SliderBlockHeading = styled.h3`
  ${({ theme: t }) => css`
    display: inline-block;
    margin-top: ${t.$rythm * 9.2}px;
    margin-bottom: ${t.$rythm * 3.8}px;

    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    
    text-align: left;
    margin-left: 466px;

    color: ${t.$text_color_black};

    text-align: center;
  `}
`;
