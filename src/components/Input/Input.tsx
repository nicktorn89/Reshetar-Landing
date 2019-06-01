import React, { memo, useRef } from 'react';
import omit from 'ramda/es/omit';
import { InputProps } from './types';
import { Container, Input } from './styled';

const InputComponent: React.FC<InputProps> = ({ prefix, suffix, onChange, onBlur, onFocus, ...restProps }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const { name } = restProps;

    onChange && onChange({
      name,
      value: e.currentTarget.value,
      data: (e.nativeEvent as Event & { data: string }).data,
    });
  };

  const handleBlur = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const { name } = restProps;

    onBlur && onBlur({
      name,
      value: e.currentTarget.value,
      data: (e.nativeEvent as Event & { data: string }).data,
    });
  };

  const handleFocus = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const { name } = restProps;

    onFocus && onFocus({
      name,
      value: e.currentTarget.value,
      data: (e.nativeEvent as Event & { data: string }).data,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();

      inputRef.current && inputRef.current.blur();
    }
  };

  if (restProps.value === undefined) {
    restProps = omit(['value'], restProps);
  }

  return (
    <Container>
      <Input
        {...restProps}
        ref={inputRef}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyPress={handleKeyPress}
      />
    </Container>
  );
};

InputComponent.displayName = 'Input';
InputComponent.defaultProps = {
  type: 'text',
  placeholder: 'Введите значение',
};

export default memo(InputComponent);
