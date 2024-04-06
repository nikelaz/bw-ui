import styles from './button.module.sass';
import { Icon, IconTypes } from '../icon/icon';

type ButtonProps = Readonly<{
  children: React.ReactNode,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  icon?: IconTypes,
  iconWidth?: number,
  iconHeight?: number,
}>;

export const Button = (props: ButtonProps) => (
  <button onClick={props.onClick} className={`${styles['button']} ${props.className || ''}`}>
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
