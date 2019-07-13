import { LocaleDataType } from 'src/types';
import { FormType } from '../Hero/types';

export interface OrderBlockProps {
  data: LocaleDataType['orderBlock'];
  isMobile: boolean;
  formState: FormType;
  handleChangeForm: Function;
}
