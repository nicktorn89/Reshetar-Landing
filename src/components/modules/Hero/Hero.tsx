import React, { memo, useState } from 'react';
import parse from 'html-react-parser';

import { useFormState } from 'src/hooks';
import { normalizeToSend } from 'src/components/utils';

import HeroProps, { InputTypes, FormType } from './types';
import { Status } from 'src/components/UI';
import { InputProps } from 'src/components/UI/Input';

import { 
  HeroContainer, HeroLogoBlock, HeroLogoContainer, HeroLogoImg, 
  HeroTextBlock, HeroHeading, HeroDescription,
  HeroPriceBlock, HeroPrice, HeroPriceCurrency, 
  HeroUntilDate, HeroPriceNote, HeroFormBlock, 
  HeroFormContainer, HeroFormHeading, HeroInputsGroup,
  HeroFormSendButton, HeroFormSelect, HeroFormText,
  HeroFormNumber, HeroFormCheckbox, HeroFormInputMask,
} from './styled';
import { HeaderNumberSpan } from '../Header/styled';

const axios = require('axios');

export const inputs: InputTypes = {
  select: HeroFormSelect,
  text: HeroFormText,
  number: HeroFormNumber,
  checkbox: HeroFormCheckbox,
  maskInput: HeroFormInputMask,
};

const Hero: React.FC<HeroProps> = ({ data, isMobile }) => {
  const { textBlock, formBlock, phoneNumber } = data;

  const [showStatus, setShowStatus] = useState(false);
  const [requestStatus, setRequestStatus] = useState(false);
  
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
    axios
      .post('/action.php', normalizeToSend(formState as FormType))
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

  const renderInputs = formBlock.formInputs.map((input, index) => {
    const InputComponent = inputs[input.type];

    // @ts-ignore
    return <InputComponent 
      key={index} 
      type={input.type as InputProps['type']} 
      name={input.name}
      options={input.options!}
      value={formState[input.name] as never || input.value as never}
      checked={formState[input.name] as never || input.value as never}
      label={input.label as never}
      onChange={handleChangeForm}
    />;
  });

  return (
    <HeroContainer>
      <HeroLogoBlock>
        <HeroLogoContainer>
          <HeroLogoImg />
          {isMobile && <HeaderNumberSpan>{phoneNumber}</HeaderNumberSpan>}
        </HeroLogoContainer>
      </HeroLogoBlock>

      <HeroTextBlock>
        <HeroHeading fontSize={70} node={'h2'}>{textBlock.heading}</HeroHeading>
        <HeroDescription>{parse(textBlock.description)}</HeroDescription>
        <HeroPriceBlock>
          <HeroPrice>{textBlock.price}</HeroPrice>
          <HeroPriceCurrency>{textBlock.currency}</HeroPriceCurrency>
        </HeroPriceBlock>
        
        <HeroUntilDate>{textBlock.untilDate}</HeroUntilDate>

        <HeroPriceNote>{textBlock.note}</HeroPriceNote>
      </HeroTextBlock>

      <HeroFormBlock>
        <HeroFormContainer>
          {!isMobile && <HeroFormHeading>{formBlock.heading && formBlock.heading}</HeroFormHeading>}

          <HeroInputsGroup>
            {renderInputs}
          </HeroInputsGroup>

          <HeroFormSendButton onClick={handleSendButton}>{isMobile ? formBlock.mobileButtonText : formBlock.buttonText}</HeroFormSendButton>
        </HeroFormContainer>
      </HeroFormBlock>

      {showStatus && <Status status={requestStatus} />}
    </HeroContainer>
  );
};

export default memo(Hero);
