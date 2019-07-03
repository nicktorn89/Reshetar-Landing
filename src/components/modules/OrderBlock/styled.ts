import styled, { css } from 'styled-components';
import { SendButton } from '../Hero/styled';
import { CheckboxLabel } from 'src/components/UI/Checkbox/styled';

export const OrderBlockContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 40.625}px;
    border-top: 1px solid ${t.$block_border_color};
    padding: 0 ${t.$rythm * 9.375}px;

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      height: ${t.$rythm * 34.5}px;

      overflow: hidden;

      padding: 0;
    }
  `}
`;

export const OrderBlockHeading = styled.h3`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 9.8125}px 0 ${t.$rythm * 3.75}px 0;
    font-size: ${t.$rythm * 3.125}px;
    font-weight: ${t.$font_weight_bold};
    color: ${t.$order_block_heading};

    text-align: center;

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;

      margin: ${t.$rythm * 1.5}px auto ${t.$rythm * 1.125}px auto;

      font-size: ${t.$rythm * 1.5}px;
      line-height: 1.4;
    }
  `}
`;

export const OrderBlockFormContainer = styled.div`
  ${({ theme: t }) => css`
    padding: 0 ${t.$rythm * 12.25}px 0 ${t.$rythm * 18.8}px;

    display: flex;

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;
      height: ${t.$rythm * 16.5}px;

      flex-direction: column;

      margin: 0 auto;
      padding: 0 ${t.$rythm / 2}px;
    }
  `}
`;

export const OrderBlockFormInputs = styled.div`
  ${({ theme: t }) => css`
    width: 50%;

    ${SendButton} {
      height: ${t.$rythm * 3.75}px;
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

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 19}px;

      margin: 0 auto;

      & > div {
        width: 100%;

        &:not(:last-child) {
          margin-bottom: ${t.$rythm}px;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  `}
`;

export const OrderBlockFormButton = styled(SendButton)`
  ${({ theme: t }) => css`
    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 19}px;
      margin: 0 auto;
    }
  `}
`;

export const OrderBlockFormCheckboxes = styled.div`
  ${({ theme: t }) => css`
    width: 50%;

    ${CheckboxLabel}:first-of-type {
      margin-top: ${t.$rythm * 0.75}px;
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;

      ${CheckboxLabel}:first-of-type {
        margin-top: ${t.$rythm}px;
      }

      ${CheckboxLabel}:last-of-type {
        margin-bottom: ${t.$rythm * 1.5}px;
      }

      margin: 0 auto;
    }
  `}
`;
