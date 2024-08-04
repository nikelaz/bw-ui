import styles from './sidebar-nav.module.sass';
import clsx from 'clsx';

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
        {props.children}
      </WrapComponent>
    );
  }

  return (
    <button
      {...sharedProps}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
