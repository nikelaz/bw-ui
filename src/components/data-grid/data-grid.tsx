import { Table, Row, Cell, HeaderCell } from '../table/table';

type Col = {
  field: string,
  label?: string,
  formattingFunction?: Function
}

type DataGridProps = Readonly<{
  cols: Array<Col>,
  data: Array<any>,
  children?: React.ReactNode,
  limit?: Number,
  offset?: Number
}>;

export const DataGrid = (props: DataGridProps) => {
  return (
    <Table>
      <thead>
        <Row>
          {props.cols.map((col, index) => (
            <HeaderCell
              textAlign={index !== 0 ? 'right' : undefined}
              fontSize={index === 0 ? 'l' : undefined}
              textColor={index === 0 ? 'dark' : undefined}
            >
              {col.label || col.field}
            </HeaderCell>
          ))}
        </Row>
      </thead>
      <tbody>
        {props.data.map(row => (
          <Row>
            {props.cols.map((col, index) => (
              <Cell textAlign={index !== 0 ? 'right' : undefined}>
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
