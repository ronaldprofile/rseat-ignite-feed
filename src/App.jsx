import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./styles/App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>io</main>
      </div>
    </>
  );
}
