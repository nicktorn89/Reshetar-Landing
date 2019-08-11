import styled, { css } from 'styled-components';
import { Button } from 'src/components/UI/Button';
import { ifProp } from 'src/theme';
import { Heading } from 'src/components/UI';

export const PriceBlockContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 56.3}px;
    width: 100%;

    border-top: 1px solid ${t.$block_border_color};
    padding-top: ${t.$rythm * 7.2}px;

    @media screen and (min-width: 992px) and (max-width: 1200px) {
      min-height: 1200px;
    }

    @media ${t.$phone}, ${t.$tablet}, (max-width: 1134px) {
      width: 100%;
      height: ${t.$rythm * 65.5}px;

      background: ${t.$form_bg};

      overflow: hidden;
      
      padding: 0;
    }
  `}
`;

export const PriceBlockHeading = styled(Heading)`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 51.5}px;
    height: ${t.$rythm * 3.4}px;

    margin: 0 auto ${t.$rythm * 5.875}px auto;

    @media (max-width: 1150px) {
      margin-top: ${t.$rythm * 2}px;
    }
    
    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 15.625}px;
      height: 69px;

      margin: ${t.$rythm * 1.3125}px auto ${t.$rythm * 2.6875}px auto;
    
      font-size: ${t.$rythm * 1.5625}px;
      line-height: 1.4;
    }
  `}
`;

export const PriceBlockItemsContainer = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 27}px;
    width: 77%;

    display: flex;

    margin: 0 auto ${t.$rythm * 2.85}px auto;   

    @media screen and (min-width: 992px) and (max-width: 1200px) {
      min-height: 990px;
    }

    @media ${t.$phone}, ${t.$tablet}, (max-width: 1134px) {
      width: ${t.$rythm * 20}px;
      height: 814px;

      margin: 0 auto;
      margin-bottom: ${t.$rythm * 1.5}px;

      flex-direction: column;
    }
  `}
`;

export const PriceBlockItem = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 27}px;
    width: 31.5%;

    display: flex;
    flex-direction: column;

    border: 1px solid ${t.$price_item_border};
    border-radius: ${t.$rythm * 0.625}px;

    background: ${t.$price_item_bg};
    
    &:not(:last-of-type) {
      margin-right: 2.9%;
    }

    @media screen and (min-width: 992px) and (max-width: 1200px) {
      min-height: 320px;
    }

    @media ${t.$phone}, ${t.$tablet}, (max-width: 1134px) {
      width: ${t.$rythm * 18.4375}px;
      height: 265px;

      &:not(:last-of-type) {
        margin: 0 auto ${t.$rythm * 0.75}px auto;
      }

      &:last-of-type {
        margin: 0 auto;
      }
    }
  `}
`;

export const PriceBlockItemTitle = styled.h4`
  ${({ theme: t }) => css`
    color: ${t.$text_color_black};
    font-size: ${t.$rythm * 2}px;

    margin: 0 auto;
    margin-top: ${t.$rythm * 2}px;

    @media ${t.$phone}, ${t.$tablet}, (max-width: 1134px) {
      height: ${t.$rythm * 2}px;

      margin: ${t.$rythm}px auto;
      margin-top: ${t.$rythm / 2}px;
      margin-bottom: ${t.$rythm * 1.3}px;

      font-size: ${t.$rythm * 1.375}px;
    }
  `}
`;

export const PriceItemOptionsContainer = styled.ul`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 10}px;

    margin: ${t.$rythm * 1.5}px 0 ${t.$rythm * 0.75}px 13%;

    list-style: none;
    line-height: 1.6;

    @media ${t.$phone}, ${t.$tablet}, (max-width: 1134px) {
      height: 130px;
      margin: 0 auto;
    }
  `}
`;

export const PriceBlockItemOption = styled.li`
  ${({ theme: t }) => css`
    color: ${t.$text_color_black};
    margin-bottom: 0;
    font-size: ${t.$rythm * 1.125}px;

    &&& > svg {
      color: ${t.$btn_icon_active};
      margin-right: ${t.$rythm / 2}px;
      font-size: ${t.$rythm * 1.5}px;;
    }
  `}
`;

export const ItemOptionText = styled.span`
  ${({ theme: t }) => css`
    color: ${t.$text_color_black};

    font-size: ${t.$rythm * 1.25}px;
    margin-bottom: 0;
  `}
`;

export const PriceBlockItemText = styled.span`
  ${({ theme: t }) => css`
    margin-bottom: ${t.$rythm * 1.5625}px;

    color: ${t.$text_color_black};
    font-weight: ${t.$font_weight_base};
    font-size: ${t.$rythm * 2}px;

    text-align: center;

    @media ${t.$phone}, ${t.$tablet}, (max-width: 1200px) {
      font-size: ${t.$rythm * 1.25}px;
    }
  `}
`;

export const PriceBlockItemNumber = styled.span`
  ${({ theme: t }) => css`
    margin: 0 ${t.$rythm / 2}px;
    
    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    line-height: ${t.$rythm * 3.125}px;

    color: ${t.$text_color_black};

    @media ${t.$phone}, ${t.$tablet}, (max-width: 1134px) {
      font-size: ${t.$rythm * 1.875}px;
      line-height: 1.5;
    }
  `}
`;

export const PriceBlockItemOrderButton = styled(Button)<{ active: boolean }>`
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

export const PriceBlockClarifyingText = styled.span`
  ${({ theme: t }) => css`
    display: block;
    color: ${t.$text_color_black};
    font-size: ${t.$rythm}px;
    text-align: center;

    @media ${t.$phone}, ${t.$tablet}, (max-width: 1134px) {
      width: ${t.$rythm * 20}px;
      padding: 0 ${t.$rythm * 3.25}px 0 ${t.$rythm * 1.25}px;
      margin: 0 auto;
      
      text-align: left;

      font-size: ${t.$rythm * 0.75}px;
      line-height: 1.25;
    }
  `}
`;
