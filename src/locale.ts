import { createContext } from 'react';
import { faInstagram, faVk, faTelegramPlane, faViber, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Options } from 'tmp';
import { InputProps } from 'src/components/UI/Input';

interface InputTypes {
  type: InputProps['type'] | 'select';
  name: string; 
  label?: string;
  options?: Options;
}

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
}

const LocaleData = createContext({
  header: {
    beforeContacts: 'Задайте вопрос:',
    text: ['Instagram', 'ВКонтакте', 'Telegram', 'Viber'],
    icons: [faInstagram, faVk, faTelegramPlane, faViber],
    links: ['#', '#', '#', '#'],
    phoneNumber: '+7 926 720-82-60',
  },
  hero: {
    textBlock: {
      heading: 'Свадебный визажист',
      description: 'Идеальный образ невеcты <br/> по идеальной цене',
      price: '5 900',
      currency: 'руб',
      untilDate: 'до 10 мая',
      note: '*макияж + прическа + ранний выезд',
    },
    formBlock: {
      heading: 'Расскажите о желаниях',
      buttonText: 'Рассчитать стоимость',
      formInputs: [
        {
          type: 'select' as InputProps['type'],
          name: 'serviceType',
          options: [{ label: 'hi', value: 0 }],
        },
        {
          type: 'text' as InputProps['type'],
          name: 'phoneNumber',
        },
      ],
    },
  },
});

export default LocaleData;
