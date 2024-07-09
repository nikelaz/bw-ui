import styles from './sidebar-nav.module.sass';
import clsx from 'clsx';

import { SidebarNavBtnProps } from './sidebar-nav.types';

export const SidebarNavBtn = (props: SidebarNavBtnProps) => (
  <button
    className={clsx(
      styles['sidebar-nav__btn'],
      props.isActive && styles['sidebar-nav__btn--is-active'],
      props.className
    )}
    aria-label={props.label}
    title={props.label}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
