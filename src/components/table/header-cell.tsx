import { clsx } from 'clsx';
import { HeaderCellProps } from './table.types';

import styles from './table.module.sass';

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
