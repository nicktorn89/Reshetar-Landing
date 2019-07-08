import styled, { css } from 'styled-components';
import Logo from 'src/components/UI/Logo';
import Img from 'gatsby-image';

export const InfoContainer = styled.section`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 57.5}px;
    min-height: ${t.$rythm * 66}px;

    margin: 0 auto;

    position: relative;
    bottom: ${t.$rythm * 6.5}px;

    background: ${t.$bg};
    border: ${t.$border_radius_base}px;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2);

    @media ${t.$phone}, ${t.$tablet} {
      width: 100%;
      min-height: ${t.$rythm * 77.3125}px;

      box-shadow: none;

      overflow: hidden;

      bottom: 0;
    }
  `}
`;

export const InfoDescriptionBlock = styled.div`
  ${({ theme: t }) => css`
    min-height: ${t.$rythm * 19.25}px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media ${t.$phone}, ${t.$tablet} {      
      width: ${t.$rythm * 20}px;
      min-height: ${t.$rythm * 30.5625}px;
      margin: 0 auto;

      bottom: 0;
    }
  `}
`;

export const InfoDescriptionPhoto = styled.div`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 19.25}px;
    height: ${t.$rythm * 19.25}px;

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 7.25}px;

      margin-top: ${t.$rythm}px;

      display: flex;
      align-items: center;
    }
  `}
`;

export const InfoDescImg = styled(Img)`
  ${({ theme: t }) => css`
    top: -${t.$rythm * 0.5}px;
    
    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 7.25}px !important;
      width: ${t.$rythm * 7.25}px !important;

      margin: 0 ${t.$rythm * 0.75}px;

      border-radius: ${t.$rythm * 3.75}px;
    }
  `}
`;

export const InfoDescriptionText = styled.span`
  ${({ theme: t }) => css`
    height: calc(100% - ${t.$rythm * 2}px);
    width: 55%;

    margin: ${t.$rythm * 2}px 0 0 ${t.$rythm * 2}px;

    display: flex;
    flex-direction: column;

    color: ${t.$text_color_black};
    font-size: ${t.$rythm}px;
    line-height: 1.25;

    @media ${t.$phone}, ${t.$tablet} {
      min-height: ${t.$rythm * 22.25}px;
      width: auto;

      padding: 0 ${t.$rythm * 0.75}px;
      margin: 0;
      margin-top: ${t.$rythm}px;
      
      font-size: ${t.$rythm * 1.125}px;
      line-height: 1.39;
    }
  `}
`;

export const InfoDescPart = styled.span`
  ${({ theme: t }) => css`
    width: 100%;

    color: ${t.$text_color_black};
    font-size: ${t.$rythm}px;
    line-height: 1.25;

    &:not(:last-of-type) {
      margin-bottom: ${t.$rythm}px;
    }
  `}
`;

export const InfoDescLogoContainer = styled.div`
  ${({ theme: t }) => css`
    margin-top: ${t.$rythm * 5}px;
    display: flex;
    align-items: center;
  `}
`;

export const InfoDescLogo = styled(Logo)``;

export const InfoDescLink = styled.a`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm};
    color: ${t.$anchor_color};
    margin-left: ${t.$rythm * 2}px;
  `}
`;

export const InfoAdvantagesBlock = styled.div`
  ${({ theme: t }) => css`
    min-height: ${t.$rythm * 47}px;
    padding: ${t.$rythm * 6.5}px ${t.$rythm * 5}px ${t.$rythm * 4}px ${t.$rythm * 5.5}px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media ${t.$phone}, ${t.$tablet} {
      min-height: ${t.$rythm * 43}px;      
      width: ${t.$rythm * 20}px;
      margin: 0 auto;

      padding: 0 ${t.$rythm * 0.75}px;
      grid-template-columns: repeat(1, 1fr);
      margin-top: ${t.$rythm * 2.25}px;
    }
  `}
