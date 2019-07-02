import { createContext } from 'react';
import { faInstagram, faVk, faTelegramPlane, faViber, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { orderForm } from './form';

const firstImage = require('src/images/description-photo.png');
const secondImage = require('src/images/gatsby-icon.png');
const thirdImage = require('src/images/gatsby-astronaut.png');

const firstRate = require('src/images/rate-photos/rate1.png');

const firstWork = require('src/images/works/work1.png');

const LocaleData = createContext({
  header: {
    beforeContacts: 'Задайте вопрос:',
    text: ['Instagram', 'ВКонтакте', 'Telegram', 'Viber'],
    icons: [faInstagram, faVk, faTelegramPlane, faViber],
    links: ['#', '#', '#', '#'],
    phoneNumber: '+7 926 720-82-60',
  },

  hero: {
    phoneNumber: '+7 926 720-82-60',
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
      mobileButtonText: 'Оформить заказ со скидкой',
      formInputs: orderForm,
    },
  },

  infoBlock: {
    description: {
      firstPart: `Меня зовут Екатерина Решетар, я\u00A0профессиональный визажист/стилист по\u00A0прическам.
      Подчеркиваю Вашу красоту и\u00A0создаю незабываемый и\u00A0индивидуальный образ для любого события.`,
      secondPart: `Работаю с профессиональной и люксовой косметикой: Dior, Mac, MUFE, Urban Decay, Atelier, Bobbi Brown,Lumene, 
      Inglot, Manly Pro и\u00A0так\u00A0далее.`,
    },
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
    images: ['wedding-cake.svg', 'star.svg', 'interlocking-rings.svg', 'rouble-symbol.svg'],
  },

  sliderWithTabs: {
    heading: 'Что входит в свадебный образ',
    tabs: [
      { value: 0, text: 'Макияж' },
      { value: 1, text: 'Прическа' },
      { value: 2, text: 'Аксессуары' },
    ],
    descriptions: [
      {
        heading: 'Полноценный супер- пупер макияж, который есть только у\u00A0меня',
        description: [
          `Будет сделано вот это`,
          `А потом еще сделаю вот так`,
          `В конце можно сделать вот`,
          `А еще не забудь вот это`,
        ],
      },
      {
        heading: 'Полноценный супер- пупер макияж, который есть только у\u00A0меня',
        description: [
          `Будет сделано вот это`,
          `А потом еще сделаю вот так`,
          `В конце можно сделать вот`,
          `А еще не забудь вот это`,
        ],
      },
      {
        heading: 'Полноценный супер- пупер макияж, который есть только у\u00A0меня',
        description: [
          `Будет сделано вот это`,
          `А потом еще сделаю вот так`,
          `В конце можно сделать вот`,
          `А еще не забудь вот это`,
        ],
      },
    ],
    images: [
      [firstImage, secondImage, thirdImage],
      [firstRate, firstImage, thirdImage],
      [firstWork, thirdImage, firstRate],
    ],
    nextButtonText: 'Следующий образ',
  },

  rateSlider: {
    rate: 4.8,
    rateText: (rate: number) => `Средняя\u00A0оценка\u00A0моих услуг ${rate} из 5`,
    link: {
      text: 'Оставить оценку',
      url: '#',
    },
    images: [firstRate, firstRate, firstRate],
  },

  priceBlock: {
    heading: 'Сколько стоит свадебный образ',
    prices: [
      {
        title: 'Базовый',
        options: ['Макияж + прическа', 'Ранний выезд (до 8:00)'],
        price: 5900,
        buttonText: 'Заказать',
      },
      {
        title: 'Базовый',
        options: ['Макияж + прическа', 'Ранний выезд (до 8:00)', 'Репетиция'],
        price: 7900,
        buttonText: 'Заказать',
      },
      {
        title: 'Базовый',
        options: ['Макияж + прическа', 'Ранний выезд (до 8:00)', 'Репетиция', 'Накрасить гостей'],
        beforePrice: 'от',
        price: 9900,
        buttonText: 'Заказать',
      },
    ],
    clarifying: '* cтоимость указана с учетом доставки внутри МКАД',
  },

  sliderBlocks: [
    { heading: 'Мои работы', images: [firstWork, firstWork, firstWork], styles: { paddingLeft: 90 } },
    { heading: 'Мои сертификаты', images: [firstWork, firstWork, firstWork] },
  ],

  faq: {
    heading: 'Часто задаваемые вопросы',
    questions: [
      {
        question: 'На какой косметике Вы работаете?', 
        answer: `Работаю с профессиональной и\u00a0люксовой косметикой: Dior, Tom Ford, Mac, MUFE, Urban Decay,
        Atelier, Bobbi Brown, Inglot и т.д. В\u00a0работе\u00a0с волосами использую лучшие титановые приборы\u00a0для
        укладки MakeUpTrend и\u00a0профессиональный стайлинг (URBAN TRIBE, Schwarzkopf, OSIS, REDKEN)`,
      },
      {
        question: 'Как забронировать дату?', 
        answer: `Работаю с профессиональной и\u00a0люксовой косметикой: Dior, Tom Ford, Mac, MUFE, Urban Decay,
        Atelier, Bobbi Brown, Inglot и т.д. В\u00a0работе\u00a0с волосами использую лучшие титановые приборы\u00a0для
        укладки MakeUpTrend и\u00a0профессиональный стайлинг (URBAN TRIBE, Schwarzkopf, OSIS, REDKEN)`,
      },
      {
        question: 'Как забронировать дату?', 
        answer: `Работаю с профессиональной и\u00a0люксовой косметикой: Dior, Tom Ford, Mac, MUFE, Urban Decay,
        Atelier, Bobbi Brown, Inglot и т.д. В\u00a0работе\u00a0с волосами использую лучшие титановые приборы\u00a0для
        укладки MakeUpTrend и\u00a0профессиональный стайлинг (URBAN TRIBE, Schwarzkopf, OSIS, REDKEN)`,
      },
      {
        question: 'Как забронировать дату?', 
        answer: `Работаю с профессиональной и\u00a0люксовой косметикой: Dior, Tom Ford, Mac, MUFE, Urban Decay,
         Atelier, Bobbi Brown, Inglot и т.д. В\u00a0работе\u00a0с волосами использую лучшие титановые приборы\u00a0для
         укладки MakeUpTrend и\u00a0профессиональный стайлинг (URBAN TRIBE, Schwarzkopf, OSIS, REDKEN)`,
      },
    ],
  },

  orderBlock: {
    heading: 'Оформление заказа',
    mobileHeading: 'Оформление заказа со\u00a0скидкой 10%',
    form: {
      buttonText: 'Заказать',
      mobileButtonText: 'Заказать',
      formInputs: orderForm,
    },
  },

  footer: {
    headerClone: {
      beforeContacts: 'Задайте вопрос:',
      text: ['Instagram', 'ВКонтакте', 'Telegram', 'Viber'],
      icons: [faInstagram, faVk, faTelegramPlane, faViber],
      links: ['#', '#', '#', '#'],
      phoneNumber: 'г.Москва,\u00a0ул.Полбина, д.14 +7 926 720-82-60',
    },
    copyright: '© 2019, reshetar.ru ekaterinareshetar@gmail.com',
    socialLinks: [
      { url: '#', icon: faVk },
      { url: '#', icon: faFacebook },
      { url: '#', icon: faInstagram },
    ],
  },
});

export default LocaleData;
