import { Trash, ThumbsUp } from "phosphor-react";
import {Avatar} from '../Avatar'
import styles from "./styles.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/ronaldprofile.png" hasBorder={false}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ronald Tomaz</strong>
              <time dateTime="2022-07-13 07:53" title="13 de julho ás 7:53">
                Cerca de 2h atrás
              </time>
            </div>

            <button type="button" title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Adorei seu novo portifa Ronald!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Curtir
            <span>30</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
