export type DropdownOption = {
  value: any,
  label: string,
  isActive: boolean,
};

export type DropdownProps = Readonly<{
  children: React.ReactNode,
  options: Array<DropdownOption>,
  onChange?: Function,
}>;
