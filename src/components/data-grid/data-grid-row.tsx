import { DataGridRowProps, CellChangeEvent, onChangeEvent } from './data-grid.types';
import { Row } from '../table/row';
import { Cell } from '../table/cell';
import { Button } from '../button/button';
import { IconTypes } from '../icon/icon';
import { DataGridCell } from './data-grid-cell';
import { unflatten } from 'flat';

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
    if (props.onDelete) props.onDelete(unflatten(props.row));
  };

  let progressValue = 0;

  if (props.progressComputeFunction) {
    progressValue = props.progressComputeFunction(unflatten(props.row));
  }

  return (
    <Row className={styles['dataGrid__row']}>
      {props.cols.map((col, index) => {
        return (
          <DataGridCell
            row={props.row}
            col={col}
            onChange={onCellValueChange}
            progress={index === 0 ? progressValue : undefined}
            skipMobileHeader={index === 0 && col.desktopOnly ? true : false}
            key={col.field}
          />
        );
      })}
      {props.deleteRows ? (
        <>
          <td className={styles['dataGrid__deleteBtn']}>
            <Button style="link" type="button" icon={IconTypes.Bin} onClick={deleteClickHandler} />
          </td>
          <Cell mobile={true}>
            <Button fontSize='1rem' style="link" type="button" icon={IconTypes.Bin} onClick={deleteClickHandler}>
              Delete
            </Button>
          </Cell>
        </>
      ) : null}
    </Row>
  );
};
