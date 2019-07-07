import React, { memo } from 'react';

import { ButtonGroupProps } from './types';

import { ButtonGroup } from './styled';

const ButtonGroupComponent: React.FC<ButtonGroupProps> = ({ className, children }) => (
  <ButtonGroup className={className}>
    {children}
  </ButtonGroup>
);

ButtonGroupComponent.displayName = 'ButtonGroup';

export default memo(ButtonGroupComponent);
