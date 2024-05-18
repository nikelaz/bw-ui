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
}>;

export type CellProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  textAlign?: 'right',
  fontSize?: 'l',
  fontWeight?: 'bold',
  colSpan?: number,
}>;

export type RowProps = Readonly<{
  children: React.ReactNode,
  className?: string,
}>;

export type TableProgressProps = Readonly<{
  value: number
  max?: number
}>;
