import { FormType } from '../Hero/types';

export interface OrderBlockProps extends BacicModuleProps {
  data: LocaleDataType['orderBlock'];
  formState: FormType;
  handleChangeForm: Function;
}
