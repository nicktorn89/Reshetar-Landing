import { ChangeEvent, FocusEvent, BlurEvent } from '../Input/types';
import { Value } from '../Select/types';

export interface InputProps {
  type: 'text' | 'number';
  value: string | number;
  className?: string;
  name: string;
  placeholder?: string;
  isCentered?: boolean;
  maxLength?: number;

  onChange?: (e: ChangeEvent<Value>) => void;
  onFocus?: (e: FocusEvent<Value>) => void;
  onBlur?: (e: BlurEvent<Value>) => void;
}