import styled, { css, ifProp } from 'src/theme';
import { outline } from 'src/theme/mixin';

export const Container = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$height_base * 1.25}px;
    border: ${t.$border_width_base / 2}px solid ${t.$input_border_color};
    border-radius: ${t.$border_radius_base * 2.5}px;
    
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    overflow: hidden;
    
    ${outline}
  `}
`;

export const Input = styled.input`
  ${({ theme: t }) => css`
    padding: 0 ${t.$rythm / 2}px 0 ${t.$rythm * 1.25}px;
    width: calc(100% - ${t.$height_base * 2}px);
    
    ${ifProp(
      { isCentered: true },
      css`
        text-align: center;
      `,
    )};
    
    height: 100%;
    border: none;
    box-sizing: border-box;
    flex-grow: 1;
    display: flex;

    font-size: ${t.$rythm * 1.25}px;
    
    &:focus {
      outline: none;
    }
  `}
`;
