import styles from './styles.module.css';

type HeadingPros = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingPros) {
  return <h1 className={styles.heading}>{children}</h1>;
}
