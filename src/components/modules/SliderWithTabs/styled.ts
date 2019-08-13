import styled, { css } from 'styled-components';
import { ifProp } from 'src/theme';
import { Button } from 'src/components/UI/Button';
import Slider from 'react-slick';
import { SliderBlock } from 'src/components/UI/MobileSlider/styled';

export const SliderContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 58}px;

    @media ${t.$phone}, ${t.$tablet} {
      // display: none;
      width: 100%;
      min-height: ${t.$rythm * 57}px;
      height: auto;

      background: ${t.$form_bg};

      overflow: hidden;
      
      margin: 0 auto;
    }
  `}
`;

export const SliderHeading = styled.h2`
  ${({ theme: t }) => css`
    max-height: ${t.$rythm * 3.5}px;
    width: 60%;

    position: relative;
    bottom: 6px;
    left: 7px;

    margin: 0 auto ${t.$rythm * 5.5625}px auto;
    

    font-size: ${t.$rythm * 3.125}px;

    text-align: center;
    color: ${t.$text_color_black};

    @media ${t.$phone}, ${t.$tablet} {      
      width: ${t.$rythm * 19.6875}px;
      margin: 0 auto;

      font-size: ${t.$rythm * 1.5625}px;
      line-height: 1.4;
      margin: ${t.$rythm * 1.375}px auto ${t.$rythm * 1.6875}px auto;

      padding-left: ${t.$rythm * 0.875}px;
      text-align: left;
    }
  `}
`;

export const TabsContainer = styled.div`
  ${({ theme: t }) => css`
    max-width: ${t.$rythm * 69.0625}px;
    width: 76.3%;
    margin: 0 auto;
    margin-bottom: ${t.$rythm * 5}px;

    display: flex;
  `}
`;

export const Tab = styled.button<{active: boolean}>`
  ${({ theme: t }) => css`
    width: 31.5%;
    height: ${t.$rythm * 3.1875}px;
    border-radius: ${t.$border_radius_base * 2}px;

    border: ${t.$border_width_base / 2}px solid ${t.$tabs_item_border_color};
    
    background-color: ${t.$form_bg};
    cursor: pointer;
    outline: none;

    font-size: ${t.$rythm * 1.25}px;
    font-weight: bold;

    &:first-child {
      margin-right: 2.7%;
    }

    &:nth-child(2) {
      margin-right: 2.5%;
    }

    ${ifProp(
      { active: true },
      css`
        border: none;
        background-color: ${t.$tabs_bg_active_color};
        color: ${t.$tabs_text_active_color};
      `,
    )}
  `}
`;

export const ImagesContainer = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 28.8125}px;
    padding: 0 11.2% 0 13.35%;

    display: flex;
    justify-content: center;

    @media screen and (min-width: 992px) and (max-width: 1200px) {
      padding: 0 2% 0 7%;
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;
      min-height: ${t.$rythm * 28.8125}px;
      height: auto;

      justify-content: flex-start;
      margin: 0 auto;
      padding: 0;
    }
  `}
`;

export const DescContainer = styled.div`
  ${({ theme: t }) => css`
    height: 100%;
    width: ${t.$rythm * 18.75}px;
    margin-right: ${t.$rythm * 2.8125}px;

    @media ${t.$phone}, ${t.$tablet} {
      margin-right: 0;
      width: ${t.$rythm * 20}px;
    }
  `}
`;

export const HeadingDesc = styled.h3`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 5}px;
    width: ${t.$rythm * 18.75}px;

    margin-top: ${t.$rythm * 1.25}px;

    font-size: ${t.$rythm * 1.25}px;
    color: ${t.$text_color_black};
    line-height: normal;

    @media ${t.$phone}, ${t.$tablet} {
      margin: 0 0 ${t.$rythm * 0.6875}px ${t.$rythm}px;

      position: relative;
      top: 10px;
      
      line-height: 1.28;
      font-size: ${t.$rythm * 1.125}px;
      font-weight: normal;
    }
  `}
`;

export const TextDesc = styled.span`
  ${({ theme: t }) => css`
    min-height: ${t.$rythm * 8}px;
    width: 82%;

    display: flex;
    flex-wrap: wrap;

    margin-top: ${t.$rythm * 2}px;

    font-size: ${t.$rythm * 1.25}px;
    line-height: 1;
  `}
