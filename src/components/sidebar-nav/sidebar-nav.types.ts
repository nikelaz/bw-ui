export type SidebarNavProps = Readonly<{
  children: React.ReactNode,
  className?: string,
}>;

export type SidebarNavBtnProps = Readonly<{
  children: React.ReactNode,
  label: string,
  isActive?: boolean,
  className?: string,
  onClick?: Function
}>;
