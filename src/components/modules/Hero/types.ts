import { LocaleDataType } from 'src/types';
import { FormSelect, FormText, FormNumber, FormCheckbox, FormInputMask } from './styled';

export default interface HeroProps {
  data: LocaleDataType['hero'];
}

export type InputTypes = {
  [prop: string]: typeof FormSelect | typeof FormText | typeof FormNumber | typeof FormCheckbox | typeof FormInputMask;
};

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
