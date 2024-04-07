import inputStyles from '../input/input.module.sass';
import styles from './textarea.module.sass';

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {}

export const TextArea = (props: TextAreaProps) => {
  const className = props.className ? `${inputStyles.input} ${styles.textarea} ${props.className}` : `${inputStyles.input} ${styles.textarea}`;
  return (
    <div className={inputStyles['input__wrapper']}>
      <textarea {...props} className={className}>
        {props.children}
      </textarea>
    </div>
  );
};
