import { TableProps } from './table.types';

import styles from './table.module.sass';
import { clsx } from 'clsx';

export const Table = (props: TableProps) => (
  <table className={clsx(
    styles['table'],
    props.className && props.className)
  }>
    {props.children}
  </table>
);
