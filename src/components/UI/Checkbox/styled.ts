import styled, { css } from 'src/theme';
import { default as VendorCheckbox } from 'rc-checkbox';

export const StyledCheckbox = styled(VendorCheckbox)`
  ${({ theme: t }) => css`
    & > .rc-checkbox-inner {
      width: ${t.$rythm * 1.25}px;
      height: ${t.$rythm * 1.25}px;
    }

    .rc-checkbox-inner:after {
      left: 4.5px !important;
      top: 1px !important;
      width: ${t.$rythm / 2}px !important;
      height: ${t.$rythm * 0.75}px !important;
    }

    margin-right: ${t.$rythm / 2}px;
    
    @media ${t.$phone}, ${t.$tablet} {
      & > .rc-checkbox-inner {
        width: 30px !important;
        height: 30px !important;
      }

      .rc-checkbox-inner:after {
        left: 10px !important;
        top: 6px !important;
        width: ${t.$rythm / 2}px !important;
        height: ${t.$rythm * 0.75}px !important;
      }
    }
  `}
`;

export const CheckboxLabel = styled.label`
  ${({ theme: t }) => css`
    width: 100%;
    height: ${t.$rythm * 1.25}px;
    
    display: flex;

    font-size: ${t.$rythm}px;

    & > .rc-checkbox-checked .rc-checkbox-inner {
      background-color: ${t.$checkbox_bg};
      border-color: ${t.$checkbox_bg};
    }

    & > .rc-checkbox-checked .rc-checkbox-inner::after {
      border: 2px solid black;    
      border-top: 0;
      border-left: 0;
    }

    & > .rc-checkbox:hover .rc-checkbox-inner, .rc-checkbox-input:focus + .rc-checkbox-inner {
      border-color: ${t.$checkbox_bg};
    }

    &:first-of-type {
      margin-top: ${t.$rythm * 2}px;
    }

    &:not(:last-child) {
      margin-bottom: ${t.$rythm / 2}px;
    }
    
    @media ${t.$phone}, ${t.$tablet} {
      font-size: ${t.$rythm * 1.125}px;
      height: 30px;
      
      &:first-of-type {
        margin-top: 13px;
      }

      &:not(:last-child) {
        margin-bottom:9px;
      }
      &:last-child {
        margin-bottom: ${t.$rythm * 1.5}px;
      }
    }
  `}
`;

export const LabelSpan = styled.span`
  ${({ theme: t }) => css`
    position: relative;
    bottom: ${t.$rythm / 8}px;
    left: ${t.$rythm * 0.1875}px;
    color: ${t.$text_color_black};

    @media ${t.$phone}, ${t.$tablet} {
      bottom: -3px;
    `}
`;
