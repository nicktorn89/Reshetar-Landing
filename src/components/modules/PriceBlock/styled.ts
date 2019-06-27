import styled, { css } from 'styled-components';
import { Button } from 'src/components/UI/Button';
import { ifProp } from 'src/theme';

export const PriceBlockContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 56.3}px;
    width: 100%;

    border-top: 1px solid ${t.$block_border_color};
    padding-top: ${t.$rythm * 7.2}px;
  `}
`;

export const PriceBlockTitle = styled.h3`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 51.5}px;
    height: ${t.$rythm * 3.4}px;

    margin: 0 auto ${t.$rythm * 5.875}px auto;
    
    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    color: ${t.$text_color_black};
  `}
`;

export const PriceItemsContainer = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 27}px;
    width: ${t.$rythm * 69.375}px;

    display: flex;

    margin: 0 auto ${t.$rythm * 2.85}px auto;
  `}
`;

export const PriceItem = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 27}px;
    width: ${t.$rythm * 21.875}px;

    display: flex;
    flex-direction: column;

    border: 1px solid ${t.$price_item_border};
    border-radius: ${t.$rythm * 0.625}px;

    background: ${t.$price_item_bg};
    
    &:not(:last-of-type) {
      margin-right: ${t.$rythm * 2}px;
    }
  `}
`;

export const PriceItemTitle = styled.h4`
  ${({ theme: t }) => css`
    color: ${t.$text_color_black};
    font-size: ${t.$rythm * 2}px;

    margin: 0 auto;
    margin-top: ${t.$rythm * 2}px;
  `}
`;

export const PriceItemOptionsContainer = styled.ul`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 10}px;

    margin: ${t.$rythm * 1.4}px 0 ${t.$rythm * 0.75}px ${t.$rythm * 3}px;

    list-style: none;
    line-height: 1.6;
  `}
`;

export const PriceItemOption = styled.li`
  ${({ theme: t }) => css`
    color: ${t.$text_color_black};
    margin-bottom: 0;

    & > svg {
      color: ${t.$btn_icon_active};
      margin-right: ${t.$rythm}px;
    }
  `}
`;

export const PriceItemText = styled.span`
  ${({ theme: t }) => css`
    margin-bottom: ${t.$rythm * 1.4}px;

    color: ${t.$text_color_black};
    font-weight: ${t.$font_weight_base};
    font-size: ${t.$rythm * 2}px;

    text-align: center;
  `}
`;

export const PriceItemNumber = styled.span`
  ${({ theme: t }) => css`
    margin: 0 ${t.$rythm / 2}px;
    
    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    line-height: ${t.$rythm * 3.125}px;

    color: ${t.$text_color_black};
  `}
`;

export const PriceItemOrderButton = styled(Button)<{ active: boolean }>`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 14.68}px;
    margin: 0 auto;

    border: 1px solid ${t.$block_border_color};
    border-radius: ${t.$rythm / 2}px;

    font-size: ${t.$rythm}px;
    font-weight: ${t.$font_weight_bold};

    box-shadow: none;
    color: ${t.$text_color_black};

    outline: none;

    ${ifProp(
      { active: true },
      css`
        color: ${t.$text_color};
        border: 0;
      `,
    )}

    &::after {
      box-shadow: none;
    }

    display: flex;
    justify-content: center;
  `}
`;

export const ClarifyingText = styled.span`
  ${({ theme: t }) => css`
    display: block;
    color: ${t.$text_color_black};
    font-size: ${t.$rythm}px;
    text-align: center;
  `}
`;
