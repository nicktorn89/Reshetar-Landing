import rgba from 'polished/lib/color/rgba';
import styled, { css, ifProp, switchProp } from 'src/theme';
import { outline, outlineDark } from 'src/theme/mixin';
import { ButtonTypesMap } from './types';

export const Button = styled.button`
  ${({ theme: t }) => css`
    font-family: ${t.$font_family};
    border-radius: ${t.$border_radius_base}px;
    color: ${t.$text_color};
    height: ${t.$height_base}px;
    line-height: ${t.$height_base}px;
    padding: 0 ${t.$rythm}px;
    transition: transform, background-color ${t.$transition_duration_base}s ${t.$transition_function_base};
    font-size: ${t.$btn_font_size_base}px;

    text-decoration: none;
    border: 0;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    
    &:active {
      transform: scale(0.98);
    }

    &:after {
      transition: box-shadow ${t.$transition_duration_base}s ${t.$transition_function_base};

      content: '';
      position: absolute;
      top: 0;
      left: 5%;
      width: 90%;
      height: 100%;
      background: transparent;
    }
    
    ${ifProp(
      { isRounded: true },
      css`
        width: ${t.$height_base}px;
        height: ${t.$height_base}px;
        border-radius: ${t.$height_base}px;
        
        justify-content: center;

        &:after {
          content: none;
        }
        
        ${switchProp('size', {
          sm: css`
            width: ${t.$height_sm}px;
          `,
        })}
      `,
    )}
    
    ${switchProp('themeType', {
      [ButtonTypesMap.base]: css`
        background-color: ${t.$btn_base_bg};
        color: ${t.$btn_base_fc};

        &:active {
          &:after {
            box-shadow: 0 0 0 0 ${rgba(t.$btn_base_bg, 50)};
          }
        }

        &:after {
          box-shadow: ${t.$btn_shadow} ${rgba(t.$btn_base_bg, 50)};
        }
      `,

      [ButtonTypesMap.primary]: css`
        background-color: ${t.$btn_primary_bg};
        color: ${t.$btn_primary_fc};

        &:active {
          &:after {
            box-shadow: 0 0 0 0 ${rgba(t.$btn_primary_bg, 50)};
          }
        }

        &:after {
          box-shadow: ${t.$btn_shadow} ${rgba(t.$btn_primary_bg, 50)};
        }
      `,
  
      [ButtonTypesMap.hollow]: css`
        background-color: transparent;
        box-shadow: inset 0 0 8px 0 rgba(33,33,33,0.15);
        font-weight: ${t.$font_weight_base};

        &:active {
          &:after {
            box-shadow: 0 0 0 0 ${rgba(t.$btn_primary_bg, 50)};
          }
        }

        &:after {
          box-shadow: none;
        }
      `,
    })}
    
    ${ifProp(
      { asSuccess: true },
      css`
        background-color: ${t.$btn_success_bg};
        color: ${t.$btn_success_color};
  
        &:active {
          &:after {
            box-shadow: 0 0 0 0 ${rgba(t.$btn_success_bg, 50)};
           }
         }
  
         &:after {
           box-shadow: ${t.$btn_shadow} ${rgba(t.$btn_success_bg, 50)};
         }
      `,
    )}
    
    ${switchProp('size', {
      sm: css`
        height: ${t.$height_sm}px;
        line-height: ${t.$height_sm}px;
        padding: 0 ${t.$rythm}px;
        font-size: ${t.$btn_font_size_sm}px;
      `,
    })}
    
    ${ifProp(
      { disabled: true },
      css`
        background-color: ${t.$disabled_bg};
        color: ${t.$text_color_disabled};
        
        cursor: not-allowed;

        &:after {
          content: none;
        }
      `,
    )}
    
    ${outline}
    
    ${ifProp(
      { themeType: 'hollow'  },
      css`
        ${outlineDark}
      `,
    )}
    
    & > svg + span, & > span + svg {
      margin-left: ${t.$rythm}px;
    }
    
    & > span,
    & > svg {
      color: inherit;
    }
  `}
`;

export const ButtonGroup = styled.div`
  ${({ theme: t }) => css`
    display: flex;

    ${Button} {
      margin-right: ${t.$rythm / 2}px;
    }
  `}
`;
