import styled, { css } from 'styled-components';
import { ifProp } from 'src/theme';
import { Button } from 'src/components/UI/Button';

export const SliderContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 58}px;
  `}
`;

export const SliderHeading = styled.h2`
  ${({ theme: t }) => css`
    color: ${t.$text_color_black};
    font-size: ${t.$rythm * 3.125}px;
    text-align: center;
    width: 100%;
    max-height: ${t.$rythm * 3.5}px;
    margin-bottom: ${t.$rythm * 5.75}px;
  `}
`;

export const TabsContainer = styled.div`
  ${({ theme: t }) => css`
    padding: 0 ${t.$rythm * 10}px;
    margin-bottom: ${t.$rythm * 5}px;
  `}
`;

export const Tab = styled.button<{active: boolean}>`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 22}px;
    height: ${t.$rythm * 3}px;
    background-color: ${t.$tabs_bg_color};
    cursor: pointer;
    border-radius: ${t.$border_radius_base * 2}px;

    border: ${t.$border_width_base * 1.5}px solid ${t.$tabs_item_border_color};
    outline: none;

    &:first-child {
      margin-right: ${t.$rythm * 2}px;
    }

    &:nth-child(2) {
      margin-right: ${t.$rythm * 2}px;
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
    padding: 0 ${t.$rythm * 10}px 0 ${t.$rythm * 12}px;
  `}
`;

export const DescContainer = styled.div`
  ${({ theme: t }) => css`
    height: 100%;
    width: ${t.$rythm * 18.75}px;
    margin-right: ${t.$rythm * 3.5}px;
  `}
`;

export const HeadingDesc = styled.h3`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 5}px;
    width: ${t.$rythm * 18.75}px;
    margin-top: ${t.$rythm * 1.25}px;
    font-size: ${t.$rythm * 1.25}px;
    color: ${t.$text_color_black};
  `}
`;

export const TextDesc = styled.span`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 8}px;
    width: ${t.$rythm * 13}px;
    margin: ${t.$rythm * 2}px 0 0 ${t.$rythm}px;
    font-size: ${t.$rythm * 1.25}px;
    line-height: ${t.$rythm}px;
    display: flex;
    flex-wrap: wrap;
    
    & > span {
      color: ${t.$text_color_black};
      font-size: ${t.$rythm}px;
      white-space: nowrap
    }

    & > span:not(:last-of-type) {
      margin-bottom: ${t.$rythm}px;
    }
  `}
`;

export const SliderControlsGroup = styled.div`
  ${({ theme: t }) => css`
    display: flex;
    margin-top: ${t.$rythm * 3}px;
    padding-left: ${t.$rythm / 2}px;
  `}
`;

export const SliderControl = styled(Button)<{next?: boolean}>`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 3.125}px;
    width: ${t.$rythm * 3.125}px;
    border-radius: ${t.$border_radius_base * 2}px;
    border: ${t.$border_width_base / 2}px solid ${t.$tabs_item_border_color};
    margin-right: ${t.$rythm * 0.75}px;

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
