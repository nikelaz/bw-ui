import { DataGridRowProps, CellChangeEvent, onChangeEvent } from './data-grid.types';
import { Row } from '../table/row';
import { Button } from '../button/button';
import { IconTypes } from '../icon/icon';
import { DataGridCell } from './data-grid-cell';

import styles from './data-grid.module.sass';

export const DataGridRow = (props: DataGridRowProps) => {
  const onCellValueChange = (event: CellChangeEvent) => {
    const updatedRow = {
      ...props.row,
      [event.key]: event.value
    };

    const changeEvent: onChangeEvent = {
      rowData: updatedRow,
      index: props.index,
    };

    props.onRowChange(changeEvent);
  };

  const deleteClickHandler = () => {
    if (props.onDelete) props.onDelete(props.row);
  };

  return (
    <Row className={styles['dataGrid__row']}>
      {props.cols.map((col, index) => {
        const progressValue = props.progressField && index === 0 ? parseFloat(props.row[props.progressField]) * 100 : undefined;
        return (
          <DataGridCell
            row={props.row}
            col={col}
            onChange={onCellValueChange}
            progress={progressValue}
            key={col.field}
          />
        );
      })}
      {props.deleteRows ? (
        <td className={styles['dataGrid__deleteBtn']}>
          <Button type="link" icon={IconTypes.Bin} onClick={deleteClickHandler} />
        </td>
      ) : null}
    </Row>
  );
};
