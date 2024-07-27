import { clsx } from 'clsx';
import { Icon } from '../icon/icon';
import { ButtonProps } from './button.types';

import styles from './button.module.sass';

export const Button = (props: ButtonProps) => (
  <button
    onClick={props.onClick}
    className={clsx(
      styles['button'],
      props.className,
      props.style && styles[`button--${props.style}`],
      props.iconPosition && styles[`button--iconRight`]
    )}
    type={props.type}
    autoFocus={props.autoFocus}
  >
    { props.icon ? (
      <span className={props.children ? styles['button__icon'] : styles['button__content']}>
        <Icon type={props.icon} width={props.iconWidth || 14} height={props.iconHeight || 14} fill="currentColor" />
      </span>
    ) : null}
    { props.children ? (
      <span className={styles['button__content']}>
        {props.children}
      </span>
    ) : null}
  </button>
);
