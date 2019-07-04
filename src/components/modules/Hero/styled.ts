import styled, { css } from 'styled-components';
import { Button, Logo, Select, Input, Checkbox, InputMask } from 'src/components/UI';
import { NumberSpan } from '../Header/styled';

export const HeroContainer = styled.section`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 57}px;
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

export const LogoBlock = styled.div`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 5.5}px;

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 3.9375}px;

      background: ${t.$bg};
    }
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 2}px 0 0 ${t.$rythm * 1.25}px;

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

      ${NumberSpan} {
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

export const LogoImg = styled(Logo)`
`;

export const TextBlock = styled.div`
  ${({ theme: t }) => css`
    width: 52%;
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

export const Heading = styled.h2`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 26}px;
    font-size: ${t.$rythm * 3.75}px;
    font-weight: ${t.$font_weight_bold};
    color: ${t.$text_color_black};
    margin: ${t.$rythm * 4.5}px 0 0 ${t.$rythm * 10}px;
    height: ${t.$rythm * 9.4}px;
    line-height: ${t.$rythm * 4.5}px;

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 5.625}px;
      
      margin: ${t.$rythm * 3.8125}px 0 0 ${t.$rythm * 0.75}px;

      font-size: ${t.$rythm * 2.5}px;
      line-height: 1.13;
    }
  `}
`;

export const Description = styled.span`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 1.5}px 0 0 ${t.$rythm * 10}px;

    color: ${t.$text_color_black};

    font-size: ${t.$rythm * 2}px;
    line-height: 1.17;

    @media ${t.$phone}, ${t.$tablet} {
      margin-left: ${t.$rythm * 0.75}px;
      margin-bottom: ${t.$rythm * 2.1875}px;

      font-size: ${t.$rythm * 1.125}px;
      line-height: 1.39;
    }
  `}
`;

export const PriceBlock = styled.div`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 15}px;
    margin: ${t.$rythm * 1.5}px 0 0 ${t.$rythm * 10}px;
    
    background-color: ${t.$text_background_color};
    padding: ${t.$rythm / 2}px 0 0 ${t.$rythm / 2}px;

    @media ${t.$phone}, ${t.$tablet} {
      margin-left: ${t.$rythm * 0.75}px;
      margin-top: 0;
      height: ${t.$rythm * 3.625}px;
    }
  `}
`;

export const Price = styled.span`
  ${({ theme: t }) => css`
    color: ${t.$text_color_black};
    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    line-height: ${t.$rythm * 3.125}px;
    margin-right: ${t.$rythm / 2}px;
  `}
`;

export const Currency = styled.span`
  ${({ theme: t }) => css`
    color: ${t.$text_color_black};
    font-size: ${t.$rythm * 1.875}px;
    line-height: ${t.$rythm * 3.125}px;
  `}
`;

export const UntilDate = styled.span`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 10}px;
    margin: ${t.$rythm * 1.5}px 0 0 ${t.$rythm * 10}px;
    font-size: ${t.$rythm * 1.875}px;
    line-height: ${t.$rythm * 3.125}px;
    color: ${t.$text_color_black};
    background-color: ${t.$text_background_color};
    padding: ${t.$rythm / 2}px 0 0 ${t.$rythm / 2}px;

    @media ${t.$phone}, ${t.$tablet} {
      margin-left: ${t.$rythm * 0.75}px;
      margin-top: ${t.$rythm / 2}px;
      height: ${t.$rythm * 3.125}px;
    }
  `}
`;

export const Note = styled.span`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 0.75}px 0 0 ${t.$rythm * 10}px;
    font-size: ${t.$rythm * 0.75}px;
    line-height: ${t.$rythm}px;
    color: ${t.$text_color_black};

    @media ${t.$phone}, ${t.$tablet} {
      margin-left: ${t.$rythm * 0.75}px;
      line-height: 1.25;
    }
  `}
`;

export const FormBlock = styled.div`
  ${({ theme: t }) => css`
    width: 48%;
    height: 100%;

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;
      margin: 0 auto;
    }
  `}
`;

export const FormContainer = styled.form`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 25}px;
    height: ${t.$rythm * 30.5}px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: ${t.$rythm * 4.25}px;
    border-radius: ${t.$rythm * 1.25}px;
    background: ${t.$form_bg};

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 19.375}px;
      width: ${t.$rythm * 20}px;

      margin-top: ${t.$rythm * 2.1}px;
      background: none;
    }
  `}
`;

export const FormHeading = styled.span`
  ${({ theme: t }) => css`
    margin-top: ${t.$rythm * 2}px;
    text-align: center;
    width: 100%;
    height: ${t.$rythm * 5}px;
    color: ${t.$text_color_black};
    font-size: ${t.$font_size_base * 1.875}px;
  `}
`;

export const InputsGroup = styled.div`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 15.75}px;
    padding: 0 ${t.$rythm * 3.5}px;

    margin-bottom: ${t.$rythm * 2}px;

    @media ${t.$phone}, ${t.$tablet} {
      padding: 0 ${t.$rythm * 0.75}px;
      margin-bottom: 0;
    }
  `}
`;

export const SendButton = styled(Button)`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 18}px;
    height: ${t.$rythm * 3.75}px;

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
      border-radius: ${t.$rythm}px;
      padding: 0 ${t.$rythm * 0.75}px;
      font-size: ${t.$rythm}px;
    }
  `}
`;

export const FormSelect = styled(Select)`
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

export const FormText = styled(Input)`
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

export const FormNumber = styled(Input)`
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

export const FormInputMask = styled(InputMask)`
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

export const FormCheckbox = styled(Checkbox)`
`;
