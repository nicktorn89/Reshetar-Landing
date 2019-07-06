import React, { memo, useState } from 'react';
import { OrderBlockProps } from './types';
import { 
  OrderBlockContainer, OrderBlockHeading, OrderBlockFormContainer,
  OrderBlockFormInputs, OrderBlockFormCheckboxes, OrderBlockFormButton,
} from './styled';
import { InputProps } from 'src/components/UI/Input';
import { inputs } from '../Hero/Hero';
import { FormType } from '../Hero/types';

const OrderBlock: React.FC<OrderBlockProps> = ({ data, isMobile }) => {
  const { form, heading, mobileHeading } = data;

  const formObject: FormType = {
    serviceType: 0,
    phoneNumber: '',
    repetition: false,
    earlyDeparture: false,
    guestMakeup: false,
  };

  const [formState, changeFormState] = useState(formObject);

  const handleChange = ({ name, value }: { name: string, value: number | string | boolean }) => {
    const clonedFormState = { ...formState };

    if (name === 'phoneNumber') {
      const trimmedValue = (value as string).replace(/\s/g, '');
      
      clonedFormState[name] = trimmedValue;
    } else {
      clonedFormState[name] = value;
    }

    changeFormState(clonedFormState);
  };

  const handleSendButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  const renderInputsByType = (inputTypes: string[]) => form.formInputs.map((input, index) => {
    const InputComponent = inputs[input.type];

    if (inputTypes.some((el) => input.type === el)) {
      return (<InputComponent
        onChange={handleChange}
        key={index}
        type={input.type as InputProps['type']}
        name={input.name}
        options={input.options!}
        value={formState[input.name] as never || input.value as never}
        label={input.label as never}
      />);
    }
  });

  return (
    <OrderBlockContainer id='order-block'>
      <OrderBlockHeading>{isMobile ? mobileHeading : heading}</OrderBlockHeading>

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