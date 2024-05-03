import styles from './button.module.sass';
import { Icon, IconTypes } from '../icon/icon';
import { clsx } from 'clsx';

type ButtonProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  icon?: IconTypes,
  iconWidth?: number,
  iconHeight?: number,
  type?: 'link',
}>;

export const Button = (props: ButtonProps) => (
  <button
    onClick={props.onClick}
    className={clsx(
      styles['button'],
      props.className,
      props.type && styles[`button--${props.type}`]
    )}
  >
    { props.icon ? (
      <span className={styles['button__icon']}>
        <Icon type={props.icon} width={props.iconWidth || 14} height={props.iconHeight || 14} fill="currentColor" />
      </span>
    ) : null}
    <span className={styles['button__content']}>
      {props.children}
    </span>
  </button>
);
