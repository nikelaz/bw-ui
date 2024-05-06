import { Table, Row, Cell, HeaderCell } from '../table/table';
import { useState } from 'react';

type Col = {
  field: string,
  label?: string,
  textAlign?: 'right',
  formattingFunction?: Function,
  headerCellRenderer?: Function,
  editable?: boolean
}

type DataGridProps = Readonly<{
  cols: Array<Col>,
  data: Array<any>,
  children?: React.ReactNode
}>;

export const DataGrid = (props: DataGridProps) => {
  return (
    <Table>
      <thead>
        <Row>
          {props.cols.map((col) => {
            if(col.headerCellRenderer) {
              return col.headerCellRenderer()
            }

            return <HeaderCell textAlign={col.textAlign}>{col.label || col.field}</HeaderCell>
          })}
        </Row>
      </thead>
      <tbody>
        {props.data.map(row => (
          <Row>
            {props.cols.map((col) => (
              <DataGridCell row={row} col={col} />
            ))}
          </Row>
        ))}
      </tbody>
      {props.children}
    </Table>
  );
}

type DataGridRowProps = Readonly<{
  row: any,
  cols: Array<Col>
}>;

const DataGridRow = (props: DataGridRowProps) => {
  return props.cols.map((col) => (
    <DataGridCell row={props.row} col={col} />
  ))
};

type DataGridCellProps = Readonly<{
  col: Col,
  row: any,
}>;

const DataGridCell = (props: DataGridCellProps) => {
  const [cachedValue, setCachedValue] = useState(props.row[props.col.field]);

  const blurHandler = (event: React.ChangeEvent<HTMLElement>) => {
    const value = event.target.innerText;
    if (cachedValue === value) return;
  }

  return (
    <Cell
      textAlign={props.col.textAlign}
      editable={props.col.editable}
      onBlur={props.col.editable ? blurHandler : undefined}
    >
      {props.row[props.col.field]}
    </Cell>
  )
};
