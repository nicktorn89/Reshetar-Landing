import React from 'react';
import find from 'ramda/es/find';
import propEq from 'ramda/es/propEq';
import DropdownIndicator from './DropdownIndicator';
import { SelectComponents } from 'react-select/lib/components';

import { Option, SelectProps } from './types';
import { ValueType } from 'react-select/lib/types';

import { Select } from './styled';

const components: Partial<SelectComponents<{}>> = { DropdownIndicator };

const SelectComponent: React.FC<SelectProps> =
  ({ value: defaultValue, options, name, placeholder, onChange, onFocus, onBlur, className }) => {
    const value = find(propEq('value', defaultValue), options) || options[0];

    const handleChange = (selected: ValueType<{}>): void => {
      onChange && onChange({
        name,
        value: ((selected as Option).value),
      });
    };

    const handleBlur = (): void => {
      onBlur && onBlur({ name });
    };

    const handleFocus = (): void => {
      onFocus && onFocus({ name });
    };

    return (
      <Select
        name={name}
        value={value}
        isSearchable={false}
        placeholder={placeholder}
        blurInputOnSelect={true}
        classNamePrefix={'select'}
        options={options}
        menuPosition={'absolute'}
        components={components}
        className={className}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    );
  };

SelectComponent.defaultProps = { placeholder: 'Выберите значение' };
SelectComponent.displayName = 'Select';

export default SelectComponent;
