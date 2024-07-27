import { Table } from '../table/table';
import { Row } from '../table/row';
import { HeaderCell } from '../table/header-cell';
import { DataGridRow } from './data-grid-row';
import { DataGridProps } from './data-grid.types';
import { useState, useEffect } from 'react';
import { flatten, unflatten } from 'flat';

export const DataGrid = (props: DataGridProps) => {
  const flattenedData = props.data.map(node => flatten(node));
  const [data, setData] = useState(flattenedData);

  const onRowChange = ({ rowData, index }: any) => {
    const dataCopy = [...data];
    dataCopy[index] = rowData;
    setData(dataCopy);
    if (props.onChange) props.onChange({
      rowData: unflatten(rowData)
    });
  };

  useEffect(() => {
    setData(props.data.map(node => flatten(node)));
  }, [props.data]);

  return (
    <Table>
      <thead>
        <Row>
          {props.cols.map((col) => {
            if (col.headerCellRenderer) {
              return col.headerCellRenderer()
            }
            return (
              <HeaderCell textAlign={col.textAlign} key={col.field} width={col.width}>
                {col.label || col.field}
              </HeaderCell>
            )
          })}
        </Row>
      </thead>
      <tbody>
        {data.map((row: any, index) => (
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
