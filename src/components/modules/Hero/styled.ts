import styled, { css } from 'styled-components';
import Button from 'src/components/UI/Button/Button';
import Logo from 'src/components/UI/Logo';

export const HeroContainer = styled.section`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 57}px;
    display: flex;
    flex-wrap: wrap;

    background: url('https://reshetar.ru/images/bg.jpg') repeat center center fixed;
    background-size: cover;
  `}
`;

export const LogoBlock = styled.div`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 5.5}px;
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 2}px 0 0 ${t.$rythm * 1.25}px;
  `}
`;

export const LogoImg = styled(Logo)``;

export const TextBlock = styled.div`
  width: 52%;
  height: 100%;    
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  `}
`;

export const Description = styled.span`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 1.5}px 0 0 ${t.$rythm * 10}px;
    color: ${t.$text_color_black};
    font-size: ${t.$rythm * 2}px;
    line-height: ${t.$rythm * 2.25}px;
  `}
`;

export const PriceBlock = styled.div`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 1.5}px 0 0 ${t.$rythm * 10}px;
    width: ${t.$rythm * 15}px;
    background-color: ${t.$text_background_color};
    padding: ${t.$rythm / 2}px 0 0 ${t.$rythm / 2}px;
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
  `}
`;

export const Note = styled.span`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 0.75}px 0 0 ${t.$rythm * 10}px;
    font-size: ${t.$rythm * 0.75}px;
    line-height: ${t.$rythm}px;
    color: ${t.$text_color_black};
  `}
`;

export const FormBlock = styled.div`
    width: 48%;
    height: 100%;
`;

export const FormContainer = styled.div`
  ${({ theme: t }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: ${t.$rythm * 4.25}px;
    width: ${t.$rythm * 25}px;
    height: ${t.$rythm * 30.5}px;
    border-radius: ${t.$rythm * 1.25}px;
    background-color: ${t.$bg};
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
    height: ${t.$rythm * 17}px;
  `}
`;

export const SendButton = styled(Button)`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 18}px;
    line-height: ${t.$rythm * 1.5}px;
    margin-bottom: ${t.$rythm * 2}px;

    display: flex;
    justify-content: center;
    
    &::after {
      content: none;
      box-shadow: none;
    }
  `}
`;
