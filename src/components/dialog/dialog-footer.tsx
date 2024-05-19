import { clsx } from 'clsx';
import { DialogContainerProps } from './dialog.types';

import styles from './dialog.module.sass';

export const DialogFooter = (props: DialogContainerProps) => (
  <footer className={clsx(styles['dialog__footer'], props.className)}>
    {props.children}
  </footer>
);
