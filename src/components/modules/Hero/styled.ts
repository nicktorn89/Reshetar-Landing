import styled, { css } from 'styled-components';
import { Button, Logo, Select, Input, Checkbox, InputMask, Heading } from 'src/components/UI';
import { HeaderNumberSpan } from '../Header/styled';

export const HeroContainer = styled.section`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 56.4375}px;

    display: flex;
    flex-wrap: wrap;

    background: url('https://reshetar.ru/images/bg.jpg') repeat center center fixed;
    background-size: cover;

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 53.375}px;

      overflow: hidden;

      flex-direction: column;
      flex-wrap: nowrap;
    }
  `}
`;

export const HeroLogoBlock = styled.div`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 5.5}px;

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 3.9375}px;

      background: ${t.$bg};
    }
  `}
`;

export const HeroLogoContainer = styled.div`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 1.875}px 0 0 1.4%;

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 3.9375}px;
      width: ${t.$rythm * 20}px;
      margin: 0 auto;

      padding-left: ${t.$rythm * 1.25}px;

      display: flex;
      justify-content: space-between;

      & > div {
        height: ${t.$rythm * 2.5625}px !important;
        width: ${t.$rythm * 7.5}px !important;
        margin-top: ${t.$rythm * 0.8125}px;
      }

      ${HeaderNumberSpan} {
        width: ${t.$rythm * 9}px;
        height: ${t.$rythm * 1.375}px;
        
        font-size: ${t.$rythm}px;
        font-weight: 600;
        
        margin-right: ${t.$rythm * 0.75}px;
        margin-top: ${t.$rythm * 1.5}px;

        color: ${t.$text_color_black};
      }
    }
  `}
`;

export const HeroLogoImg = styled(Logo)`
`;

export const HeroTextBlock = styled.div`
  ${({ theme: t }) => css`
    width: 51.4%;
    height: 100%;    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;
      margin: 0 auto;
    }
  `}
`;

export const HeroHeading = styled(Heading)`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 26}px;
    height: ${t.$rythm * 9.4}px;

    margin: ${t.$rythm * 4}px 0 0 22.7%;

    line-height: ${t.$rythm * 4.5}px;
    text-align: left;

    @media screen and (min-width: 992px) and (max-width: 1200px) {
      margin-left: 19.5%;
    }

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 5.625}px;
      width: ${t.$rythm * 18}px;
      
      margin: ${t.$rythm * 3.8125}px 0 0 ${t.$rythm * 1.3125}px;

      font-size: ${t.$rythm * 2.5}px;
      line-height: 1.13;
    }
  `}
`;

export const HeroDescription = styled.span`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 1.625}px 0 0 22%;
    height: ${t.$rythm * 4.375}px;

    color: ${t.$text_color_black};

    font-size: ${t.$rythm * 1.875}px;
    line-height: 1.17;

    @media ${t.$phone}, ${t.$tablet} {
      margin: ${t.$rythm / 2}px 0 ${t.$rythm * 0.8125}px ${t.$rythm * 1.25}px;

      font-size: ${t.$rythm * 1.125}px;
      line-height: 1.39;
    }
  `}
`;

export const HeroPriceBlock = styled.div`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 14.5}px;
    height: ${t.$rythm * 3.125}px;

    margin: ${t.$rythm}px 0 0 22.3%;
    
    background-color: ${t.$text_background_color};
    padding-left: ${t.$rythm / 2}px;

    @media ${t.$phone}, ${t.$tablet} {
      margin-left: ${t.$rythm * 1.1875}px;
      margin-top: 0;
    }
  `}
`;

export const HeroPrice = styled.span`
  ${({ theme: t }) => css`
    margin: 0 ${t.$rythm * 0.75}px 0 ${t.$rythm / 4}px;

    color: ${t.$text_color_black};
    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    line-height: ${t.$rythm * 3.125}px;
  `}
`;

export const HeroPriceCurrency = styled.span`
  ${({ theme: t }) => css`
    color: ${t.$text_color_black};
    font-size: ${t.$rythm * 1.875}px;
    line-height: ${t.$rythm * 3.125}px;
  `}
`;

