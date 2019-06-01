import React, { memo } from 'react';
import { ButtonProps, ButtonTypesMap } from './types';

import { Button } from './styled';

const ButtonComponent: React.FC<ButtonProps> = ({ isDisabled, children, onClick, ...restProps }) => (
  <Button onClick={onClick} disabled={isDisabled} {...restProps}>
    {children}
  </Button>
);

ButtonComponent.displayName = 'Button';
ButtonComponent.defaultProps = {
  isRounded: false,
  themeType: ButtonTypesMap.base,
  children: '',
};

export default memo(ButtonComponent);
