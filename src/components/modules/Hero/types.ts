import { LocaleDataType } from 'src/locale';

export default interface HeroProps {
  data: LocaleDataType['hero'];
}

export interface LogoQueryType {
  file: {
    childImageSharp: {
      fixed: {
        base64: string;
        height: number;
        width: number;
        src: string;
        srcSet: string;
      };
    };
  };
}
