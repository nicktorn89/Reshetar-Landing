import { FormType } from './modules/Hero/types';
import { serviceTypeOptions } from 'src/form';

export const normalizeToSend = (stateObject: FormType) => {
  const names = ['form__phone', 'form__servicetype', 'form__repetition', 'form__earlyDeparture', 'form__guestMakeup'];
  const values = [ 
    encodeURIComponent(stateObject.phoneNumber as string), 
    encodeURIComponent(serviceTypeOptions[stateObject.serviceType].label),
    stateObject.repetition ? 'Да' : 'Нет', stateObject.earlyDeparture ? 'Да' : 'Нет',
    stateObject.guestMakeup ? 'Да' : 'Нет',
  ];

  let formString = '';

  for (let i = 0; i < names.length; i += 1) {
    // tslint:disable-next-line
    formString = formString + names[i] + '=' + values[i] + '&';
  }
  
  return formString;
};
