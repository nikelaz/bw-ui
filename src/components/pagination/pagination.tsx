import styles from './pagination.module.sass';

type PaginationProps = Readonly<{
  children: React.ReactNode
}>;

export const Pagination = (props: PaginationProps) => (
  <div className={styles.pagination}>
    {props.children}
  </div>
);
