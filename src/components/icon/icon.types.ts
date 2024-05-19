import { IconTypes } from './icon';

export type IconProps = Readonly<{
  width?: number,
  height?: number,
  fill?: string,
  type?: IconTypes,
  className?:string,
}>;
