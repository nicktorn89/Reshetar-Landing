import { ImageDecorator } from 'react-viewer/lib/ViewerProps';

export const createSliderItem = (images: string[]): ImageDecorator[] => images.map((image) => { return { src: image }; });

export const emptyFunc = (): void => {};

const months = [
  'января', 'февраля', 'марта',
  'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября',
  'октября', 'ноября', 'декабря',
];

const daysPerMonth = [
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

const getSundayDate = () => {
  const today = new Date();
  const daysUntilSunday = 6 - today.getDay() + 1;

  return today.getDate() + daysUntilSunday;
};

export const getUntilDate = (): string => {
  const month = new Date().getMonth();

  return `${getSundayDate()} ${getSundayDate() > daysPerMonth[month] ? months[month + 1] : months[month]}`;
};
