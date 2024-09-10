import { Icon, IconTypes } from '../icon/icon';
import styles from './months-switch.module.sass';

type MonthsSwitchProps = Readonly<{
  children: React.ReactNode
}>;

export const MonthsSwitch = (props: MonthsSwitchProps) => (
  <span className={styles['months-switch']}>
    <Icon type={IconTypes.Calendar} className={styles['months-switch__left-icon']} fill="currentColor" />
    <span className={styles['months-switch__content']}>{props.children}</span>
    <Icon type={IconTypes.ChevronDown} className={styles['months-switch__chevron-icon']}/>
  </span>
);
