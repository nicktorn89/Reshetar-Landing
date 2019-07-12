import React, { memo } from 'react';
import { inputs } from '../Hero/Hero';
import { useFormState } from 'src/hooks';

import { OrderBlockProps } from './types';
import { FormType } from '../Hero/types';
import { InputProps } from 'src/components/UI/Input';

import { 
  OrderBlockContainer, OrderBlockHeading, OrderBlockFormContainer,
  OrderBlockFormInputs, OrderBlockFormCheckboxes, OrderBlockFormButton,
} from './styled';

const OrderBlock: React.FC<OrderBlockProps> = ({ data, isMobile }) => {
  const { form, heading, mobileHeading } = data;

  const formObject: FormType = {
    serviceType: 0,
    phoneNumber: '',
    repetition: false,
    earlyDeparture: false,
    guestMakeup: false,
  };

  const { formState, handleChangeForm } = useFormState(formObject);

  const handleSendButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  const renderInputsByType = (inputTypes: string[]) => form.formInputs.map((input, index) => {
    const InputComponent = inputs[input.type];

    if (inputTypes.some((el) => input.type === el)) {
      return (<InputComponent
        key={index}
        type={input.type as InputProps['type']}
        name={input.name}
        options={input.options!}
        value={formState[input.name] as never || input.value as never}
        label={input.label as never}
        onChange={handleChangeForm}
      />);
    }
  });

  return (
    <OrderBlockContainer id='order-block'>
      <OrderBlockHeading fontSize={50} node={'h3'}>{isMobile ? mobileHeading : heading}</OrderBlockHeading>

      <OrderBlockFormContainer>
        <OrderBlockFormInputs>
          {renderInputsByType(['select', 'text', 'number', 'maskInput'])}
          {!isMobile && <OrderBlockFormButton onClick={handleSendButton}>{form.buttonText}</OrderBlockFormButton>}
        </OrderBlockFormInputs>

        <OrderBlockFormCheckboxes>{renderInputsByType(['checkbox'])}</OrderBlockFormCheckboxes>
      </OrderBlockFormContainer>

      {isMobile && <OrderBlockFormButton onClick={handleSendButton}>{form.buttonText}</OrderBlockFormButton>}
    </OrderBlockContainer>
  );
};

export default memo(OrderBlock);
