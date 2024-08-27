import { IconTypes } from "../icon/icon";

export type SidebarNavProps = Readonly<{
  children: React.ReactNode,
  className?: string,
}>;

export type SidebarNavBtnProps = Readonly<{
  label: string,
  isActive?: boolean,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  component?: any,
  href?: string,
  icon: IconTypes,
}>;
