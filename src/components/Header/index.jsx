import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo ignite feed" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
