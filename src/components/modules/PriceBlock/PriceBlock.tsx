import React, { memo } from 'react';
import { Icon, ButtonTypesMap } from 'src/components/UI';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import PriceBlockProps from './types';

import { 
  PriceBlockContainer, PriceBlockTitle, PriceItemsContainer,
  PriceItem, PriceItemTitle, PriceItemOptionsContainer, 
  PriceItemOption, PriceItemText, PriceItemNumber,
  PriceItemOrderButton, ClarifyingText,
 } from './styled';

const PriceBlock: React.FC<PriceBlockProps> = ({ data, isMobile }) => {
  const { heading, prices, clarifying } = data;

  const renderPriceItems = prices.map((item, index) => {
    const { title, beforePrice, price, options, buttonText } = item;

    const renderOptions = options.map((option, index) =>
      <PriceItemOption key={index}>
        <Icon icon={faCheck} size='lg' />
        {option}
      </PriceItemOption>);

    return (
      <PriceItem key={index}>
        <PriceItemTitle>
          {title}
          {isMobile &&
            <PriceItemText>
              : 
              {beforePrice && beforePrice}
              <PriceItemNumber>{price}</PriceItemNumber>
              руб
          </PriceItemText>
          }
        </PriceItemTitle>

        <PriceItemOptionsContainer>{renderOptions}</PriceItemOptionsContainer>

        {!isMobile && 
          <PriceItemText>
            {beforePrice && beforePrice}
            <PriceItemNumber>{price}</PriceItemNumber>
            руб
          </PriceItemText>
        }
        {/* 
        //@ts-ignore */}
        <PriceItemOrderButton
          node={'a'}
          href={'#order-block'}
          themeType={index === 1 ? ButtonTypesMap.base : ButtonTypesMap.hollow}
          active={index === 1}
        >
          {buttonText}
        </PriceItemOrderButton>
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
