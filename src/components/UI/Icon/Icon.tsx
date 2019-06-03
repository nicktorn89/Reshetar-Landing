import React, { memo } from 'react';
import { IconProps } from './types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngry } from '@fortawesome/free-solid-svg-icons/faAngry';

const Icon: React.FC<IconProps> = ({ className, icon = faAngry, size = '1x' }) => (
  <FontAwesomeIcon
    className={className}
    icon={icon}
    size={size}
  />
);

export default memo(Icon);
