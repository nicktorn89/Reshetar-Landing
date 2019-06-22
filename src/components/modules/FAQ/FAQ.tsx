import React, { memo } from 'react';
import FAQProps from './types';
import { FAQContainer, FAQHeading, QuestionsContainer } from './styled';
import { default as Accordion } from 'react-collapsible';

const FAQComponent: React.FC<FAQProps> = ({ data }) => {
  const { heading, questions } = data;

  const renderQuestions = questions.map((question, index) => 
  <Accordion 
    key={index} 
    trigger={question.question}
    open={index === 0}
    lazyRender={true}
  >
    {question.answer}
  </Accordion>);

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