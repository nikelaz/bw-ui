import styles from './sidebar-nav.module.sass';
import { SidebarNavProps } from './sidebar-nav.types';
import { clsx } from 'clsx';

export const SidebarNav = (props: SidebarNavProps) => (
  <div className={clsx(styles['sidebar-nav'], props.className)}>
    {props.children}
  </div>
);
