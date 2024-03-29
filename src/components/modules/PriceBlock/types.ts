import { LocaleDataType } from 'src/types';

export default interface PriceBlockProps {
  data: LocaleDataType['priceBlock'];
  isMobile: boolean;
  handleChangeForm: Function;
}
