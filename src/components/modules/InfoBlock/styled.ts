import styled, { css } from 'styled-components';
import Logo from 'src/components/UI/Logo';
import Img from 'gatsby-image';

export const InfoBlockContainer = styled.section`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 57.5}px;
    height: ${t.$rythm * 66}px;
    margin: 0 auto;
    position: relative;
    bottom: ${t.$rythm * 6}px;
    background: ${t.$bg};
    border: ${t.$border_radius_base}px;
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2);
  `}
`;

export const DescriptionBlock = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 19.25}px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  `}
`;

export const DescriptionPhoto = styled.div`
  ${({ theme: t }) => css`
    width: ${t.$rythm * 19.25}px;
    height: ${t.$rythm * 19.25}px;
  `}
`;

export const DescImg = styled(Img)`
`;

export const DescriptionText = styled.span`
  ${({ theme: t }) => css`
    height: calc(100% - ${t.$rythm * 2}px);
    width: 55%;
    color: ${t.$text_color_black};
    margin: ${t.$rythm * 2}px 0 0 ${t.$rythm * 2}px;
    font-size: ${t.$rythm}px;
    display: flex;
    flex-direction: column;
    
    span {
      color: ${t.$text_color_black};
    }

    .with-indent {
      margin-top: ${t.$rythm}px;
    }
  `}
`;

export const DescLogoContainer = styled.div`
  ${({ theme: t }) => css`
    position: relative;
    top: ${t.$rythm * 5}px;
    display: flex;
    align-items: center;
  `}
`;

export const DescLogo = styled(Logo)``;

export const Link = styled.a`
  ${({ theme: t }) => css`
    font-size: ${t.$rythm};
    color: ${t.$anchor_color};
    margin-left: ${t.$rythm * 2}px;
  `}
`;

export const AdvantagesBlock = styled.div`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 47}px;
    padding: ${t.$rythm * 6.5}px ${t.$rythm * 5}px ${t.$rythm * 4}px ${t.$rythm * 5.5}px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export const AdvantageItem = styled.div`
  ${({ theme: t }) => css`
    display: flex;
    flex-wrap: wrap;

    &:first-child {
      border-bottom: ${t.$rythm / 16}px solid ${t.$border_color};
      border-right: ${t.$rythm / 16}px solid ${t.$border_color};

      & > ${AdvantageImageContainer} {
        justify-content: flex-start;
      }

      & > ${AdvantageTitle}, ${AdvantageDesc} {
        text-align: left;
      }
    }

    &:nth-child(2) {
      border-bottom: ${t.$rythm / 16}px solid ${t.$border_color};
      border-left: ${t.$rythm / 16}px solid ${t.$border_color};
      justify-content: flex-end;

      & > ${AdvantageImageContainer} {
        justify-content: flex-end;
      }

      & > ${AdvantageTitle}, ${AdvantageDesc} {
        text-align: right;
      }
    }
    
    &:nth-child(3) {
      border-top: ${t.$rythm / 16}px solid ${t.$border_color};
      border-right: ${t.$rythm / 16}px solid ${t.$border_color};

      & > ${AdvantageImageContainer} {
        justify-content: flex-start;
      }

      & > ${AdvantageTitle}, ${AdvantageDesc} {
        text-align: left;
      }
    }

    &:last-child {
      border-top: ${t.$rythm / 16}px solid ${t.$border_color};
      border-left: ${t.$rythm / 16}px solid ${t.$border_color};
      justify-content: flex-end;

      & > ${AdvantageImageContainer} {
        justify-content: flex-end;
      }

      & > ${AdvantageTitle}, ${AdvantageDesc} {
        text-align: right;
      }
    }
  `}
`;

export const AdvantageTitle = styled.h2`
  ${({ theme: t }) => css`
    max-width: ${t.$rythm * 18.75}px;
    height: ${t.$rythm * 3.75}px;
    margin: ${t.$rythm * 2}px 0 0 0;
    font-size: ${t.$rythm * 1.25}px;
    color: ${t.$text_color_black};
  `}
`;

export const AdvantageDesc = styled.span`
  ${({ theme: t }) => css`
    height: ${t.$rythm * 2.5}px;
    width: ${t.$rythm * 18}px;
    color: ${t.$text_color_black};
  `}
`;

export const AdvantageImageContainer = styled.div`
  ${({ theme: t }) => css`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: calc(100% - ${t.$rythm * 8.4}px);
  `}
`;

export const AdvantageImage = styled.img`
  ${({ theme: t }) => css`
    margin-bottom: ${t.$rythm * 2}px;
  `}
`;
