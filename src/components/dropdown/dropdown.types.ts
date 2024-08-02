export type DropdownOption = {
  value: any,
  label: React.ReactNode,
  isActive: boolean,
  onClick: Function,
};

export type DropdownProps = Readonly<{
  children: React.ReactNode,
  options: Array<DropdownOption>,
  onChange?: Function,
}>;
