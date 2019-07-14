export interface InputProps {
  type: 'text' | 'number';
  value?: Value;
  className?: string;
  name: string;
  placeholder?: string;
  isCentered?: boolean;
  maxLength?: number;

  onChange?: (e: ChangeEvent<Value>) => void;
  onFocus?: (e: FocusEvent<Value>) => void;
  onBlur?: (e: BlurEvent<Value>) => void;
}

export type Value = string;

export interface ChangeEvent<V> {
  name: string;
  value: V;
  data?: string;
}

export interface BlurEvent<V> {
  name: string;
  value: V;
  data: string;
}

export interface FocusEvent<V> {
  name: string;
  value: V;
  data: string;
}
