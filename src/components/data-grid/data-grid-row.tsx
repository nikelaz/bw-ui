import { useState } from 'react';
import { DataGridRowProps, CellChangeEvent, onChangeEvent } from './data-grid.types';
import { Row } from '../table/row';
import { Button } from '../button/button';
import { IconTypes } from '../icon/icon';
import { DataGridCell } from './data-grid-cell';

import styles from './data-grid.module.sass';

export const DataGridRow = (props: DataGridRowProps) => {
  const [rowData, setRowData] = useState(props.row);

  const onCellValueChange = (event: CellChangeEvent) => {
    const updatedRow = {
      ...rowData,
      [event.key]: event.value
    };

    setRowData(updatedRow);

    if (typeof props.onRowChange !== 'function') return;

    const changeEvent: onChangeEvent = {
      rowData: updatedRow
    };
    props.onRowChange(changeEvent);
  };

  const deleteClickHandler = () => {
    if (props.onDelete) props.onDelete({ rowData });
  };

  return (
    <Row className={styles['dataGrid__row']}>
      {props.cols.map((col, index) => {
        const progressValue = props.progressField && index === 0 ? parseFloat(rowData[props.progressField]) * 100 : undefined;
        return (
          <DataGridCell
            row={rowData}
            col={col}
            onChange={onCellValueChange}
            progress={progressValue}
            key={col.field}
          />
        );
      })}
      {props.deleteRows ? (
        <td className={styles['dataGrid__deleteBtn']}>
          <Button icon={IconTypes.Bin} onClick={deleteClickHandler} />
        </td>
      ) : null}
    </Row>
  );
};
