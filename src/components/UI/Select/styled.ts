import ReactSelect from 'react-select';
import styled, { css } from 'src/theme';
import { boxShadow } from 'src/theme/mixin';

export const Select = styled(ReactSelect)`
  ${({ theme: t }) => css`
    border-radius: ${t.$border_radius_base * 2.5}px;
    height: ${t.$height_base * 1.25}px;
    font-family: ${t.$font_family};

    font-size: ${t.$rythm * 1.25}px;
    
    box-sizing: border-box;
    
    .select__control {
      height: ${t.$height_base * 1.25}px;
      border: ${t.$border_width_base / 2}px solid ${t.$select_border_color};
      border-radius: ${t.$border_radius_base * 2.5}px;
      
      cursor: pointer;
      box-shadow: none;
      
      &:hover {
        border-color: ${t.$select_border_color};
      }
    }
     
    .select__option {
      color: ${t.$text_color_black};
      background-color: ${t.$select_base_bg};
      
      cursor: pointer;
      
      &:active {
        background-color: ${t.$select_base_bg};
      }
    }

    .select__option--is-selected {
      background-color: ${t.$select_option_bg};
      color: ${t.$text_color_accent};
      
      cursor: default;
    }
    
    .select__option--is-selected.select__option--is-focused {
      background-color: ${t.$select_option_bg};
    }
    
    .select__indicators {
      width: ${t.$height_base}px;
      background-color: ${t.$select_indicator_bg};
      
      justify-content: center;
    }
    
    .select__indicator-separator {
      display: none;
    }
    
    .select__dropdown-indicator {
      color: ${t.$text_color_accent};

      & > svg {
        font-size: ${t.$rythm}px !important;
      }
      
      &:hover {
        color: ${t.$text_color_accent};
      }
    }
    
    .select__menu {
      border-radius: ${t.$border_radius_base * 2.5}px;
      padding: ${t.$rythm}px;
      z-index: 100;
      
      ${boxShadow()};
    }
    
    .select__menu-list {
      padding: 0;
    }
    
    .select__value-container {
      padding: ${t.$rythm / 8}px ${t.$rythm / 2}px ${t.$rythm / 8}px ${t.$rythm * 1.1875}px;
    }
  `}
`;
