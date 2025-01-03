import { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { DataGridCellProps, CellChangeEvent } from './data-grid.types';
import { Cell } from '../table/cell';
import { TableProgress } from '../table/table-progress';
import DateUtilities from './date-utilities';
import { getFormattedDecimal } from '../../helpers/formatting-utils';
import dayjs from 'dayjs';
import formatParser from 'dayjs/plugin/customParseFormat';
import isNumeric from 'isnumeric';
import styles from './data-grid.module.sass';

dayjs.extend(formatParser);

// eslint-disable-next-line
const formatCellValue = (input: any, inputType?: string) => {
  if (input === null) {
    return '';
  }

  if (inputType === 'date') {
    return DateUtilities.toISOString(input);
  }

  if (inputType === 'number') {
    return getFormattedDecimal(parseFloat(input));
  }

  return input;
}

export const DataGridCell = (props: DataGridCellProps) => {
  const inputType = props.col.inputType;
  const initialValue = formatCellValue(props.row[props.col.field], props.col.inputType);
  const [cachedValue, setCachedValue] = useState(initialValue);
  const [cellValue, setCellValue] = useState(initialValue);
  const inputRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  useEffect(() => {
    const newValue = formatCellValue(props.row[props.col.field], props.col.inputType);
    setCellValue(newValue);
  }, [setCellValue, props.row, props.col.field, props.col.inputType]);

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

  const isCellValueValid = (value: string, inputType?: 'text' | 'number' | 'date') => {
    switch (inputType) {
      case 'number':
        if (!isNumeric(value)) return false;
        break;
      case 'date':
        if (!dayjs(value).isValid()) return false;
        break;
    }

    return true;
  }

  const blurHandler = () => {
    if (cellValue === cachedValue) return;

    // data validation
    if (!isCellValueValid(cellValue, inputType)) {
      setCellValue(cachedValue);
      return;
    }

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
      header={props.skipMobileHeader ? undefined : props.col.label}
    >
      <input
        className={clsx(
          styles['dataGrid__cellInput'],
          props.col.textAlign === 'right' && styles['dataGrid__cellInput--right'],
          props.col.unitSuffix && styles['dataGrid__cellInput--unit'],
          (!props.col.editable && !props.onClick) && styles['dataGrid__cellInput--noHover'],
          props.onClick && styles['dataGrid__cellInput--pointer']
        )}
        readOnly={!props.col.editable}
        type={props.col.inputType || 'text'}
        value={cellValue}
        onClick={() => { props.onClick && props.onClick(props.row) }
        onChange={(e) => setCellValue(e.target.value)}
        onBlur={blurHandler}
        ref={inputRef}
        onFocus={props.col.inputType && props.col.inputType === 'date' ? focusHandler : undefined}
      />
      { props.progress ? (
        <TableProgress value={props.progress} />
      ) : null }
    </Cell>
  )
};