`;

export const AdvantageTextContainer = styled.div`
  ${({ theme: t }) => css`
    display: flex;

    &:not(:last-of-type) {
      margin-bottom: ${t.$rythm}px;
    }

    &&& > svg {
      font-size: ${t.$rythm}px;
      color: ${t.$btn_icon_active};
      margin-right: ${t.$rythm}px;
    }
    
    & > span {
      color: ${t.$text_color_black};
      line-height: 1.1;
      font-size: ${t.$rythm}px;
      width: 100%;
    }
  `}
`;

export const SliderControlsGroup = styled.div`
  ${({ theme: t }) => css`
    display: flex;
    margin-top: ${t.$rythm * 2.5}px;
    padding-left: ${t.$rythm / 2}px;

    @media ${t.$phone}, ${t.$tablet} {
      display: none;
      margin-top: ${t.$rythm * 1.625}px;
      padding-left: ${t.$rythm * 1.25}px;
    }
  `}
`;

export const AccordionsContainer = styled.div`
  ${({ theme: t }) => css`
    min-height: ${t.$rythm * 25.8125}px;

    margin-left: ${t.$rythm * 1.1875}px;

    .accordion {
      border: 0;
    }

    .accordion__button[aria-expanded='true'] {
      border: 2px solid rgb(235, 235, 236);
      border-bottom: 0;
      border-top-left-radius: 32px;

      padding-bottom: 26px;
    }

    .accordion__button[aria-expanded='false'] {
      height: ${t.$rythm * 2}px;
      margin-bottom: ${t.$rythm}px;
      padding: 0 18px;
    }

    .accordion__item + .accordion__item {
      border: 0;
    }
  
    .accordion__panel {
      border: 2px solid rgb(235, 235, 236);
      border-top: 0;
      border-bottom-left-radius: 32px;
    }

    .accordion__button:before {
      transform: rotate(45deg);
      position: relative;
      bottom: 4px;

      height: 12px;
      width: 12px;
      border-bottom: 3px solid ${t.$text_color_black};
      border-right: 3px solid ${t.$text_color_black};
    }

    .accordion__button[aria-expanded='true']::before, .accordion__button[aria-selected='true']::before {
      top: 4px;

      transform: rotate(225deg);

      border-bottom: 3px solid ${t.$text_color_alt};
      border-right: 3px solid ${t.$text_color_alt};
    }

    .accordion__panel {
      overflow: hidden;
      padding-bottom: 40px;
      margin-bottom: ${t.$rythm}px;
    }

    .accordion__button {
      background-color: transparent;
      outline: none;

      &:hover {
        background-color: transparent;
      }
    }

    ${SliderBlock} {
      position: relative;
      right: 83px;
      bottom: 2px;

      .slick-slider {
        width: 350px;
      }
    }
  `}
`;

export const SliderControl = styled(Button)<{next?: boolean}>`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 3.125}px;
    width: ${t.$rythm * 3.125}px;

    padding: 0 ${t.$rythm / 2}px;
    
    margin-right: ${t.$rythm * 0.75}px;

    border-radius: ${t.$border_radius_base * 2}px;
    border: ${t.$border_width_base / 2}px solid ${t.$tabs_item_border_color};

    color: ${t.$text_color_black};
    background: ${t.$tabs_bg_color};
    outline: none;
    cursor: pointer;

    &:after {
      box-shadow: none;
    }

    ${ifProp(
      { next: true },
      css`
        width: ${t.$rythm * 14.5}px;
        margin-right: 0;
        white-space: nowrap;

        & > span {
          font-size: ${t.$rythm}px;
        }
      `,
    )}
  `}
`;

export const ImageItem = styled.picture`
   ${({ theme: t }) => css`
    height: 461px;
    margin-right: ${t.$rythm * 2}px;
    cursor: zoom-in;

    & > img {
      height: 100%;
      width: ${t.$rythm * 22}px;
    }

    &:first-of-type {
      margin-right: ${t.$rythm * 2}px;
    }
  `}
`;

export const SliderUI = styled(Slider)<{sliderHeight: number}>`
  ${({ theme: t, sliderHeight }) => css`
    width: ${t.$rythm * 52}px;
    height: ${sliderHeight}px;

    overflow: hidden;
    
    .slick-slide {
      width: 350px;
      height: 461px;
      padding: 0 ${t.$rythm / 4}px;
      box-sizing: border-box;
      border-left: ${t.$rythm / 4}px solid transparent;
      border-right: ${t.$rythm / 4}px solid transparent;
    }

    .slick-current {
      margin-right: ${t.$rythm / 2}px;
    }
    
    .slick-prev::before, .slick-next::before  {
      color: ${t.$text_color}
    }
  `}
`;
