import { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { DataGridCellProps, CellChangeEvent } from './data-grid.types';
import { Cell } from '../table/cell';
import { TableProgress } from '../table/table-progress';

import styles from './data-grid.module.sass';

export const DataGridCell = (props: DataGridCellProps) => {
  const initialValue = props.row[props.col.field];
  const [cachedValue, setCachedValue] = useState(initialValue);
  const [cellValue, setCellValue] = useState(initialValue);
  const inputRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' && event.key !== 'Enter') return;
      if (inputRef && inputRef.current) inputRef.current.blur();
    }

    window.addEventListener('keydown', keydownHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  });

  const blurHandler = () => {
    if (cellValue === cachedValue) return;

    setCachedValue(cellValue);
    
    if (typeof props.onChange !== 'function') return;
    
    const changeEvent: CellChangeEvent = {
      key: props.col.field,
      value: cellValue
    };
    
    props.onChange(changeEvent);
  }

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.showPicker();
  };

  return (
    <Cell
      fontSize={props.col.fontSize}
      fontWeight={props.col.fontWeight}
      textAlign={props.col.textAlign}
      unitSuffix={props.col.unitSuffix}
    >
      <div className={styles['dataGrid__cellWrapper']}>
        <input
          className={clsx(
            styles['dataGrid__cellInput'],
            props.col.textAlign === 'right' && styles['dataGrid__cellInput--right'])
          }
          readOnly={!props.col.editable}
          type={props.col.inputType || 'text'}
          value={cellValue}
          onChange={(e) => setCellValue(e.target.value)}
          onBlur={blurHandler}
          ref={inputRef}
          onFocus={props.col.inputType && props.col.inputType === 'date' ? focusHandler : undefined}
        />
      </div>
      { props.progress ? (
        <TableProgress value={props.progress} />
      ) : null }
    </Cell>
  )
};
