export interface IButtonParams {
  to?: string;
  href?: string;
  primary?: false | true;
  outline?: false | true;
  text?: false | true;
  rounded?: false | true;
  disabled?: false | true;
  small?: false | true;
  large?: false | true;
  children?: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick: () => void;
}
