import React, { memo } from 'react';
import HeroProps from './types';
import { 
  HeroContainer, LogoBlock, LogoImg, 
  TextBlock, Heading, Description,
  PriceBlock, Price, Currency, UntilDate, Note,
  FormBlock, FormContainer, FormHeading,
  InputsGroup, SendButton, LogoContainer, 
  FormSelect, FormText, FormNumber, FormCheckbox, FormInputMask,
} from './styled';
import parse from 'html-react-parser';
import { InputProps } from 'src/components/UI/Input';

export const inputs = {
  select: FormSelect,
  text: FormText,
  number: FormNumber,
  checkbox: FormCheckbox,
  maskInput: FormInputMask,
};

const HeroComponent: React.FC<HeroProps> = ({ data }) => {
  const { textBlock, formBlock } = data;

  const renderInputs = formBlock.formInputs.map((input, index) => {
    const InputComponent = inputs[input.type];

    return (<InputComponent 
      key={index} 
      type={input.type as InputProps['type']} 
      name={input.name}
      options={input.options!}
      value={input.value as never}
      label={input.label as never}
    />);
  });

  return (
    <HeroContainer>
      <LogoBlock>
        <LogoContainer>
          <LogoImg />
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
          <FormHeading>{formBlock.heading && formBlock.heading}</FormHeading>

          <InputsGroup>
            {renderInputs}
          </InputsGroup>

          <SendButton>{formBlock.buttonText}</SendButton>
        </FormContainer>
      </FormBlock>
    </HeroContainer>
  );
};

HeroComponent.displayName = 'Hero';

export default memo(HeroComponent);
