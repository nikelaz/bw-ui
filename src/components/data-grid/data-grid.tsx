import { Table } from '../table/table';
import { Row } from '../table/row';
import { HeaderCell } from '../table/header-cell';
import { DataGridRow } from './data-grid-row';
import { DataGridProps } from './data-grid.types';
import { useState } from 'react';

export const DataGrid = (props: DataGridProps) => {
  const [data, setData] = useState(props.data);

  const onRowChange = ({ rowData, index }: any) => {
    const dataCopy = [...data];
    dataCopy[index] = rowData;
    setData(dataCopy);
    if (props.onChange) props.onChange({rowData});
  };

  return (
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
        {data.map((row, index) => (
          <DataGridRow
            row={row}
            index={index}
            cols={props.cols}
            onRowChange={onRowChange}
            deleteRows={props.deleteRows}
            onDelete={props.onDelete}
            key={row.id || index}
            progressComputeFunction={props.progressComputeFunction}
          />
        ))}
      </tbody>

      {props.children}

      {typeof props.tfootRenderer !== 'undefined' ? (
        <tfoot>
          { props.tfootRenderer(data) }
        </tfoot>
      ) : null}
    </Table>
  );
};
