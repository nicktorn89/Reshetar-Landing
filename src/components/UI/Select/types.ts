import { OptionsType } from 'react-select/lib/types';

export interface SelectProps {
  value?: Value;
  placeholder?: string;
  options: Options;
  name: string;
  className?: string;

  onChangeComponent?: (value: Value) => void;
  onChange?: (e: SelectChangeEvent) => void;
  onBlur?: (e: { name: string }) => void;
  onFocus?: (e: { name: string }) => void;
}

export type Value = string | number | boolean;
export type Option<V = Value> = {
  label: React.ReactNode,
  value: V;
};
export type Options = OptionsType<Option>;

export interface SelectChangeEvent {
  value: Value;
  name: string;
}

export interface SelectBlurEvent {
  value: Value;
  name: string;
}

export interface SelectFocusEvent {
  value: Value;
  name: string;
}
