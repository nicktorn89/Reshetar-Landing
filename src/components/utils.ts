import { FormType } from './modules/Hero/types';
import { serviceTypeOptions } from 'src/form';

export const normalizeToSend = (stateObject: FormType) => {
  return {
    form__phone: stateObject.phoneNumber,
    form__servicetype: serviceTypeOptions[stateObject.serviceType].label,
    form__repition: stateObject.repetition ? 'Да' : 'Нет',
    form__earlyDeparture: stateObject.earlyDeparture ? 'Да' : 'Нет',
    form__guestMakeup: stateObject.guestMakeup ? 'Да' : 'Нет',
  };
};