`;

export const InfoAdvantageItem = styled.div`
  ${({ theme: t }) => css`
    display: flex;
    flex-wrap: wrap;
    min-height: 365px;

    &:first-child {
      border-bottom: ${t.$rythm / 16}px solid ${t.$border_color};
      border-right: ${t.$rythm / 16}px solid ${t.$border_color};

      & > ${InfoAdvantageImageContainer} {
        justify-content: flex-start;
      }

      & > ${InfoAdvantageTitle}, ${InfoAdvantageDesc} {
        text-align: left;
      }
    }

    &:nth-child(2) {
      border-bottom: ${t.$rythm / 16}px solid ${t.$border_color};
      border-left: ${t.$rythm / 16}px solid ${t.$border_color};
      justify-content: flex-end;

      & > ${InfoAdvantageImageContainer} {
        justify-content: flex-end;
      }

      & > ${InfoAdvantageTitle}, ${InfoAdvantageDesc} {
        text-align: right;
      }
    }
    
    &:nth-child(3) {
      border-top: ${t.$rythm / 16}px solid ${t.$border_color};
      border-right: ${t.$rythm / 16}px solid ${t.$border_color};

      & > ${InfoAdvantageImageContainer} {
        justify-content: flex-start;
      }

      & > ${InfoAdvantageTitle}, ${InfoAdvantageDesc} {
        text-align: left;
      }
    }

    &:last-child {
      border-top: ${t.$rythm / 16}px solid ${t.$border_color};
      border-left: ${t.$rythm / 16}px solid ${t.$border_color};
      justify-content: flex-end;

      & > ${InfoAdvantageImageContainer} {
        justify-content: flex-end;
      }

      & > ${InfoAdvantageTitle}, ${InfoAdvantageDesc} {
        text-align: right;
      }
    }

    @media ${t.$phone}, ${t.$tablet} {
      flex-direction: column-reverse;
      border: 0 !important;
      min-height: auto;

      &:first-child ${InfoAdvantageImageContainer} {
        margin-left: ${t.$rythm * 1.625}px;
      }

      &:nth-child(2) {
        & ${InfoAdvantageImageContainer} {
          margin-right: ${t.$rythm * 1.8125}px;
        }

        ${InfoAdvantageTitle} {
          width: 100%;
          align-self: flex-end;

          padding-right: ${t.$rythm * 2}px;     
        }
      }

      &:nth-child(3) ${InfoAdvantageImageContainer} {
        margin-left: ${t.$rythm * 1.625}px;
      }

      &:last-child {
        & ${InfoAdvantageImageContainer} {
          margin-right: ${t.$rythm * 1.8125}px;
        }

        ${InfoAdvantageTitle} {
          width: 100%;
          align-self: flex-end;

          padding-right: ${t.$rythm * 2}px;
        }
      }
    }
  `}
`;

export const InfoAdvantageTitle = styled.h2`
  ${({ theme: t }) => css`
    max-width: ${t.$rythm * 18.75}px;
    height: ${t.$rythm * 3.75}px;

    margin: ${t.$rythm * 2}px 0 0 0;

    font-size: ${t.$rythm * 1.25}px;
    line-height: 1.25;

    color: ${t.$text_color_black};

    @media ${t.$phone}, ${t.$tablet} {
      max-height: ${t.$rythm * 4}px;
      width: 75%;

      margin-top: 0;
      margin-bottom: ${t.$rythm / 2}px;

      line-height: 1.47;
      font-size: ${t.$rythm * 1.0625}px;
    }
  `}
`;

export const InfoAdvantageDesc = styled.span`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 8.75}px;
    width: ${t.$rythm * 18}px;

    line-height: 1.25;
    color: ${t.$text_color_black};
  `}
`;

export const InfoAdvantageImageContainer = styled.div`
  ${({ theme: t }) => css`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: ${t.$rythm * 10}px;

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 4}px;
      margin-bottom: ${t.$rythm * 0.8125}px;
    }
  `}
`;

export const InfoAdvantageImage = styled.img`
  ${({ theme: t }) => css`
    margin-bottom: ${t.$rythm * 2}px;

    @media ${t.$phone}, ${t.$tablet} {
      height: ${t.$rythm * 4}px;
      margin-bottom: 0;
    }
  `}
`;
