import React, { memo, useState } from 'react';
import { inputs } from '../Hero/Hero';
import { Status } from 'src/components/UI';
import { normalizeToSend } from 'src/components/utils';

import { OrderBlockProps } from './types';
import { InputProps } from 'src/components/UI/Input';

import { 
  OrderBlockContainer, OrderBlockHeading, OrderBlockFormContainer,
  OrderBlockFormInputs, OrderBlockFormCheckboxes, OrderBlockFormButton, OrderBlockFormButtonWrapper,
} from './styled';

const axios = require('axios');

const OrderBlock: React.FC<OrderBlockProps> = ({ data, isMobile, formState, handleChangeForm }) => {
  const { form, heading, mobileHeading } = data;

  const [showStatus, setShowStatus] = useState(false);
  const [requestStatus, setRequestStatus] = useState(false);

  const handleChange = ({ name, value }: { name: string, value: number | string | boolean }) => {
    const clonedFormState = { ...formState };

    clonedFormState[name] = name === 'phoneNumber'
      ? (value as string).replace(/\s/g, '')
      : value;

    handleChangeForm(clonedFormState);
  };

  const handleSendButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post('/action.php', normalizeToSend(formState))
      .then(() => {
        setShowStatus(true);
        setRequestStatus(true);
      })
      .catch(() => {
        setShowStatus(true);
        setRequestStatus(false);
      });

    setTimeout(() => {
      setShowStatus(false);
    }, 3000);
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
    <React.Fragment>
      {showStatus && <Status status={requestStatus} />}
      <OrderBlockContainer id='order-block'>
        <OrderBlockHeading fontSize={50} node={'h3'}>{isMobile ? mobileHeading : heading}</OrderBlockHeading>

        <OrderBlockFormContainer>
          <OrderBlockFormInputs>
            {renderInputsByType(['select', 'text', 'number', 'maskInput'])}
            {!isMobile && <OrderBlockFormButton onClick={handleSendButton}>{form.buttonText}</OrderBlockFormButton>}
          </OrderBlockFormInputs>

          <OrderBlockFormCheckboxes>{renderInputsByType(['checkbox'])}</OrderBlockFormCheckboxes>
        </OrderBlockFormContainer>
        {isMobile && 
        <OrderBlockFormButtonWrapper>
          <OrderBlockFormButton onClick={handleSendButton}>{form.buttonText}</OrderBlockFormButton>
        </OrderBlockFormButtonWrapper>
        }
      </OrderBlockContainer>
    </React.Fragment>
  );
};

export default memo(OrderBlock);
