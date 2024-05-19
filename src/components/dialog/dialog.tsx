import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { DialogProps, DialogHookReturnType } from './dialog.types';
import { IconTypes } from '../icon/icon';
import { Button } from '../button/button';

import styles from './dialog.module.sass';

export const useDialog = (initialIsOpenState = false): DialogHookReturnType => {
  const [isOpen, setIsOpen] = useState(initialIsOpenState); 

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (isOpen && event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return [isOpen, setIsOpen, onKeyDown];
};

export const Dialog = (props: DialogProps) => {
  const dialogRef: React.MutableRefObject<HTMLDialogElement | null> = useRef(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (props.isOpen) {
      dialogRef.current.showModal();
      return;
    }

    dialogRef.current.close();
  }, [props.isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onKeyDown={props.onKeyDown}
      className={clsx(styles['dialog'])}
    >
      <div className={styles['dialog__header']}>
        <div className={styles['dialog__title']}>{props.title}</div>
        {props.hasCloseBtn ? (
          <Button icon={IconTypes.XMark} type="link" onClick={props.onClose} />
        ): null}
      </div>
      <div>
        {props.children}
      </div>
    </dialog>
  );
};