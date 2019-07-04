import styled, { css } from 'styled-components';
import { ifProp } from 'src/theme';
import { Button } from 'src/components/UI/Button';

export const SliderContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 58}px;

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      height: ${t.$rythm * 45.6875}px;

      background: ${t.$form_bg};

      overflow: hidden;
      
      margin: 0 auto;
    }
  `}
`;

export const SliderHeading = styled.h2`
  ${({ theme: t }) => css`
    width: 100%;
    max-height: ${t.$rythm * 3.5}px;

    margin-bottom: ${t.$rythm * 5.75}px;

    font-size: ${t.$rythm * 3.125}px;

    text-align: center;
    color: ${t.$text_color_black};

    @media ${t.$phone}, ${t.$tablet} {      
      width: ${t.$rythm * 20}px;
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
    padding: 0 11%;
    margin-bottom: ${t.$rythm * 5}px;
  `}
`;

export const Tab = styled.button<{active: boolean}>`
  ${({ theme: t }) => css`
    width: 30%;
    height: ${t.$rythm * 3}px;
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
    display: flex;    
    height: ${t.$rythm * 25.5}px;
    padding: 0 11.2% 0 13.35%;
    justify-content: center;

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;

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
    margin-right: ${t.$rythm * 3.5}px;

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
      margin: 0 0 ${t.$rythm * 0.6875}px ${t.$rythm / 2}px;
      
      line-height: 1.28;
      font-size: ${t.$rythm * 1.125}px;
      font-weight: normal;
    }
  `}
`;

export const TextDesc = styled.span`
  ${({ theme: t }) => css`
    min-height: ${t.$rythm * 8}px;
    width: ${t.$rythm * 13}px;

    display: flex;
    flex-wrap: wrap;

    margin: ${t.$rythm * 2}px 0 0 ${t.$rythm}px;

    font-size: ${t.$rythm * 1.25}px;
    line-height: 1;
    
    & > span {
      color: ${t.$text_color_black};
      font-size: ${t.$rythm}px;
      white-space: nowrap
      width: 100%;
    }

    & > span:not(:last-of-type) {
      margin-bottom: ${t.$rythm}px;
    }
  `}
`;

export const SliderControlsGroup = styled.div`
  ${({ theme: t }) => css`
    display: flex;
    margin-top: ${t.$rythm * 2.5}px;
    padding-left: ${t.$rythm / 2}px;
  `}
`;

export const AccordionsContainer = styled.div`
  ${({ theme: t }) => css`
    min-height: ${t.$rythm * 25.8125}px;

    margin-left: ${t.$rythm * 0.8125}px;

    .Collapsible {
      overflow: hidden;
    }

    .opened-accordion {
      border: 1px solid ${t.$accordion_slider_border};
      border-top-left-radius: ${t.$rythm * 2}px;
      border-bottom-left-radius: ${t.$rythm * 2}px;

      margin-bottom: ${t.$rythm}px;
    }

    .Collapsible__contentInner {
      margin-bottom: ${t.$rythm * 2}px;
      padding-left: ${t.$rythm * 1.125}px;
      font-size: ${t.$rythm}px;

      color: ${t.$text_color_black};
      background: ${t.$bg};
    }

    .Collapsible__contentInner p {
      margin-bottom: ${t.$rythm * 1.5}px;
      font-size: ${t.$rythm}px;
      line-height: ${t.$rythm * 1.5}px; 
    }

    .Collapsible__contentInner p:last-child {
      margin-bottom: 0; 
    }

    .Collapsible__trigger {
      display: block;
      position: relative;

      height: ${t.$rythm * 1.5}px;
      margin: ${t.$rythm}px 0 ${t.$rythm}px ${t.$rythm * 2.875}px;

      font-size: ${t.$rythm * 1.125}px;
      font-weight: ${t.$font_weight_normal};
      text-decoration: none;  
      color: ${t.$text_color_black};

      cursor: pointer;
    }

    .Collapsible__trigger.is-open {
      margin-bottom: ${t.$rythm * 2.25}px;
    }
    
    .Collapsible__trigger.is-closed {
      margin-top: 0;
    }
    
    .Collapsible__trigger:before {
      font-family: 'FontAwesome';
      content: '\f107';
      font-size: ${t.$rythm * 1.5}px;
      font-weight: ${t.$font_weight_bold};
      position: absolute;
      right: ${t.$rythm * 16.6875}px;
      bottom: -1px;
      display: block;
      transition: transform 300ms; 
      color: ${t.$text_color_black};
    }

    .Collapsible__trigger.is-open:before {
      transform: rotateZ(180deg); 
      color: ${t.$text_color_alt};
    }
  `}
`;

export const SliderControl = styled(Button)<{next?: boolean}>`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 3.125}px;
    width: ${t.$rythm * 3.125}px;
    
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

export const ImageItem = styled.img`
   ${({ theme: t }) => css`
    height: 100%;
    width: ${t.$rythm * 22}px;
    cursor: zoom-in;

    &:first-of-type {
      margin-right: ${t.$rythm * 2}px;
    }
  `}
`;
