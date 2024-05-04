import { Table, Row, Cell, HeaderCell } from '../table/table';

type Col = {
  field: string,
  label?: string,
  textAlign?: 'right',
  formattingFunction?: Function,
  headerCellRenderer?: Function
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
              <Cell textAlign={col.textAlign}>
                {col.formattingFunction ? col.formattingFunction(row[col.field]) : row[col.field]}
              </Cell>
            ))}
          </Row>
        ))}
      </tbody>
      {props.children}
    </Table>
  );
}
