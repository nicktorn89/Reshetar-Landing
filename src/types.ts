import { InputProps } from 'src/components/UI/Input';
import { Options } from './components/UI/Select/types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface LocaleDataType {
  header: {
    beforeContacts: string;
    text: string[];
    icons: IconDefinition[];
    links: string[];
    phoneNumber: string;
  };

  hero: {
    textBlock: {
      heading: string;
      description: string;
      price: string;
      currency: string;
      untilDate: string;
      note: string;
    };
    formBlock: {
      heading: string;
      buttonText: string;
      formInputs: InputTypes[],
    };
  };

  infoBlock: {
    description: string;
    link: LinkType;
    advantages: AdvantageObject[];
    images: string[];
  };

  sliderWithTabs: {
    heading: string;
    tabs: TabType[];
    descriptions: SliderDescriptionObject[];
    activeTab: number;
    images: string[][];
    nextButtonText: string;
  };

  rateSlider: {
    rate: number;
    rateText: (rate: number) => string;
    link: LinkType;
    images: string[];
  };
}

type InputTypes = {
  type: InputProps['type'] | 'select' | 'checkbox';
  name: string; 
  label?: string;
  options?: Options;
  value?: number | string | boolean;
};

export type AdvantageObject = {
  title: string;
  text: string;
};

type LinkType = {
  text: string;
  url: string;
};

type TabType = {
  value: number;
  text: string;
};

type SliderDescriptionObject = {
  heading: string;
  description: string;
};
