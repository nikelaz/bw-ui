import { clsx } from 'clsx';
import { CellProps } from './table.types';

import styles from './table.module.sass';

export const Cell = (props: CellProps) => (
  <td
    className={clsx(
      styles['table__cell'],
      props.className,
      props.textAlign && styles[`table__cell--${props.textAlign}`],
      props.fontSize && styles[`table__cell--${props.fontSize}`],
      props.fontWeight && styles[`table__cell--${props.fontWeight}`]
    )}
    colSpan={props.colSpan}
  >
    <div className={styles['table__cell_wrapper']}>
      {props.children}
      {props.unitSuffix ? (
        <span className={styles['table__cell__unit']}>
          {props.unitSuffix}
        </span>
      ) : null}
    </div>
  </td>
);
