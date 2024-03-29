import { InputProps } from 'src/components/UI/Input';

export const orderForm = [
  {
    type: 'select' as InputProps['type'],
    name: 'serviceType',
    options: [
      { label: 'Макияж + прическа', value: 0 },
      { label: 'Макияж', value: 1 },
      { label: 'Прическа', value: 2 },
    ],
  },
  {
    type: 'maskInput',
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
];

export const priceBlockStates = [
  {
    serviceType: 0,
    phoneNumber: '',
    repetition: false,
    earlyDeparture: true,
    guestMakeup: false,
  },
  {
    serviceType: 0,
    phoneNumber: '',
    repetition: true,
    earlyDeparture: true,
    guestMakeup: false,
  },
  {
    serviceType: 0,
    phoneNumber: '',
    repetition: true,
    earlyDeparture: true,
    guestMakeup: true,
  },
];
