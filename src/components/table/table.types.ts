export type TableProps = Readonly<{
  children: React.ReactNode,
  className?: string
}>;

export type HeaderCellProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  fontSize?: 'l',
  textColor?: 'dark',
  textAlign?: 'right',
  width?: string,
  mobile?: boolean,
  desktop?: boolean,
}>;

export type CellProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  textAlign?: 'right',
  fontSize?: 'l',
  fontWeight?: 'bold',
  colSpan?: number,
  unitSuffix?: string,
  width?: string,
  header?: string,
  mobile?: boolean,
  desktop?: boolean,
}>;

export type RowProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  mobileGhost?: boolean,
}>;

export type TableProgressProps = Readonly<{
  value: number
  max?: number
}>;
