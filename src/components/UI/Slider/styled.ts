import styled, { css } from 'styled-components';
import { ifProp } from 'src/theme';

export const SliderContainer = styled.div<{ height?: number }>`
  ${({ theme: t, height }) => css`
    height: ${height ? height : t.$rythm * 33.625}px;
    width: 100%;

    padding: 0 ${t.$rythm * 10.3}px 0 ${t.$rythm * 10.3}px;
    display: flex;
    align-items: center;
  `}
`;

export const PrevImageButton = styled.button<{ disabled?: boolean }>`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 3.375}px;
    outline: none;
    border: 0;
    background: ${t.$bg_transparent};
    color: ${t.$btn_icon_active};
    padding: 0;
    margin-right: ${t.$rythm * 5.68}px;
    cursor: pointer;

    ${ifProp({
      disabled: true,
    }, css`
      color: ${t.$btn_icon_disabled};
    `)}

    &:after {
      box-shadow: none;
    }
  `}
`;

export const NextImageButton = styled(PrevImageButton)`
  margin-right: 0;
`;

export const ImagesContainer = styled.div<{ height?: number }>`
  ${({ theme: t, height }) => css`
    height: ${height ? height : t.$rythm * 33.625}px;
    width: ${t.$rythm * 52}px;

    margin-right: ${t.$rythm * 5.375}px;

    display: flex;
  `}
`;

export const ImageItem = styled.img<{width?: number}>`
   ${({ theme: t, width }) => css`
    height: 100%;
    width: ${width ? width : t.$rythm * 16}px;
    cursor: zoom-in;

    &:not(:last-of-type) {
      margin-right: ${t.$rythm * 2}px;
    }
  `}
`;
