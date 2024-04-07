import { Icon, IconTypes } from '../icon/icon';
import inputStyles from '../input/input.module.sass';
import styles from './select.module.sass';

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {}

export const Select = (props: SelectProps) => {
  const className = props.className ? `${inputStyles.input} ${styles.select} ${props.className}` : `${inputStyles.input} ${styles.select}`;
  return (
    <div className={styles['select__wrapper']}>
      <select {...props} className={className}>
        {props.children}
      </select>
      <Icon type={IconTypes.ChevronDown} />
    </div>
  );
};
