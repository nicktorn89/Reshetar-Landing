import styled, { css } from 'styled-components';

import { 
  Header as HeaderUI, ContactsBlock, NumberBlock,
  NumberSpan, BeforeContactsText,
} from '../Header/styled';

export const Footer = styled.footer`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 12.9375}px;
    padding: 0 ${t.$rythm * 9.8125}px 0 ${t.$rythm * 10.3125}px;
    background-color: ${t.$header_bg};
    display: flex;
    align-content: flex-start;

    flex-wrap: wrap;

    ${HeaderUI} {
      margin-top: ${t.$rythm * 3}px;
      height: ${t.$rythm * 1.5625}px;
    }

    ${ContactsBlock} {
      width: ${t.$rythm * 42.5}px;
      margin-right: ${t.$rythm * 14.375}px;

      ${BeforeContactsText} {
        margin-left: 0;
      }
    }

    ${NumberBlock} {
      width: ${t.$rythm * 13}px;
      line-height: 1.56;
      font-style: normal;
      font-stretch: normal;

      ${NumberSpan} {
        font-size: ${t.$rythm}px;
        margin-right: 0;
        width: 100%;
      }
    }
  `}
`;

export const FooterTextContainer = styled.div`
  ${({ theme: t }) => css`
    margin-top: ${t.$rythm * 3.125}px;
    display: flex;
    align-items: flex-start;
  `}
`;

export const FooterCopyright = styled.span`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm * 0.75}px;
    width: ${t.$rythm * 10.2}px;
    height: ${t.$rythm * 2}px;
    line-height: normal;
    margin-right: 240%;
  `}
`;

export const FooterSocialLinks = styled.div`
  ${({ theme: t }) => css`
    align-items: flex-start;
    width: ${t.$rythm * 10}px;
    display: flex;

    & > a:not(:nth-child(2)) {
      color: ${t.$header_bg};
      background: ${t.$bg};
      border-radius: ${t.$rythm * 2.8125}px;
    }

    & > a:nth-child(2) {
      width: ${t.$rythm * 2.8125}px;
      height: ${t.$rythm * 2.8125}px;

      position: relative;
      bottom: 2px;

      svg {
        width: ${t.$rythm * 2.8125}px;
        height: ${t.$rythm * 2.8125}px;
        left: 0;
      }
    }
    
    & > a:nth-child(3)  {
      margin-right: 0;
      & > svg {
        left: ${t.$rythm / 2}px;
      }
    }

    & > a {
      width: ${t.$rythm * 2.8125}px !important;
      height: ${t.$rythm * 2.8125}px;
      margin-right: ${t.$rythm * 0.625}px;
      svg {
        position: relative;
        left: 3px;
        top: 1px;
      }
    }
  `}
`;
