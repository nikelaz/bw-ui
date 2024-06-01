import styles from './main-layout.module.sass';

type MainLayoutProps = Readonly<{
  children: React.ReactNode
}>;

export const MainLayout = (props: MainLayoutProps) => (
  <div>
    {props.children}
  </div>
);

export const MainLayoutContainer = (props: MainLayoutProps) => (
  <div className={styles['main-layout__container']}>
    {props.children}
  </div>
);
