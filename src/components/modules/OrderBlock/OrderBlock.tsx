import React, { memo } from 'react';
import { OrderBlockProps } from './types';
import { 
  OrderBlockContainer, OrderBlockHeading, OrderBlockFormContainer,
  OrderBlockFormInputs, OrderBlockFormCheckboxes, OrderBlockFormButton,
} from './styled';
import { InputProps } from 'src/components/UI/Input';
import { inputs } from '../Hero/Hero';

const OrderBlock: React.FC<OrderBlockProps> = ({ data, isMobile }) => {
  const { form, heading, mobileHeading } = data;

  const renderInputsByType = (inputTypes: string[]) => form.formInputs.map((input, index) => {
    const InputComponent = inputs[input.type];

    if (inputTypes.some((el) => input.type === el)) {
      return (<InputComponent
        key={index}
        type={input.type as InputProps['type']}
        name={input.name}
        options={input.options!}
        value={input.value as never}
        label={input.label as never}
      />);
    }
  });

  return (
    <OrderBlockContainer>
      <OrderBlockHeading>{isMobile ? mobileHeading : heading}</OrderBlockHeading>

      <OrderBlockFormContainer>
        <OrderBlockFormInputs>
          {renderInputsByType(['select', 'text', 'number', 'maskInput'])}
          {!isMobile && <OrderBlockFormButton>{form.buttonText}</OrderBlockFormButton>}
        </OrderBlockFormInputs>

        <OrderBlockFormCheckboxes>{renderInputsByType(['checkbox'])}</OrderBlockFormCheckboxes>
      </OrderBlockFormContainer>

      {isMobile && <OrderBlockFormButton>{form.buttonText}</OrderBlockFormButton>}
    </OrderBlockContainer>
  );
};

export default memo(OrderBlock);
