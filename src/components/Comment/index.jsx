import { useState } from "react";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Comment({ comment, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  function handleLikeCount() {
    // sempre que precisar atualizar uma info que depende dela mesma
    // é bom usar esse padrão
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/ronaldprofile.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ronald Tomaz</strong>
              <time dateTime="2022-07-13 07:53" title="13 de julho ás 7:53">
                Cerca de 2h atrás
              </time>
            </div>

            <button
              type="button"
              onClick={handleDeleteComment}
              title="Excluir comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={20} />
            Curtir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
