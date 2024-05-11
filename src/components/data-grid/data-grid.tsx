import { Table, Row, Cell, HeaderCell } from '../table/table';
import { useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import styles from './data-grid.module.sass';

type Col = {
  field: string,
  label?: string,
  textAlign?: 'right',
  fontSize?: 'l',
  fontWeight?: 'bold',
  formattingFunction?: Function,
  headerCellRenderer?: Function,
  editable?: boolean,
  inputType?: 'text' | 'number' | 'date',
  unitSuffix?: string
}

type DataGridProps = Readonly<{
  cols: Array<Col>,
  data: Array<any>,
  children?: React.ReactNode,
  onChange?: Function,
}>;

export const DataGrid = (props: DataGridProps) => {
  return (
    <Table>
      <thead>
        <Row>
          {props.cols.map((col) => {
            if(col.headerCellRenderer) {
              return col.headerCellRenderer()
            }

            return <HeaderCell textAlign={col.textAlign}>{col.label || col.field}</HeaderCell>
          })}
        </Row>
      </thead>
      <tbody>
        {props.data.map(row => (
          <DataGridRow row={row} cols={props.cols} onRowChange={props.onChange} />
        ))}
      </tbody>
      {props.children}
    </Table>
  );
};

type DataGridRowProps = Readonly<{
  row: any,
  cols: Array<Col>,
  onRowChange?: Function,
}>;

export type onChangeEvent = Readonly<{
  rowData: any
}>;

const DataGridRow = (props: DataGridRowProps) => {
  const [rowData, setRowData] = useState(props.row);

  const onCellValueChange = (event: CellChangeEvent) => {
    if (typeof props.onRowChange !== 'function') return;

    const updatedRow = {
      ...rowData,
      [event.key]: event.value
    };
    setRowData(updatedRow);

    const changeEventObj: onChangeEvent = {
      rowData: updatedRow
    };
    props.onRowChange(changeEventObj);
  };

  return (
    <Row>
      {props.cols.map((col) => (
        <DataGridCell row={rowData} col={col} onChange={onCellValueChange}/>
      ))}
    </Row>
  );
};

type DataGridCellProps = Readonly<{
  col: Col,
  row: any,
  onChange?: Function
}>;

type CellChangeEvent = Readonly<{
  key: string,
  value: string
}>;

const DataGridCell = (props: DataGridCellProps) => {
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
    if (typeof props.onChange !== 'function') return;
    if (cellValue === cachedValue) return;

    const eventObj: CellChangeEvent = {
      key: props.col.field,
      value: cellValue
    };
    
    props.onChange(eventObj);
    setCachedValue(cellValue);
  }

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.showPicker();
  };

  return (
    <Cell
      fontSize={props.col.fontSize}
      fontWeight={props.col.fontWeight}
    >
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
      { props.col.unitSuffix ? (
        <span className={styles['dataGrid__unit']}>
          {props.col.unitSuffix}
        </span>
      ) : null}
    </Cell>
  )
};
