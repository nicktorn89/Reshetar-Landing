import { createContext } from 'react';
import { faInstagram, faVk, faTelegramPlane, faViber, IconDefinition } from '@fortawesome/free-brands-svg-icons';

import { InputProps } from 'src/components/UI/Input';
import { Options } from './components/UI/Select/types';

type InputTypes = {
  type: InputProps['type'] | 'select';
  name: string; 
  label?: string;
  options?: Options;
};

type AdvantageObject = {
  title: string;
  text: string;
};

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
    link: {
      text: string;
      url: string;
    };
    advantages: AdvantageObject[];
    images: string[];
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
  infoBlock: {
    description: `<span>Меня зовут Екатерина Решетар, я профессиональный визажист/стилист по прическам.
    Подчеркиваю Вашу красоту и создаю незабываемый и индивидуальный образ для любого события.</span>
    <span class='with-indent'>Работаю с профессиональной и люксовой косметикой: Dior, Mac, MUFE, Urban Decay, Atelier, Bobbi Brown,Lumene, 
    Inglot, Manly Pro и так далее.</span>`,
    link: {
      text: 'Все услуги',
      url: '#',
    },
    advantages: [
      {
        title: 'Большой опыт работы с невестами и женихами',
        text: 'Здесь Катерина придумает небольшой текст',
      },
      {
        title: 'Работаю исключительно с премиальной косметикой',
        text: 'Здесь Катерина придумает небольшой текст',
      },
      {
        title: 'Всегда в курсе актуальных свадебных тенденций',
        text: 'Здесь Катерина придумает небольшой текст',
      },
      {
        title: 'Гибкие цены',
        text: 'Здесь Катерина придумает небольшой текст',
      },
    ],
    images: ['wedding-cake.svg', 'star.svg', 'interlocking-rings.svg', 'rouble-symbol.svg'], // TODO: добавить возможность вставки в запрос
  },
});

export default LocaleData;
