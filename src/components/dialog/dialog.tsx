import React, { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { DialogProps, DialogHookReturnType } from './dialog.types';
import { IconTypes } from '../icon/icon';
import { Button } from '../button/button';

import styles from './dialog.module.sass';

export const useDialog = (initialIsOpenState = false): DialogHookReturnType => {
  const [isOpen, setIsOpen] = useState(initialIsOpenState); 

  const onKeyDown = (event: React.KeyboardEvent, onClose?: Function) => {
    if (isOpen && event.key === 'Escape') {
      if (onClose) {
        onClose();
        return;
      }
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

  useEffect(() => {
    const documentClickHandler = (event: any) => {
      if (
        !dialogRef.current
        || !event.target
        || !props.onClose
        || !event.target.contains(dialogRef.current)
      ) return;

      props.onClose(event);
    };

    document.addEventListener('click', documentClickHandler);

    () => {
      document.removeEventListener('click', documentClickHandler);
    }
  }, [dialogRef, props.onClose]);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (!props.onKeyDown) return;
    props.onKeyDown(event, props.onClose);
  };

  return (
    <dialog
      ref={dialogRef}
      onKeyDown={keyDownHandler}
      className={clsx(styles['dialog'])}
    >
      <div className={styles['dialog__content']}>
        <div className={styles['dialog__header']}>
          <div className={styles['dialog__title']}>{props.title}</div>
          {props.hasCloseBtn ? (
            <Button icon={IconTypes.XMark} style="link" onClick={props.onClose} />
          ): null}
        </div>
        <div>
          {props.children}
        </div>
      </div>
    </dialog>
  );
};