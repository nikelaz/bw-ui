import styles from './label.module.sass';

interface LabelProps extends React.HTMLProps<HTMLLabelElement> {}

export const Label = (props: LabelProps) => (
  <label
    {...props}
    className={props.className ? `${styles.label} ${props.className}` : styles.label}
  >
    {props.children}
  </label>
);
