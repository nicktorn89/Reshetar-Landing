import styled, { css } from 'styled-components';
import { Icon } from 'src/components/UI';

export const Header = styled.header`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 3.75}px;
    display: flex;
    flex-wrap: nowrap;
    background-color: ${t.$header_bg};
    font-family: ${t.$font_family};
  `}
`;

export const ContactsBlock = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BeforeContactsText = styled.span`
  ${({ theme: t }) => css`
    font-size: ${t.$font_size_base * 1.125}px;
    font-family: ${t.$font_family};
    font-weight: ${t.$font_weight_semibold};
    color: ${t.$header_accent_text_color};
    margin: 0 ${t.$rythm * 0.75}px 0 ${t.$rythm * 1.125}px;
  `}
`;

export const IconsBlock = styled.div`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 30}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `}
`;

export const IconContainer = styled.a`
  ${({ theme: t }) => css`
    text-decoration: none;
    display: flex;
    align-items: center;

    margin-right: ${t.$rythm * 0.75}px;
  `}
`;

export const StyledIcon = styled(Icon)`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm * 2}px;
    margin-right: ${t.$rythm / 2}px;
  `}
`;

export const IconText = styled.span`
  ${({ theme: t }) => css`
    font-size: ${t.$font_size_base * 1.125}px;
    font-family: ${t.$font_family};
    font-weight: ${t.$font_weight_semibold};
    text-align: center;
    color: ${t.$text_color};
  `}
`;

export const NumberBlock = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NumberSpan = styled.span`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 12}px;
    height: ${t.$rythm * 1.5}px;
    margin-right: ${t.$rythm * 2}px;

    font-size: ${t.$font_size_base * 1.125}px;
    font-family: ${t.$font_family};
    font-weight: ${t.$font_weight_semibold};
    text-align: center;
    color: ${t.$text_color};
  `}
`;
