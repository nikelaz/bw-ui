import { clsx } from 'clsx';
import { CellProps } from './table.types';

import styles from './table.module.sass';

export const Cell = (props: CellProps) => (
  <td
    className={clsx(
      styles['table__cell'],
      props.className,
      props.fontSize && styles[`table__cell--${props.fontSize}`],
      props.fontWeight && styles[`table__cell--${props.fontWeight}`]
    )}
    colSpan={props.colSpan}
    style={{
      width: props.width
    }}
  >
    <div className={clsx(
      styles['table__cell_wrapper'],
      props.textAlign && styles[`table__cell--${props.textAlign}`]
    )}>
      {props.children}
      {props.unitSuffix ? (
        <span className={styles['table__cell__unit']}>
          {props.unitSuffix}
        </span>
      ) : null}
    </div>
  </td>
);
