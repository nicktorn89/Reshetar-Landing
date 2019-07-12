import React, { memo, useRef } from 'react';

import { InputProps } from './types';

import { Container, Input } from './styled';

const InputMask: React.FC<InputProps> = ({ onChange, onBlur, onFocus, ...restProps }) => {
  const inputRef = useRef<InputMask | null>(null);

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

      inputRef.current && (inputRef.current as unknown as HTMLInputElement).blur();
    }
  };

  return (
    <Container>
      <Input
        {...restProps}
        placeholder={'+7     9xx xxx xx xx'}
        mask={'+7     \\999 999 99 99'}
        maskChar={'x'}
        ref={inputRef}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyPress={handleKeyPress}
      />
    </Container>
  );
};

InputMask.displayName = 'InputMask';
InputMask.defaultProps = {
  type: 'text',
  placeholder: 'Введите значение',
};

export default memo(InputMask);
