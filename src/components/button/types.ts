export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  grey = "grey",
}

export enum ButtonFontSize {
  normal = "font-normal",
  large = "font-large",
}

export interface ButtonProps {
  variant: ButtonVariant;
  label: string;
  onPress: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  fontSize: ButtonFontSize;
}
