import styles from './table.module.sass';
import { clsx } from 'clsx';

type TableProps = Readonly<{
  children: React.ReactNode,
  className?: string
}>;

export const Table = (props: TableProps) => (
  <table className={styles['table']}>
    {props.children}
  </table>
);

type HeaderCellProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  fontSize?: 'l',
  textColor?: 'dark',
  textAlign?: 'right',
}>;

export const HeaderCell = (props: HeaderCellProps) => (
  <th
    className={clsx(
      styles['table__headerCell'],
      props.fontSize && styles[`table__headerCell--${props.fontSize}`],
      props.textColor && styles[`table__headerCell--${props.textColor}`],
      props.textAlign && styles[`table__headerCell--${props.textAlign}`],
    )}
  >
    {props.children}
  </th>
);

type CellProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  textAlign?: 'right',
  fontSize?: 'l',
  fontWeight?: 'bold',
  colSpan?: number,
  editable?: boolean,
  onInput?: React.EventHandler<any>
}>;

export const Cell = (props: CellProps) => (
  <td
    className={clsx(
      styles['table__cell'],
      props.textAlign && styles[`table__cell--${props.textAlign}`],
      props.fontSize && styles[`table__cell--${props.fontSize}`],
      props.fontWeight && styles[`table__cell--${props.fontWeight}`]
    )}
    colSpan={props.colSpan}
    contentEditable={props.editable}
    onInput={props.onInput}
  >
    {props.children}
  </td>
);

type RowProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  final?: boolean
}>;

export const Row = (props: RowProps) => (
  <tr className={clsx(
    styles['table__row'],
    props.final && styles['table__row--final']
  )}>
    {props.children}
  </tr>
);

type TableProgressProps = Readonly<{
  value: number
  max?: number
}>;

export const TableProgress = (props: TableProgressProps) => (
  <progress className={styles['table__progress']} value={props.value} max={props.max || 100}>{props.value}</progress>
);
