import styled, { css } from 'styled-components';
import { HeroFormSendButton } from '../Hero/styled';
import { CheckboxLabel } from 'src/components/UI/Checkbox/styled';
import { Heading } from 'src/components/UI';

export const OrderBlockContainer = styled.section`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 40.625}px;
    border-top: 1px solid ${t.$block_border_color};
    padding: 0 10.5%;

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      height: ${t.$rythm * 34.5}px;
      background: #fafbfc;

      overflow: hidden;

      padding: 0;
    }
  `}
`;

export const OrderBlockHeading = styled(Heading)`
  ${({ theme: t }) => css`
    margin: ${t.$rythm * 9.8125}px 0 ${t.$rythm * 3.75}px 0;
    color: ${t.$order_block_heading};

    @media ${t.$phone}, ${t.$tablet} {
      width: ${t.$rythm * 20}px;

      margin: ${t.$rythm * 1.5}px auto ${t.$rythm * 0.75}px auto;

      font-size: ${t.$rythm * 1.5}px;
      line-height: 1.4;
    }
  `}
`;

export const OrderBlockFormContainer = styled.form`
  ${({ theme: t }) => css`
    padding: 0 13.61% 0 26.3%;

    display: flex;

    @media screen and (max-width: 1050px) {
      padding: 0 8% 0 16%;
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: 304px;
      height: 303px;

      flex-direction: column;

      margin: 0 auto;
      padding: 0 ${t.$rythm / 2}px;
    }
  `}
`;

export const OrderBlockFormInputs = styled.div`
  ${({ theme: t }) => css`
    width: 42%;
    margin-right: 5.7%;
    padding-top: ${t.$rythm * 0.75}px;

    ${OrderBlockFormButton} {
      height: ${t.$rythm * 3.75}px;
      width: 100%;
    }

    & > div {
      width: 100%;

      &:not(:last-child) {
        margin-bottom: ${t.$rythm * 1.3125}px;
      }

      &:last-of-type {
        margin-bottom: ${t.$rythm}px;
      }
    }

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;

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

export const OrderBlockFormButtonWrapper = styled.div`
  ${({ theme: t }) => css`
    @media ${t.$phone}, ${t.$tablet} {
      width: 296px;

      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
`;

export const OrderBlockFormButton = styled(HeroFormSendButton)`
  ${({ theme: t }) => css`
    @media ${t.$phone}, ${t.$tablet} {
      width: 296px;
    }
  `}
`;

export const OrderBlockFormCheckboxes = styled.div`
  ${({ theme: t }) => css`
    width: 50%;

    ${CheckboxLabel}:first-of-type {
      margin-top: ${t.$rythm * 1.4375}px;
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
