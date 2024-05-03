import { Table, Row, Cell, HeaderCell } from '../table/table';

type Col = {
  field: string,
  label?: string
}

type DataGridProps = Readonly<{
  cols: Array<Col>,
  data: Array<any>
}>;

export const DataGrid = (props: DataGridProps) => (
  <Table>
    <thead>
      <Row>
        {props.cols.map((col, index) => (
          <HeaderCell textAlign={index !== 0 ? 'right' : undefined}>
            {col.label || col.field}
          </HeaderCell>
        ))}
      </Row>
    </thead>
    <tbody>
      {props.data.map(row => (
        <Row>
          {props.cols.map((col, index) => (
            <Cell textAlign={index !== 0 ? 'right' : undefined}>{row[col.field]}</Cell>
          ))}
        </Row>
      ))}
    </tbody>
  </Table>
);
