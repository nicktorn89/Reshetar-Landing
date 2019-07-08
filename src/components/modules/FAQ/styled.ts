import styled, { css } from 'styled-components';
import { Heading } from 'src/components/UI';

export const FAQContainer = styled.section`
  ${({ theme: t }) => css`
    width: 100%;
    min-height: ${t.$rythm * 55.125}px;
    border-top: 1px solid ${t.$block_border_color};

    padding-bottom: ${t.$rythm}px;

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      min-height: ${t.$rythm * 32}px;

      overflow: hidden;

      margin: 0 auto;
    }
  `}
`;

export const FAQHeading = styled(Heading)`
  ${({ theme: t }) => css`
    width: 80%;
    padding-left: 66px;
    margin: ${t.$rythm * 9}px auto 0 auto;
    text-align: center;

    @media ${t.$phone}, ${t.$tablet} {
      width: 306px;

      margin: ${t.$rythm * 2.3125}px auto ${t.$rythm * 2.375}px auto;
      padding-left: 14px;

      font-size: ${t.$rythm * 1.5625}px;
      line-height: 1.4;
    }
  `}
`;

export const QuestionsContainer = styled.div`
  ${({ theme: t }) => css`
    margin-top: ${t.$rythm * 5.375}px;
    padding: 0 ${t.$rythm * 11}px 0 ${t.$rythm * 10}px;

    .Collapsible {
      background-color: ${t.$bg};
    }

    .Collapsible__contentInner {
      padding: ${t.$rythm / 2}px ${t.$rythm * 27.8125}px ${t.$rythm * 1.75}px 3px;  
      
      line-height: 1.56;
      font-size: ${t.$rythm}px;

      color: ${t.$text_color_black};
    }

    .ordinar .Collapsible__contentInner {
      border-bottom: 1px solid ${t.$accordion_border};
    }

    .Collapsible__contentInner p {
      margin-bottom: ${t.$rythm * 1.5}px;
      font-size: ${t.$rythm}px;
      line-height: ${t.$rythm * 1.5}px; 
    }

    .Collapsible__contentInner p:last-child {
      margin-bottom: 0; 
    }

    .Collapsible__trigger {
      display: block;
      position: relative;

      height: ${t.$rythm * 3}px;
      margin-top: ${t.$rythm * 2}px;

      font-size: ${t.$rythm * 1.25}px;
      font-weight: ${t.$font_weight_bold};
      text-decoration: none;
      
      color: ${t.$text_color_alt};
      cursor: pointer;
    }

    .Collapsible__trigger.is-closed {      
      color: ${t.$text_color_black};
    }

    .ordinar > .Collapsible__trigger {
      border-bottom: 1px solid transparent;
    }

    .ordinar > .Collapsible__trigger.is-closed {
      border-bottom: 1px solid ${t.$accordion_border};
      transition: border-bottom 2000ms;
    }

    .Collapsible__trigger:after {
      font-family: 'FontAwesome';
      content: '\f107';
      font-size: ${t.$rythm * 2}px;
      position: absolute;
      right: ${t.$rythm / 2}px;
      bottom: ${t.$rythm}px;
      display: block;
      transition: transform 300ms; 
    }

    .Collapsible__trigger.is-open:after {
      transform: rotateZ(180deg); 
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;

      margin: 0 auto;
      padding: 0 ${t.$rythm * 0.75}px;
      
      .Collapsible {
        margin-left: 8px;
      }

      .Collapsible__trigger.is-closed {
        margin-top: ${t.$rythm * 1.375}px;
        height: 60px;
      }

      .Collapsible__contentInner {
        padding: ${t.$rythm}px 0;
        margin-top: 10px;
      }
    }
  `}
`;
