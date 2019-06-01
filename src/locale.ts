import { createContext } from 'react';
import { faInstagram, faVk, faTelegramPlane, faViber, IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface LocaleDataType {
  header: {
    beforeContacts: string;
    text: string[];
    icons: IconDefinition[];
    links: string[];
    phoneNumber: string;
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
});

export default LocaleData;
