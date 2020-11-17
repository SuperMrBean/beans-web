import styles from "./index.module.scss";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>;
    </div>
  );
}
