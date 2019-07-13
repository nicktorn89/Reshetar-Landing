import React, { memo } from 'react';

import { CheckboxProps } from './types';

import { StyledCheckbox, CheckboxLabel, LabelSpan } from './styled';

const Checkbox: React.FC<CheckboxProps> = ({ label, value, name, onChange, checked }) => {
  const handleChange = ({ currentTarget }: React.MouseEvent<HTMLInputElement>): void => {
    const { name, checked } = currentTarget;

    onChange && onChange({
      name,
      value: checked,
    });
  };

  return (
    <CheckboxLabel>
      { /* 
      // @ts-ignore */}
      <StyledCheckbox checked={checked} name={name} value={value} onClick={handleChange} />
      <LabelSpan>{label}</LabelSpan>
    </CheckboxLabel>
  );
};

export default memo(Checkbox);
