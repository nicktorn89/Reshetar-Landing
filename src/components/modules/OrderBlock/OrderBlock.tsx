import React, { memo } from 'react';
import { OrderBlockProps } from './types';
import { 
  OrderBlockContainer, OrderBlockHeading, OrderBlockFormContainer,
  OrderBlockFormInputs, OrderBlockFormCheckboxes,
} from './styled';
import { InputProps } from 'src/components/UI/Input';
import { inputs } from '../Hero/Hero';
import { SendButton as OrderBlockFormButton } from '../Hero/styled';

const OrderBlock: React.FC<OrderBlockProps> = ({ data }) => {
  const { form, heading } = data;

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
      <OrderBlockHeading>{heading}</OrderBlockHeading>

      <OrderBlockFormContainer>
        <OrderBlockFormInputs>
          {renderInputsByType(['select', 'text', 'number', 'maskInput'])}
          <OrderBlockFormButton>{form.buttonText}</OrderBlockFormButton>
        </OrderBlockFormInputs>

        <OrderBlockFormCheckboxes>{renderInputsByType(['checkbox'])}</OrderBlockFormCheckboxes>
      </OrderBlockFormContainer>
    </OrderBlockContainer>
  );
};

export default memo(OrderBlock);
