import { LocaleDataType } from 'src/types';

export default interface HeaderProps {
  data: LocaleDataType['header'];
  isMobile: boolean;
  node?: 'header' | 'div';
}
