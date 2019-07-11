import React, { memo } from 'react';
import { default as Accordion } from 'react-collapsible';

import FAQProps from './types';

import { FAQContainer, FAQHeading, QuestionsContainer } from './styled';

const FAQ: React.FC<FAQProps> = ({ data }) => {
  const { heading, questions } = data;

  const renderQuestions = questions.map((question, index) =>
    <Accordion
      key={index}
      trigger={question.question}
      open={index === 0}
      lazyRender={true}
      className={index === questions.length - 1 ? 'last-accordion' : 'ordinar'}
      openedClassName={index === questions.length - 1 ? 'last-accordion' : 'ordinar'}
    >
      {question.answer}
    </Accordion>,
  );

  return (
    <FAQContainer>
      <FAQHeading fontSize={50} node={'h3'}>{heading}</FAQHeading>

      <QuestionsContainer>
        {renderQuestions}
      </QuestionsContainer>
    </FAQContainer>
  );
};

export default memo(FAQ);
