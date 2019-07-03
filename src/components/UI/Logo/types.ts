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
