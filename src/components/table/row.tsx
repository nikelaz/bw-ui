import { clsx } from 'clsx';
import { RowProps } from './table.types';

import styles from './table.module.sass';

export const Row = (props: RowProps) => (
  <tr className={clsx(
    styles['table__row'],
    props.className
  )}>
    {props.children}
  </tr>
);
