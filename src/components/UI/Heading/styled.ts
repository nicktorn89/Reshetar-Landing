import styled, { css } from 'src/theme';

export const HeadingText = styled.h1<{ fontSize: number }>`
  ${({ theme: t, fontSize }) => css`
    font-weight: ${t.$font_weight_bold};
    font-size: ${fontSize}px;
    
    color: ${t.$text_color_black};

    text-align: center;
  `}
`;
