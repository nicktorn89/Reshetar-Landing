import React, { memo } from 'react';
import { components } from 'react-select';
import { IndicatorProps } from 'react-select/lib/components/indicators';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import Icon from 'src/components/UI/Icon';

const DropdownIndicator: React.FC<IndicatorProps<{}>> = (props) => {
  const icon = props.selectProps.menuIsOpen
    ? faChevronUp
    : faChevronDown;

  return components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <Icon icon={icon} />
    </components.DropdownIndicator>
  );
};

export default memo(DropdownIndicator);
