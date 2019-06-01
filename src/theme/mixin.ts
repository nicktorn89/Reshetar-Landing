import { css } from 'src/theme';

export const outline = css`
  outline: none;

  &:focus {
    box-shadow: inset 0 0 8px 0 rgba(33, 33, 33, 0.15);
  }
`;

export const outlineDark = css`
  outline: none;

  &:focus {
    box-shadow: inset 0 0 8px 0 rgba(33, 33, 33, 0.35);
  }
`;

export const resetButtonStyle = css`
  border: 0;
  background-color: transparent;
  
  &:focus {
    border: 0;
    border-image-width: 0;
    outline: 0;
  }
`;

export const boxShadow = (blur = 16, y = 0, isInset = false) => css`
  box-shadow: ${isInset ? 'inset' : ''} 0 ${y}px ${blur}px 0 rgba(0, 0, 0, 0.1);
`;

export const scrollStyling = css`
  ${({ theme: t }) => css`
    &::-webkit-scrollbar {
      width: ${t.$rythm / 2}px;
      border-radius: ${t.$rythm / 4}px;
    }
    
    &::-webkit-scrollbar-track {
      border-radius: ${t.$rythm / 2}px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${t.$scrollbar};
      border-radius: ${t.$rythm / 2}px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: ${t.$scrollbar_hover};
    } 
  `}
`;

export const svgStyling = css`
  ${({ theme: t }) => css`
    width: 120px;
    height: auto;
    
    #color0 {
      path, rect {
        fill: ${t.$calculator_logo_color_0};
        stroke: ${t.$calculator_logo_color_0};
      }
    }

    #color1 {
      path, rect, ellipse {
        fill: ${t.$calculator_logo_color_1};
      }

      & > line {
        stroke: ${t.$calculator_logo_color_1};
      }
    }
  `}
`;
