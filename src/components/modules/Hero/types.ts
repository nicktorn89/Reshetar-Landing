import { HeroFormSelect, HeroFormText, HeroFormNumber, HeroFormCheckbox, HeroFormInputMask } from './styled';

export default interface HeroProps extends BacicModuleProps {
  data: LocaleDataType['hero'];
}

export type InputTypes = {
  [prop: string]: typeof HeroFormSelect | typeof HeroFormText | typeof HeroFormNumber | typeof HeroFormCheckbox | typeof HeroFormInputMask;
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

export type FormType = {
  serviceType: number;
  phoneNumber: string | number;
  repetition: boolean;
  earlyDeparture: boolean;
  guestMakeup: boolean;
  [name: string]: number | string | boolean;
};
