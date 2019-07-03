export interface ButtonProps {
  isRounded?: boolean;
  isDisabled?: boolean;
  className?: string;
  themeType?: ButtonTypesMap;
  size?: 'sm' | 'base' | 'lg';
  children: React.ReactNode;
  asSuccess?: boolean;

  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonGroupProps {
  className?: string;
  children: React.ReactNode;
}

export enum ButtonTypesMap {
  primary = 'primary',
  base = 'base',
  hollow = 'hollow',
}
