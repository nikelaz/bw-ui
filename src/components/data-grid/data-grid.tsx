import { Table } from '../table/table';
import { Row } from '../table/row';
import { HeaderCell } from '../table/header-cell';
import { DataGridRow } from './data-grid-row';
import { DataGridProps } from './data-grid.types';

export const DataGrid = (props: DataGridProps) => (
  <Table>
    <thead>
      <Row>
        {props.cols.map((col) => {
          if (col.headerCellRenderer) {
            return col.headerCellRenderer()
          }
          return (
            <HeaderCell textAlign={col.textAlign} key={col.field}>
              {col.label || col.field}
            </HeaderCell>
          )
        })}
      </Row>
    </thead>
    <tbody>
      {props.data.map((row, index) => (
        <DataGridRow
          row={row}
          cols={props.cols}
          onRowChange={props.onChange}
          deleteRows={props.deleteRows}
          onDelete={props.onDelete}
          key={row.id || index}
          progressField={props.progressField}
        />
      ))}
    </tbody>
    {props.children}
  </Table>
);
