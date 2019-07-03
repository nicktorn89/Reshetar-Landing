import styled, { css } from 'styled-components';

import { 
  Header as HeaderUI, ContactsBlock, NumberBlock,
  NumberSpan, BeforeContactsText, IconsBlock, IconContainer,
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
        white-space: pre-line;
      }
    }

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 34.5}px;

      padding: 0;

      overflow: hidden;

      ${HeaderUI} {
        margin-top: ${t.$rythm * 2}px;
        height: ${t.$rythm * 20.375}px;

        flex-direction: column;
      }

      ${ContactsBlock} {
        width: ${t.$rythm * 20}px;
        margin: 0 auto;
        flex-direction: column;
        flex-wrap: nowrap;

        ${BeforeContactsText} {
          margin-bottom: ${t.$rythm * 1.5}px;
        }
      }

      ${BeforeContactsText} {
        font-weight: ${t.$font_weight_bold};
      }

      ${IconsBlock} {
        flex-direction: column;
        width: ${t.$rythm * 10}px;
        
        margin: 0 auto;
      }

      ${IconContainer} {
        width: ${t.$rythm * 10}px;

        padding-left: ${t.$rythm / 2}px;
        margin: 0 auto;

        &:not(:last-of-type) {
          margin-bottom: ${t.$rythm * 0.75}px;
        }

        svg {
          width: ${t.$rythm * 2.25}px;
          margin-right: ${t.$rythm * 0.75}px;
        }
      }

      ${NumberBlock} {
        display: flex;
        flex-direction: column;

        width: ${t.$rythm * 12.5}px;
        margin: ${t.$rythm * 1.5}px auto 0 auto;

        ${NumberSpan} {
          height: ${t.$rythm * 3.125}px;

          margin-top: ${t.$rythm}px;
        }
      }
    }
  `}
`;

export const FooterTextContainer = styled.div`
  ${({ theme: t }) => css`
    margin-top: ${t.$rythm * 3.125}px;
    display: flex;
    align-items: flex-start;

    @media ${t.$phone}, ${t.$tablet} {
      flex-direction: column-reverse;
      width: ${t.$rythm * 10}px;

      margin: 0 auto;
      margin-top: ${t.$rythm * 1.125}px;
    }
  `}
`;

export const FooterCopyright = styled.span`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm * 0.75}px;
    width: ${t.$rythm * 10.2}px;
    height: ${t.$rythm * 2}px;
    line-height: normal;
    margin-right: 240%;

    @media ${t.$phone}, ${t.$tablet} {
      margin: 0;
      text-align: center;
    }
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

    @media ${t.$phone}, ${t.$tablet} {
      ${IconContainer} {
        padding: 0;
      }

      & > a:nth-child(3) > svg {
        left: ${t.$rythm / 3}px;
      }

      margin-bottom: ${t.$rythm * 4.1875}px;
    }
  `}
`;
