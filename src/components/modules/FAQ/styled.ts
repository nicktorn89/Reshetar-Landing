import styled, { css } from 'styled-components';

export const FAQContainer = styled.section`
  ${({ theme: t }) => css`
    width: 100%;
    min-height: ${t.$rythm * 55.125}px;
    border-top: 1px solid ${t.$block_border_color};

    padding-bottom: ${t.$rythm}px;
  `}
`;

export const FAQHeading = styled.h3`
  ${({ theme: t }) => css`
    margin-top: ${t.$rythm * 9}px;
    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};

    color: ${t.$text_color_black};

    text-align: center;
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
      padding: ${t.$rythm}px;
      padding-left: 0;

      color: ${t.$text_color_black};
    }

    .ordinar > .Collapsible__contentInner {
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
      margin-top: ${t.$rythm * 2}px;
      height: ${t.$rythm * 3}px;
      font-size: ${t.$rythm * 1.25}px;
      font-weight: ${t.$font_weight_bold};
      color: ${t.$text_color_accent};
      text-decoration: none;
      cursor: pointer;
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
      top: 0;
      display: block;
      transition: transform 300ms; 
    }

    .Collapsible__trigger.is-open:after {
      transform: rotateZ(180deg); 
    }
  `}
`;
