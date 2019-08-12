import styled, { css } from 'styled-components';

import { 
  Header as HeaderUI, HeaderContactsBlock, HeaderNumberBlock,
  HeaderNumberSpan, HeaderIconsBlock, HeaderIconContainer, MobileHeaderContactsText, HeaderContactsText,
} from '../Header/styled';

export const FooterContainer = styled.footer`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 12.9375}px;
    padding: 0 11.2% 0 11.2%;
    background-color: ${t.$header_bg};
    display: flex;
    align-content: flex-start;

    flex-wrap: wrap;

    ${HeaderUI} {
      margin-top: ${t.$rythm * 3}px;
      height: ${t.$rythm * 1.5625}px;
    }

    ${HeaderContactsBlock} {
      width: 59%;
      margin-right: 23.5%;

      position: relative;
      bottom: 4px;

      ${HeaderContactsText} {
        margin-left: 0;
      }
    }

    ${HeaderNumberBlock} {
      width: ${t.$rythm * 13}px;
      line-height: 1.56;
      font-style: normal;
      font-stretch: normal;

      ${HeaderNumberSpan} {
        font-size: ${t.$rythm}px;
        margin-right: 0;
        width: 100%;
        white-space: pre-line;
      }
    }

    @media screen and (min-width: 992px) and (max-width: 1200px) {
      ${HeaderNumberSpan} {
        width: 150px !important;
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
        display: block;
      }

      ${HeaderContactsBlock} {
        width: ${t.$rythm * 20}px;
        margin: 0 auto;
        flex-direction: column;
        flex-wrap: nowrap;

        ${MobileHeaderContactsText} {
          margin-bottom: ${t.$rythm * 1.5}px;
        }
      }

      ${MobileHeaderContactsText} {
        font-weight: ${t.$font_weight_bold};
        margin-top: 0;
        color: rgb(178, 176, 207);    
        font-family: "Avenir Next Cyr Demi", sans-serif;
      }

      ${HeaderIconsBlock} {
        flex-direction: column;
        width: ${t.$rythm * 10}px;
        
        margin: 0 auto;
      }

      ${HeaderIconContainer} {
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

      ${HeaderNumberBlock} {
        display: flex;
        flex-direction: column;

        width: ${t.$rythm * 12.5}px;
        margin: 80px auto 0 auto;

        ${HeaderNumberSpan} {
          height: ${t.$rythm * 3.125}px;

          margin-top: ${t.$rythm}px;
        }
      }
    }
  `}
`;

export const FooterText = styled.div`
  ${({ theme: t }) => css`
    width: 100%;
    margin-top: ${t.$rythm * 3.125}px;
    display: flex;
    align-items: flex-start;

    @media ${t.$phone}, ${t.$tablet} {
      flex-direction: column-reverse;
      width: ${t.$rythm * 10.3125}px;

      margin: 0 auto;
      margin-top: ${t.$rythm * 1.125}px;
    }
  `}
`;

export const CopyrightWrapper = styled.div`
  ${({ theme: t }) => css`
    width: 61%;
    margin-right: 20.5%;

    @media screen and (min-width: 992px) and (max-width: 1130px) {
      margin-right: 17%;
    }

    @media screen and (min-width: 1130px) and (max-width: 1200px) {
      margin-right: 18%;
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
  `}
`;

export const FooterCopyright = styled.span`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm * 0.75}px;
    width: ${t.$rythm * 10.2}px;
    height: ${t.$rythm * 2}px;
    line-height: normal;
    display: block;

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

    position: relative;
    bottom: ${t.$rythm * 0.75}px;
    left: ${t.$rythm * 1.875}px;

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
        left: 4px;
        top: 1px;
      }
    }

    @media ${t.$phone}, ${t.$tablet} {
      left: 9px;
      top: 11px;

      ${HeaderIconContainer} {
        padding: 0;
      }

      & > a:nth-child(3) > svg {
        left: ${t.$rythm / 3}px;
      }

      margin-bottom: ${t.$rythm * 4.1875}px;
    }
  `}
`;
