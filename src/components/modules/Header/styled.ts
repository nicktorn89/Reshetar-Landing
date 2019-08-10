import styled, { css } from 'styled-components';
import { Icon } from 'src/components/UI';

export const Header = styled.header`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 3.75}px;
    display: flex;
    flex-wrap: nowrap;
    background-color: ${t.$header_bg};

    @media ${t.$phone}, ${t.$tablet} {
      display: none;
    }
  `}
`;

export const HeaderContactsBlock = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderContactsText = styled.span`
  ${({ theme: t }) => css`
    margin: 3px ${t.$rythm * 0.75}px 0 ${t.$rythm * 1.125}px;

    font-size: ${t.$font_size_base * 1.125}px;
    font-weight: ${t.$font_weight_bold};
    font-family: ${t.$font_family_demibold};

    color: ${t.$header_accent_text_color};
  `}
`;

export const MobileHeaderContactsText = styled.span`
  ${({ theme: t }) => css`
    display: none;

    @media ${t.$phone}, ${t.$tablet} {
      display: initial;
    }
  `}
`;

export const HeaderIconsBlock = styled.div`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 30}px;
    margin: 3px 0 0 ${t.$rythm / 2}px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  `}
`;

export const HeaderIconContainer = styled.a`
  ${({ theme: t }) => css`
    text-decoration: none;
    display: flex;
    align-items: center;

    margin-right: ${t.$rythm * 0.75}px;
  `}
`;

export const HeaderStyledIcon = styled(Icon)`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm * 2}px;
    margin-right: ${t.$rythm / 2}px;
  `}
`;

export const HeaderIconText = styled.span`
  ${({ theme: t }) => css`
    font-size: ${t.$font_size_base * 1.125}px;
    font-family: ${t.$font_family_demibold};

    text-align: center;
    color: ${t.$text_color};
  `}
`;

export const HeaderNumberBlock = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderNumberSpan = styled.span`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 1.5}px;
    margin-right: ${t.$rythm * 2.125}px;

    font-size: ${t.$font_size_base * 1.125}px;
    font-family: ${t.$font_family_demibold};
    text-align: center;
    color: ${t.$text_color};
  `}
`;
