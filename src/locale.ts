import { createContext } from 'react';
import { faInstagram, faVk, faTelegramPlane, faViber } from '@fortawesome/free-brands-svg-icons';
import { InputProps } from 'src/components/UI/Input';

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
          options: [{ label: 'Макияж + прическа', value: 0 }],
        },
        {
          type: 'text' as InputProps['type'],
          name: 'phoneNumber',
        },
        {
          type: 'checkbox' as InputProps['type'],
          name: 'repetition',
          label: 'Репетиция',
          value: false,
        },
        {
          type: 'checkbox' as InputProps['type'],
          name: 'earlyDeparture',
          label: 'Ранний выезд (до 8:00)',
          value: false,
        },
        {
          type: 'checkbox' as InputProps['type'],
          name: 'guestMakeup',
          label: 'Причёска/макияж для гостей',
          value: false,
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

  sliderWithTabs: {
    heading: 'Что входит в свадебный образ',
    tabs: [
      { value: 0, text: 'Макияж' },
      { value: 1, text: 'Прическа' },
      { value: 2, text: 'Аксессуары' },
    ],
    descriptions: [
      {
        heading: 'Полноценный супер- пупер макияж, который есть только у меня',
        description: `<span>Будет сделано вот это</span> <br/> <span>А потом еще сделаю вот так</span>
        <span>В конце можно сделать вот</span> <br/> <span>А еще не забудь вот это</span>`,
      },
      {
        heading: 'Полноценный супер- пупер макияж, который есть только у меня',
        description: `<span>Будет сделано вот это</span> <br/> <span>А потом еще сделаю вот так</span>
        <span>В конце можно сделать вот</span> <br/> <span>А еще не забудь вот это</span>`,
      },
      {
        heading: 'Полноценный супер- пупер макияж, который есть только у меня',
        description: `<span>Будет сделано вот это</span> <br/> <span>А потом еще сделаю вот так</span>
        <span>В конце можно сделать вот</span> <br/> <span>А еще не забудь вот это</span>`,
      },
    ],
    images: [
      [firstImage, secondImage, thirdImage],
    ],
    activeTab: 0,
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
    { title: 'Мои работы', images: [firstWork, firstWork, firstWork], styles: { paddingLeft: 90 } },
    { title: 'Мои сертификаты', images: [firstWork, firstWork, firstWork] },
  ],
});

export default LocaleData;
