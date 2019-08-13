import styled, { css } from 'styled-components';
import { PrevImageButton, ImagesContainer, NextImageButton } from 'src/components/UI/Slider/styled';
import { SliderContainer } from 'src/components/UI/MobileSlider/styled';

export const RateSliderContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 67.25}px;
    border-top: 1px solid ${t.$block_border_color};

    background: #fafbfc;

    ${PrevImageButton} {
      margin-right: ${t.$rythm * 5.68}px;
    }
    
    ${ImagesContainer} {
      margin-right: ${t.$rythm * 5.375}px;
    }

    ${NextImageButton} {
      margin-right: 0;
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      height: ${t.$rythm * 40.875}px;
      background: none;

      overflow: hidden;

      ${SliderContainer} {
        width: ${t.$rythm * 20}px;
        margin: 0 auto;
      }
    }
  `}
`;

export const RateContainer = styled.div`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 15}px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin: ${t.$rythm * 6.8}px 0 ${t.$rythm * 3.875}px 0;

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;

      margin: 0 auto;
      margin-bottom: ${t.$rythm * 2.125}px;
      
      padding: 0;
    }
  `}
`;

export const RateNumber = styled.span`
  ${({ theme: t }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${t.$rythm * 6.5}px;
    height: ${t.$rythm * 4.25}px;
    margin-bottom: ${t.$rythm}px;

    border-radius: ${t.$rythm / 2}px;
    background-color: ${t.$rate_block_bg};

    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    color: ${t.$text_color};
    
    @media ${t.$phone}, ${t.$tablet} {
      margin-top: ${t.$rythm * 3}px;
      margin-bottom: ${t.$rythm * 1.3125}px;
      height: 84px;
    }
  `}
`;

export const RateText = styled.span`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 35.5}px;
    height: ${t.$rythm * 7.3}px;

    margin-bottom: ${t.$rythm}px;

    text-align: center;

    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    line-height: 1.1;
    color: ${t.$text_color_black};
    
    @media ${t.$phone}, ${t.$tablet} {
      width: 320px;

      margin: 0 auto;
      margin-bottom: ${t.$rythm / 2}px;

      font-size: ${t.$rythm * 1.5625}px;
      line-height: 1.4;
    }
  `}
`;

export const RateLink = styled.a`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm}px;
    color: ${t.$anchor_color};
    margin-left: ${t.$rythm * 2}px;
    
    @media ${t.$phone}, ${t.$tablet} {
      margin-left: 0;
    }
  `}
`;
