import { clsx } from 'clsx';
import { TableProgressProps } from './table.types';

import styles from './table.module.sass';

export const TableProgress = (props: TableProgressProps) => (
  <progress
    className={clsx(
      styles['table__progress'],
      props.value > 100 && styles['table__progress--overflow']
    )}
    value={props.value} max={props.max || 100}
  >
    {props.value}%
  </progress>
);
