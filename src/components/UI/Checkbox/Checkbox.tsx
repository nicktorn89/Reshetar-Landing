import React, { memo } from 'react';
import { CheckboxProps } from './types';
import 'rc-checkbox/assets/index.css';
import { StyledCheckbox, CheckboxLabel } from './styled';

const Checkbox: React.FC<CheckboxProps> = ({ label, value, name }) => {
  return (
  <CheckboxLabel>
    { /* 
    // @ts-ignore */}
    <StyledCheckbox name={name} value={value} />
    {label}
  </CheckboxLabel>);
};

export default memo(Checkbox);
