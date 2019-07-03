import { createContext } from 'react';
import { faInstagram, faVk, faTelegramPlane, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { orderForm } from './form';
import images from './images';

const LocaleData = createContext({
  header: {
    beforeContacts: 'Задайте вопрос:',
    text: ['ВКонтакте', 'Telegram', 'Whatsapp'],
    icons: [faVk, faTelegramPlane, faWhatsapp],
    links: ['https://vk.me/reshetarmuaa', 'https://t.me/reshetarmua', 'https://api.whatsapp.com/send?phone=79267208260'],
    phoneNumber: '+7 926 720-82-60',
  },

  hero: {
    phoneNumber: '+7 926 720-82-60',
    textBlock: {
      heading: 'Свадебный визажист',
      description: 'Идеальный образ <br/> по идеальной цене',
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
      Подчеркиваю красоту и\u00A0создаю незабываемый и\u00A0индивидуальный образ для Вашего торжества. 
      Развиваюсь в профессии с 2016 года, постоянно повышаю квалификацию,
      создаю современные и востребованные образы. Помогаю невестам на всех этапах подготовки к торжеству.`,
      secondPart: `Работаю с профессиональной и люксовой косметикой: Dior, Tom Ford, Mac, MUFE, Urban Decay,
      Bobbi Brown, Inglot и т.д. В работе с волосами использую лучшие титановые приборы для укладки
      MakeUpTrend и профессиональный стайлинг (URBAN TRIBE, Schwarzkopf, OSIS, REDKEN)`,
    },
    link: {
      text: 'Все услуги',
      url: '#',
    },
    advantages: [
      {
        title: 'Большой опыт работы с невестами и женихами',
        text: 'Более 50 пар счастливых пар и сотни гостей собраны мною на одно из самых ярких событий их жизни.',
      },
      {
        title: 'Работаю исключительно с премиальной косметикой',
        text: `Благодаря постоянному обновлению кейса люкс и проф косметикой, 
        я могу создать максимально стойкий, красивый и не ощутимый на невесте макияж.`,
      },
      {
        title: 'Всегда в курсе актуальных тенденций',
        text: `Регулярные мастер классы и насмотренность в сфере причесок и макияжа 
        позволяют мне предложить самые свежие и гармоничные образы для невесты.`,
      },
      {
        title: 'Гибкие цены',
        text: `Несколько пакетов услуг для невесты. Система скидок на образы для родственников и гостей.`,
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
        heading: 'Подбирается индивидуально, учитывая пожелания и образ невесты',
        description: [
          `Не перегружающий лицо макияж`,
          `Идеальный тон и грамотная коррекция всех черт`,
          `Выразительные глаза в любой цветовой гамме`,
          `Цвет помады на выбор`,
          `Накладные ресницы`,
        ],
      },
      {
        heading: 'Подбирается индивидуально, учитывая пожелания и образ невесты',
        description: [
          `Великолепная стойкость`,
          `На любую длину волос`,
          `Все укладки выполняются с использованием термозащиты`,
          `Работаю на своих инструментах и шпильках`,
        ],
      },
      {
        heading: 'Подбирается индивидуально, учитывая пожелания и образ невесты',
        description: [
          `Идеальные модели веточек и гребешков в прическу, созданные вручную.`,
          `Стоимость изделий от 1000 руб.`,
        ],
      },
    ],
    images: [
      images.withTabs.makeup,
      images.withTabs.hairstyle,
      images.withTabs.accessories,
    ],
    nextButtonText: 'Следующий образ',
  },

  rateSlider: {
    rate: 4.8,
    rateText: (rate: number) => `Средняя\u00A0оценка\u00A0моих услуг ${rate} из 5`,
    images: images.rate,
  },

  priceBlock: {
    heading: 'Сколько стоит свадебный образ',
    prices: [
      {
        title: 'LITE',
        options: ['Макияж + прическа', 'Ранний выезд (до 8:00)'],
        price: 5900,
        buttonText: 'Заказать',
      },
      {
        title: 'BRIDE',
        options: ['Макияж + прическа', 'Ранний выезд (до 8:00)', 'Репетиция'],
        price: 9900,
        buttonText: 'Заказать',
      },
      {
        title: 'LUXE',
        options: ['Макияж + прическа', 'Ранний выезд (до 8:00)', 'Репетиция', 'Образ для гостей'],
        beforePrice: 'от',
        price: 13900,
        buttonText: 'Заказать',
      },
    ],
    clarifying: '* cтоимость указана с учетом выезда внутри МКАД',
  },

  sliderBlocks: [
    { heading: 'Мои работы', images: images.works, styles: { paddingLeft: 90 } },
    { heading: 'Мои сертификаты', images: images.certificates },
  ],

  faq: {
    heading: 'Часто задаваемые вопросы',
    questions: [
      {
        question: 'Что входит в стоимость 5900 рублей?', 
        answer: `В стоимость 5900 рублей входит полный образ (макияж+прическа) в день торжества
        и выезд с 8:00 в пределах МКАД. Возможна доплата за более ранее время приезда и выезд за МКАД
        (обсуждается индивидуально), а также репетицию образа (4000 рублей).`,
      },
      {
        question: 'На какой косметике Вы работаете?', 
        answer: `Работаю с профессиональной и люксовой косметикой: Dior, Tom Ford, Mac, MUFE, Urban Decay,
        Bobbi Brown, Inglot и т.д. В работе с волосами использую лучшие титановые приборы для укладки
        MakeUpTrend и профессиональный стайлинг (URBAN TRIBE, Schwarzkopf, OSIS, REDKEN).`,
      },
      {
        question: 'Я бы хотела максимально естественный и стойкий образ, это возможно?', 
        answer: `Конечно, любой образ должен подчеркивать именно Ваши достоинства и внешность, а не делать
        из Вас другого человека. В своей работе я предпочитаю работать стойкими и деликатными продуктами их
        люкс и проф сегмента, чтобы создать красивый и не ощутимый на невесте макияж без эффекта маски, 
        а постоянные повышения и мастер-классы позволяют мне предложить современные и востребованные образы.`,
      },
      {
        question: 'Нужна ли репетиция свадебного образа?', 
        answer: `По моему опыту скажу, что лучше с репетицией, чем без нее. Во время репетиции
        (ориентировочно 3 часа) мы пробуем несколько вариантов макияжа, прически, подбираем при
        необходимости аксессуары в нее, чтобы Вы были уверены в каждой детали своего образа. После чего
        у Вас будет возможность показать этот образ своим близким, посмотреть себя в течении дня и в случае
        чего, внести свои коррективы. Репетиция проводится у меня в студии (территориально м. Печатники) в удобное Вам
        и мне время по предварительной записи, стоимость услуги 4000 рублей.`,
      },
      {
        question: 'Сколько занимают сборы невесты и собираете ли Вы маму/гостей в день торжества?', 
        answer: `Время сборов невесты около двух часов, дополнительно закладывается время на помощь с платьем
        и финальные штрихи. Готовый образ для гостей занимает около часа. 
        Сборы гостей осуществляются из расчета 3000р/чел, возможны скидки от 2-х человек.`,
      },
      {
        question: 'Как забронировать мою дату?', 
        answer: `Бронирование даты осуществляется по предоплате 1500 рублей.`,
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
      text: ['ВКонтакте', 'Telegram', 'Whatsapp'],
      icons: [faVk, faTelegramPlane, faWhatsapp],
      links: ['https://vk.me/reshetarmuaa', 'https://t.me/reshetarmua', 'https://api.whatsapp.com/send?phone=79267208260'],
      phoneNumber: 'г.Москва, +7 926 720-82-60',
    },
    copyright: '© 2019, reshetar.ru Ekaterinareshetar@gmail.com',
    socialLinks: [
      { url: 'https://vk.com/reshetarmua', icon: faVk },
      { url: 'https://www.facebook.com/reshetarmua/', icon: faFacebook },
      { url: 'https://www.instagram.com/reshetarmua/', icon: faInstagram },
    ],
  },
});

export default LocaleData;
