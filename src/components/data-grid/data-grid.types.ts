export type onChangeEvent = Readonly<{
  rowData: any
}>;

export type ColDef = {
  field: string,
  label?: string,
  textAlign?: 'right',
  fontSize?: 'l',
  fontWeight?: 'bold',
  formattingFunction?: Function,
  headerCellRenderer?: Function,
  editable?: boolean,
  inputType?: 'text' | 'number' | 'date',
  unitSuffix?: string
}

export type DataGridProps = Readonly<{
  cols: Array<ColDef>,
  data: Array<any>,
  children?: React.ReactNode,
  onChange?: Function,
  deleteRows?: boolean,
  onDelete?: Function,
  progressField?: string,
}>;

export type DataGridRowProps = Readonly<{
  row: any,
  cols: Array<ColDef>,
  onRowChange?: Function,
  deleteRows?: boolean,
  onDelete?: Function,
  progressField?: string,
}>;


export type DataGridCellProps = Readonly<{
  col: ColDef,
  row: any,
  onChange?: Function,
  progress?: number,
}>;

export type CellChangeEvent = Readonly<{
  key: string,
  value: string
}>;
