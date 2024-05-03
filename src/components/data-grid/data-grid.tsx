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
        {
          Array.from(Array(props.limit || props.data.length).keys()).map(index => {
            const row = props.data[index];
            
            return (
              <>
                {props.data[index] ? (
                  <Row>
                    {props.cols.map((col, index) => (
                      <Cell textAlign={index !== 0 ? 'right' : undefined}>
                        {col.formattingFunction ? col.formattingFunction(row[col.field]) : row[col.field]}
                      </Cell>
                    ))}
                  </Row>
                ) : ''}
              </>
            );
          })
        }
        {props.children}
      </tbody>
    </Table>
  );
}
