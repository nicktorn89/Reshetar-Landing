import React, { memo } from 'react';
import { CheckboxProps } from './types';
import 'rc-checkbox/assets/index.css';
import { StyledCheckbox, CheckboxLabel } from './styled';

const Checkbox: React.FC<CheckboxProps> = ({ label, value, name, onChange }) => {
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
      <StyledCheckbox name={name} value={value} onClick={handleChange} />
      {label}
    </CheckboxLabel>
  );
};

export default memo(Checkbox);
