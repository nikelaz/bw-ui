import { IconTypes } from '../icon/icon';

export type ButtonProps = Readonly<{
  children?: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  icon?: IconTypes,
  iconWidth?: number,
  iconHeight?: number,
  iconPosition?: 'right',
  style?: 'link' | 'secondary',
  autoFocus?: boolean,
  type?: 'button'
  fontSize?: string
}>;
