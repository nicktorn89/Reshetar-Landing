import React, { memo } from 'react';
import { 
  PriceBlockContainer, PriceBlockTitle, PriceItemsContainer,
  PriceItem, PriceItemTitle, PriceItemOptionsContainer, 
  PriceItemOption, PriceItemText, PriceItemNumber,
  PriceItemOrder, ClarifyingText,
 } from './styled';
import PriceBlockProps from './types';

import { Icon, ButtonTypesMap } from 'src/components/UI';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PriceBlock: React.FC<PriceBlockProps> = ({ data }) => {
  const { heading, prices, clarifying } = data;

  const renderPriceItems = prices.map((item, index) => {
    const { title, beforePrice, price, options, buttonText } = item;

    const renderOptions = options.map((option, index) => <PriceItemOption key={index}>
      <Icon icon={faCheck} size='lg' />
      {option}
    </PriceItemOption>);

    return (
      <PriceItem key={index}>
        <PriceItemTitle>{title}</PriceItemTitle>

        <PriceItemOptionsContainer>{renderOptions}</PriceItemOptionsContainer>

        <PriceItemText>
          {beforePrice && beforePrice}
          <PriceItemNumber>
            {price}
          </PriceItemNumber>
          руб
        </PriceItemText>

        <PriceItemOrder 
          themeType={index === 1 ? ButtonTypesMap.base : ButtonTypesMap.hollow}
          active={index === 1}
        >
          {buttonText}
        </PriceItemOrder>
      </PriceItem>
    );
  });

  return (
    <PriceBlockContainer>
      <PriceBlockTitle>{heading}</PriceBlockTitle>

      <PriceItemsContainer>{renderPriceItems}</PriceItemsContainer>

      <ClarifyingText>{clarifying}</ClarifyingText>
    </PriceBlockContainer>
  );
};

export default memo(PriceBlock);
