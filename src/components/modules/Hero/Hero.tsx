import React, { memo } from 'react';
import HeroProps, { LogoQueryType } from './types';
import { 
  HeroContainer, LogoBlock, LogoImg, 
  TextBlock, Heading, Description,
  PriceBlock, Price, Currency, UntilDate, Note,
  FormBlock, FormContainer, FormHeading,
  InputsGroup, SendButton,
} from './styled';
import { StaticQuery, graphql } from 'gatsby';
import parse from 'html-react-parser';
import Input, { InputProps } from 'src/components/UI/Input';
import Select from 'src/components/UI/Select';

const inputs = {
  select: Select,
  text: Input,
  number: Input,
};

const HeroComponent: React.FC<HeroProps> = ({ data }) => {
  const { textBlock, formBlock } = data;
  const renderImage = (queryData: LogoQueryType) => <LogoImg fixed={queryData.file.childImageSharp.fixed} />;

  const renderInputs = formBlock.formInputs.map((input, index) => {
    const InputComponent = inputs[input.type];
    const restProps = input.options && input.options;

    return (<InputComponent 
      key={index} 
      type={input.type as InputProps['type']} 
      name={input.name}
      options={input.options}
    />);
  });

  return (
    <HeroContainer>
      <LogoBlock>
        <StaticQuery
          query={logoQuery}
          render={renderImage}
        />
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
          <FormHeading>{formBlock.heading}</FormHeading>

          <InputsGroup>
            {renderInputs}
          </InputsGroup>

          <SendButton>{formBlock.buttonText}</SendButton>
        </FormContainer>
      </FormBlock>
    </HeroContainer>
  );
};

const logoQuery = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 160, height: 54) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

HeroComponent.displayName = 'Hero';

export default memo(HeroComponent);
