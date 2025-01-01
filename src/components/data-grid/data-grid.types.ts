import { MouseEventHandler } from "react";

export type onChangeEvent = Readonly<{
  rowData: any,
  index: number,
}>;

export type ColDef = {
  field: string,
  label?: string,
  textAlign?: 'right',
  fontSize?: 'l',
  fontWeight?: 'bold',
  headerCellRenderer?: Function,
  editable?: boolean,
  inputType?: 'text' | 'number' | 'date',
  unitSuffix?: string,
  width?: string,
  desktopOnly?: boolean,
  onClick?: MouseEventHandler<HTMLInputElement>,
}

export type DataGridProps = Readonly<{
  cols: Array<ColDef>,
  data: Array<any>,
  children?: React.ReactNode,
  onChange?: Function,
  deleteRows?: boolean,
  onDelete?: Function,
  progressField?: string,
  tfootRenderer?: Function,
  progressComputeFunction?: Function,
  className?: string,
}>;

export type DataGridRowProps = Readonly<{
  row: any,
  index: number,
  cols: Array<ColDef>,
  onRowChange: Function,
  deleteRows?: boolean,
  onDelete?: Function,
  progressComputeFunction?: Function,
}>;


export type DataGridCellProps = Readonly<{
  col: ColDef,
  row: any,
  onChange?: Function,
  progress?: number,
  skipMobileHeader?: boolean,
  onClick?: MouseEventHandler<HTMLInputElement>,
}>;

export type CellChangeEvent = Readonly<{
  key: string,
  value: string
}>;