export const HeroUntilDate = styled.span`
  ${({ theme: t }) => css`
    min-width: ${t.$rythm * 10}px;
    height: ${t.$rythm * 3}px;
    
    padding: 0 ${t.$rythm * 0.75}px;

    margin: ${t.$rythm * 0.75}px 0 0 22.6%;

    font-size: ${t.$rythm * 1.875}px;
    line-height: ${t.$rythm * 3.125}px;
    color: ${t.$text_color_black};
    background-color: ${t.$text_background_color};

    @media ${t.$phone}, ${t.$tablet} {
      margin: 11px 0 0 19px;
    }
  `}
`;

export const HeroPriceNote = styled.span`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 0.75}px 0 0 22%;
    font-size: ${t.$rythm * 0.75}px;
    line-height: ${t.$rythm}px;
    color: ${t.$text_color_black};

    @media ${t.$phone}, ${t.$tablet} {
      margin-left: ${t.$rythm * 1.25}px;
      line-height: 1.25;
    }
  `}
`;

export const HeroFormBlock = styled.div`
  ${({ theme: t }) => css`
    width: 48%;
    height: 100%;

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;
      margin: 0 auto;
    }
  `}
`;

export const HeroFormContainer = styled.form`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 24.8125}px;
    height: ${t.$rythm * 30.5}px;
    margin-top: ${t.$rythm * 4}px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    border-radius: ${t.$rythm * 1.25}px;
    background: ${t.$form_bg};

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 19.375}px;
      width: ${t.$rythm * 20}px;

      margin-top: ${t.$rythm * 1.125}px;
      background: none;
    }
  `}
`;

export const HeroFormHeading = styled.span`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 4.8125}px;

    margin: ${t.$rythm * 2.0625}px 0 0 ${t.$rythm * 1.625}px;

    text-align: left;
    font-stretch: normal;
    line-height: 1.17;

    color: ${t.$text_color_black};
    font-size: ${t.$font_size_base * 1.875}px;

    opacity: 0.9;
  `}
`;

export const HeroInputsGroup = styled.div`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 15.75}px;
    padding: 0 ${t.$rythm * 3.5}px 0 ${t.$rythm * 3.375}px;

    margin-bottom: ${t.$rythm * 2}px;

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 17.6875}px;
      padding: 0 ${t.$rythm * 0.75}px;
      margin-bottom: 0;
      padding-left: 18px;
      padding-right: 6px;

      .rc-checkbox-inner {
        width: 40px;
        height: 40px;
      }
    }
  `}
`;

export const HeroFormSendButton = styled(Button)`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 18}px;
    height: ${t.$rythm * 3.8125}px;

    position: relative;
    bottom: ${t.$rythm * 0.1875}px;

    font-size: ${t.$rythm * 1.25}px;

    line-height: ${t.$rythm * 1.5}px;
    margin-bottom: ${t.$rythm * 2}px;
    border-radius: ${t.$rythm * 0.625}px;

    display: flex;
    justify-content: center;
    
    &::after {
      content: none;
      box-shadow: none;
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: 295px;
      left: 7px;
      border-radius: ${t.$rythm}px;
      padding: 0 ${t.$rythm * 0.75}px;
      font-size: ${t.$rythm}px;
    }
  `}
`;

export const HeroFormSelect = styled(Select)`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 18}px;

    &:not(:last-child) {
      margin-bottom: ${t.$rythm * 1.3125}px;
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: ${t.$rythm}px;
      }
    }
  `}
`;

export const HeroFormText = styled(Input)`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 18}px;

    &:not(:last-child) {
      margin-bottom: ${t.$rythm * 1.3125}px;
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: ${t.$rythm}px;
      }
    }
  `}
`;

export const HeroFormNumber = styled(Input)`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 18}px;

    &:not(:last-child) {
      margin-bottom: ${t.$rythm * 1.3125}px;
    }
    
    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: ${t.$rythm}px;
      }
    }
  `}
`;

export const HeroFormInputMask = styled(InputMask)`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 18}px;

    &:not(:last-child) {
      margin-bottom: ${t.$rythm * 1.3125}px;
    }
    
    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: ${t.$rythm}px;
      }
    }
  `}
`;

export const HeroFormCheckbox = styled(Checkbox)`
`;
