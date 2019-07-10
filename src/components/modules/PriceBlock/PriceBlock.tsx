import React, { memo } from 'react';
import { Icon, ButtonTypesMap } from 'src/components/UI';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import PriceBlockProps from './types';

import { 
  PriceBlockContainer, PriceBlockHeading, PriceBlockItemsContainer,
  PriceBlockItem, PriceBlockItemTitle, PriceItemOptionsContainer, 
  PriceBlockItemOption, ItemOptionText, PriceBlockItemText, PriceBlockItemNumber,
  PriceBlockItemOrderButton, PriceBlockClarifyingText,
 } from './styled';

const PriceBlock: React.FC<PriceBlockProps> = ({ data, isMobile }) => {
  const { heading, prices, clarifying } = data;

  const renderPriceItems = prices.map((item, index) => {
    const { title, beforePrice, price, options, buttonText } = item;

    const renderOptions = options.map((option, index) =>
      <PriceBlockItemOption key={index}>
        <Icon icon={faCheck} size='lg' />
        <ItemOptionText>
          {option}
        </ItemOptionText>
      </PriceBlockItemOption>);

    return (
      <PriceBlockItem key={index}>
        <PriceBlockItemTitle>
          {title}
          {isMobile &&
            <PriceBlockItemText>
              : 
              {beforePrice && beforePrice}
              <PriceBlockItemNumber>{price}</PriceBlockItemNumber>
              руб
          </PriceBlockItemText>
          }
        </PriceBlockItemTitle>

        <PriceItemOptionsContainer>{renderOptions}</PriceItemOptionsContainer>

        {!isMobile && 
          <PriceBlockItemText>
            {beforePrice && beforePrice}
            <PriceBlockItemNumber>{price}</PriceBlockItemNumber>
            руб
          </PriceBlockItemText>
        }
        {/* 
        //@ts-ignore */}
        <PriceBlockItemOrderButton
          node={'a'}
          href={'#order-block'}
          themeType={index === 1 ? ButtonTypesMap.base : ButtonTypesMap.hollow}
          active={index === 1}
        >
          {buttonText}
        </PriceBlockItemOrderButton>
      </PriceBlockItem>
    );
  });

  return (
    <PriceBlockContainer>
      <PriceBlockHeading fontSize={50} node={'h3'}>{heading}</PriceBlockHeading>

      <PriceBlockItemsContainer>{renderPriceItems}</PriceBlockItemsContainer>

      <PriceBlockClarifyingText>{clarifying}</PriceBlockClarifyingText>
    </PriceBlockContainer>
  );
};

export default memo(PriceBlock);
