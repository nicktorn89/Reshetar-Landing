import React, { memo } from 'react';
import parse from 'html-react-parser';

import { useFormState } from 'src/hooks';

import HeroProps, { InputTypes, FormType } from './types';
import { InputProps } from 'src/components/UI/Input';

import { 
  HeroContainer, LogoBlock, LogoImg, 
  TextBlock, Heading, Description,
  PriceBlock, Price, Currency, UntilDate, Note,
  FormBlock, FormContainer, FormHeading,
  InputsGroup, SendButton, LogoContainer, 
  FormSelect, FormText, FormNumber, FormCheckbox, FormInputMask,
} from './styled';
import { NumberSpan } from '../Header/styled';

export const inputs: InputTypes = {
  select: FormSelect,
  text: FormText,
  number: FormNumber,
  checkbox: FormCheckbox,
  maskInput: FormInputMask,
};

const Hero: React.FC<HeroProps> = ({ data, isMobile }) => {
  const { textBlock, formBlock, phoneNumber } = data;
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

  const renderInputs = formBlock.formInputs.map((input, index) => {
    const InputComponent = inputs[input.type];

    return (<InputComponent 
      key={index} 
      type={input.type as InputProps['type']} 
      name={input.name}
      options={input.options!}
      value={formState[input.name] as never || input.value as never}
      label={input.label as never}
      onChange={handleChangeForm}
    />);
  });

  return (
    <HeroContainer>
      <LogoBlock>
        <LogoContainer>
          <LogoImg />
          {isMobile && <NumberSpan>{phoneNumber}</NumberSpan>}
        </LogoContainer>
      </LogoBlock>

      <TextBlock>
        <Heading>{textBlock.heading}</Heading>
        <Description>{parse(textBlock.description)}</Description>
        <PriceBlock>
          <Price>{textBlock.price}</Price>
          <Currency>{textBlock.currency}</Currency>
        </PriceBlock>
        
        <UntilDate>{textBlock.untilDate}</UntilDate>

        <Note>{textBlock.note}</Note>
      </TextBlock>

      <FormBlock>
        <FormContainer>
          {!isMobile && <FormHeading>{formBlock.heading && formBlock.heading}</FormHeading>}

          <InputsGroup>
            {renderInputs}
          </InputsGroup>

          <SendButton onClick={handleSendButton}>{isMobile ? formBlock.mobileButtonText : formBlock.buttonText}</SendButton>
        </FormContainer>
      </FormBlock>
    </HeroContainer>
  );
};

export default memo(Hero);
