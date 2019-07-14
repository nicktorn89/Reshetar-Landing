import styled, { css } from 'src/theme';

export const StatusContainer = styled.div<{ status: boolean }>`
  ${({ theme: t, status }) => css`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;

    width: 100%;
    min-height: ${t.$rythm * 3.75}px;
    padding: ${t.$rythm / 2} 0;

    background: ${status ? '#5ee25e' : '#FF5D5D'};
    z-index: 999;
  `}
`;

export const StatusText = styled.span`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm * 1.5}px;
    margin-left: ${t.$rythm * 2}px;
    color: ${t.$text_color};

    @media ${t.$phone}, ${t.$tablet} {
      font-size: ${t.$rythm}
    }
  `}
`;
