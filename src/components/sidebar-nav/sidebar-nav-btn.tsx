import styles from './sidebar-nav.module.sass';
import clsx from 'clsx';
import { Icon } from '../icon/icon';

import { SidebarNavBtnProps } from './sidebar-nav.types';

export const SidebarNavBtn = (props: SidebarNavBtnProps) => {
  const WrapComponent: any = props.component;

  const sharedProps = {
    className: clsx(
      styles['sidebar-nav__btn'],
      props.isActive && styles['sidebar-nav__btn--is-active'],
      props.className
    ),
    'aria-label': props.label,
    title: props.label,
  };

  if (WrapComponent) {
    return (
      <WrapComponent
        {...sharedProps}
        onClick={props.onClick}
        href={props.href}
      >
        <Icon type={props.icon} width={27} height={24} fill="currentColor" />
        <div className={styles['sidebar-nav__btn__label']}>
          <div className={styles['sidebar-nav__btn__label__inner']}>{props.label}</div>
        </div>
      </WrapComponent>
    );
  }

  return (
    <button
      {...sharedProps}
      onClick={props.onClick}
    >
      <Icon type={props.icon} width={27} height={24} fill="currentColor" />
      <div className={styles['sidebar-nav__btn__label']}>
        <div className={styles['sidebar-nav__btn__label__inner']}>{props.label}</div>
      </div>
    </button>
  );
};
