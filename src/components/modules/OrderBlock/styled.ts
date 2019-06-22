import styled, { css } from 'styled-components';
import { FormText, FormNumber, FormSelect, SendButton } from '../Hero/styled';
import { CheckboxLabel } from 'src/components/UI/Checkbox/styled';
import { Container } from 'src/components/UI/Input/styled';

export const OrderBlockContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 40.625}px;
    border-top: 1px solid ${t.$block_border_color};
    padding: 0 ${t.$rythm * 9.375}px;
  `}
`;

export const OrderBlockHeading = styled.h3`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 9.8125}px 0 ${t.$rythm * 3.75}px 0;
    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    color: ${t.$order_block_heading};

    text-align: center;
  `}
`;

export const OrderBlockFormContainer = styled.div`
  ${({ theme: t }) => css`
    padding: 0 ${t.$rythm * 12.25}px 0 ${t.$rythm * 18.8}px;

    display: flex;
    flex-direction: row;
  `}
`;

export const OrderBlockFormInputs = styled.div`
  ${({ theme: t }) => css`
    width: 50%;

    ${Container} {
      height: ${t.$rythm * 3.75}px;
    }

    ${SendButton} {
      height: ${t.$rythm * 3.75}px;
    }

    ${FormNumber}, ${FormText}, ${FormSelect} {
      width: ${t.$rythm * 18}px;
      height: ${t.$rythm * 3.75}px;

      & > div {
        height: ${t.$rythm * 3.75}px;
      }

      &:not(:last-child) {
        margin-bottom: ${t.$rythm * 1.3125}px;
      }
    }

    ${FormNumber}, ${FormText} {
      height: ${t.$rythm * 3.25}px;
    }

    & > div {
      width: ${t.$rythm * 18}px;

      &:not(:last-child) {
        margin-bottom: ${t.$rythm * 1.3125}px;
      }

      &:last-of-type {
        margin-bottom: ${t.$rythm}px;
      }
    }
  `}
`;

export const OrderBlockFormCheckboxes = styled.div`
  ${({ theme: t }) => css`
    width: 50%;

    ${CheckboxLabel}:first-of-type {
      margin-top: ${t.$rythm * 0.75}px;
    }
  `}
`;
