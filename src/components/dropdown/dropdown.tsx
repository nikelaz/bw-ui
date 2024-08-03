import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import styles from './dropdown.module.sass';
import type { DropdownOption, DropdownProps } from './dropdown.types';

export const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(props.options);
  const dropdownRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  const optionClickHandler = (selectedOption: DropdownOption) => {
    if (selectedOption.onClick) {
      selectedOption.onClick(selectedOption);
      return;
    }

    const updatedOptions = options.map(option => {
      if (option === selectedOption) {
        return {
          ...option,
          isActive: true,
        };
      }

      return {
        ...option,
        isActive: false,
      }
    });

    setIsOpen(false);
    setOptions(updatedOptions);
    if (typeof props.onChange === 'function') {
      props.onChange(updatedOptions);
    }
  };

  useEffect(() => {
    const keydownEventHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const documentClickHandler = (event: any) => {
      if (!dropdownRef.current) return;
      if (dropdownRef.current.contains(event.target)) return;
      setIsOpen(false)
    };

    document.addEventListener('keydown', keydownEventHandler);
    document.addEventListener('click', documentClickHandler);

    return () => {
      document.removeEventListener('keydown', keydownEventHandler);
      document.removeEventListener('click', documentClickHandler);
    };
  });

  useEffect(() => {
    setOptions(props.options);
  }, [setOptions, props.options]);
  
  return (
    <div ref={dropdownRef} className={clsx(styles['dropdown'], isOpen && styles['dropdown--is-open'])}>
      <button className={styles['dropdown__btn']} onClick={() => setIsOpen(!isOpen)}>
        {props.children}
      </button>
      <div className={styles['dropdown__panel']}>
        { options.map(option => (
          <button
            onClick={() => optionClickHandler(option)}
            className={clsx(
              styles['dropdown__panel__btn'],
              option.isActive && styles['dropdown__panel__btn--is-active']
            )}
            key={option.value.toString()}
          >
            {option.label}
          </button>
        )) }
      </div>
    </div>
  );
};
