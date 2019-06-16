import styled, { css } from 'styled-components';
import { ifProp } from 'src/theme';

export const RateSliderContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 67.25}px;
    border-top: 1px solid ${t.$block_border_color};
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
    color: ${t.$text_color_black};
  `}
`;

export const RateLink = styled.a`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm}px;
    color: ${t.$anchor_color};
    margin-left: ${t.$rythm * 2}px;
  `}
`;

export const SliderBlock = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 33.625}px;
    width: 100%;

    padding: 0 ${t.$rythm * 10.3}px 0 ${t.$rythm * 10.3}px;
    display: flex;
    align-items: center;
  `}
`;

export const PrevImageButton = styled.button<{ disabled?: boolean }>`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 3.375}px;
    outline: none;
    border: 0;
    background: ${t.$bg_transparent};
    color: ${t.$btn_icon_active};
    padding: 0;
    margin-right: ${t.$rythm * 5.68}px;
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

export const ImagesContainer = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 33.625}px;
    width: ${t.$rythm * 52}px;

    margin-right: ${t.$rythm * 5.375}px;

    display: flex;
  `}
`;

export const ImageItem = styled.img`
   ${({ theme: t }) => css`
    height: 100%;
    width: ${t.$rythm * 16}px;

    &:not(:last-of-type) {
      margin-right: ${t.$rythm * 2}px;
    }
  `}
`;
