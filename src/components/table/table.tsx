import { TableProps } from './table.types';

import styles from './table.module.sass';

export const Table = (props: TableProps) => (
  <table className={styles['table']}>
    {props.children}
  </table>
);
