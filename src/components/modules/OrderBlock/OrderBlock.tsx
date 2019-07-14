import React, { memo } from 'react';
import { inputs } from '../Hero/Hero';
import { useFormState } from 'src/hooks';

import { OrderBlockProps } from './types';
import { InputProps } from 'src/components/UI/Input';

import { 
  OrderBlockContainer, OrderBlockHeading, OrderBlockFormContainer,
  OrderBlockFormInputs, OrderBlockFormCheckboxes, OrderBlockFormButton,
} from './styled';

const OrderBlock: React.FC<OrderBlockProps> = ({ data, isMobile, formState, handleChangeForm }) => {
  const { form, heading, mobileHeading } = data;

  const handleChange = ({ name, value }: { name: string, value: number | string | boolean }) => {
    const clonedFormState = { ...formState };

    clonedFormState[name] = name === 'phoneNumber'
      ? (value as string).replace(/\s/g, '')
      : value;

    handleChangeForm(clonedFormState);
  };

  const handleSendButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  const renderInputsByType = (inputTypes: string[]) => form.formInputs.map((input, index) => {
    const InputComponent = inputs[input.type];

    if (inputTypes.some((el) => input.type === el)) {
      // @ts-ignore
      return (<InputComponent
        key={index}
        type={input.type as InputProps['type']}
        name={input.name}
        options={input.options!}
        value={formState[input.name] as never || input.value as never}
        label={input.label as never}
        checked={formState[input.name] as never || input.value as never}
        onChange={handleChange}
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
