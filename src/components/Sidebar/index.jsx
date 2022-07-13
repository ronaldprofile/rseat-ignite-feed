import styles from "./styles.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.banner}
        src="https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatarImage}
          src="https://github.com/ronaldprofile.png"
          alt="Ronald Tomaz"
        />
        <strong>Ronald Tomaz</strong>
        <span>Developer React</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
