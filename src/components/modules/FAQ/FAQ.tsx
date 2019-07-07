import React, { memo } from 'react';
import { default as Accordion } from 'react-collapsible';

import FAQProps from './types';

import { FAQContainer, FAQHeading, QuestionsContainer } from './styled';

const FAQComponent: React.FC<FAQProps> = ({ data, isMobile }) => {
  const { heading, questions } = data;

  const allQuestions = isMobile 
    ? questions.filter((k, index) => index < 2)
    : questions;

  const renderQuestions = allQuestions.map((question, index) =>
    <Accordion
      key={index}
      trigger={question.question}
      open={index === 0}
      lazyRender={true}
      className={index === allQuestions.length - 1 ? 'last-accordion' : 'ordinar'}
      openedClassName={index === allQuestions.length - 1 ? 'last-accordion' : 'ordinar'}
    >
      {question.answer}
    </Accordion>,
  );

  return (
    <FAQContainer>
      <FAQHeading>{heading}</FAQHeading>

      <QuestionsContainer>
        {renderQuestions}
      </QuestionsContainer>
    </FAQContainer>
  );
};

FAQComponent.displayName = 'FAQ';

export default memo(FAQComponent);
