import styles from './button.module.sass';
import { Icon, IconTypes } from '../icon/icon';
import { clsx } from 'clsx';

type ButtonProps = Readonly<{
  children?: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  icon?: IconTypes,
  iconWidth?: number,
  iconHeight?: number,
  iconPosition?: 'right',
  type?: 'link',
}>;

export const Button = (props: ButtonProps) => (
  <button
    onClick={props.onClick}
    className={clsx(
      styles['button'],
      props.className,
      props.type && styles[`button--${props.type}`],
      props.iconPosition && styles[`button--iconRight`]
    )}
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
