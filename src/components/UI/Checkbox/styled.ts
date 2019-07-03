import styled, { css } from 'src/theme';
import { default as VendorCheckbox } from 'rc-checkbox';

export const StyledCheckbox = styled(VendorCheckbox)`
  ${({ theme: t }) => css`
    & > .rc-checkbox-inner {
      width: ${t.$rythm * 1.25}px;
      height: ${t.$rythm * 1.25}px;
    }

    .rc-checkbox-inner:after {
      left: ${t.$rythm / 2.5}px !important;
      top: ${t.$rythm / 8}px !important;
      width: ${t.$rythm / 2}px !important;
      height: ${t.$rythm * 0.75}px !important;
    }

    margin-right: ${t.$rythm / 2}px;
  `}
`;

export const CheckboxLabel = styled.label`
  ${({ theme: t }) => css`
    width: 100%;
    display: flex;
    color: ${t.$text_color_black};

    &:first-of-type {
      margin-top: ${t.$rythm * 2}px;
    }

    &:not(:last-child) {
      margin-bottom: ${t.$rythm / 2}px;
    }
    
    @media ${t.$phone}, ${t.$tablet} {
      font-size: ${t.$rythm * 1.125}px;
      
      &:first-of-type {
        margin-top: ${t.$rythm}px;
      }

      &:not(:last-child) {
        margin-bottom: ${t.$rythm / 2}px;
      }
      &:last-child {
        margin-bottom: ${t.$rythm * 1.5}px;
      }
    }
  `}
`;
