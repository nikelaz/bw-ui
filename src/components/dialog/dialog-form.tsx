import { clsx } from 'clsx';
import { DialogContainerProps } from './dialog.types';

import styles from './dialog.module.sass';

export const DialogForm = (props: DialogContainerProps) => (
  <div className={clsx(styles['dialog__form'], props.className)}>
    {props.children}
  </div>
);
