import { useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./styles.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleSubmitComment(event) {
    event.preventDefault();

    if (!newComment.trim("")) {
      alert("Preencha o campo");
      return;
    }

    setComments(prevState => [...prevState, newComment]);

    setNewComment("");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = !newComment.trim() || newComment.length < 10;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(paragraph => {
          if (paragraph.type === "paragraph") {
            return <p key={paragraph.content}>{paragraph.content}</p>;
          } else if (paragraph.type === "link") {
            return (
              <p key={paragraph.content}>
                <a href="#">{paragraph.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleSubmitComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          placeholder="Nossa, adorei amigo! Parabéns"
          value={newComment}
          onChange={event => setNewComment(event.target.value)}
        />

        <button type="submit" disabled={isNewCommentEmpty}>
          Publicar
        </button>
      </form>

      {comments.length > 0 && (
        <div className={styles.commentList}>
          {comments.map(comment => (
            <Comment
              key={comment}
              comment={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>
      )}
    </article>
  );
}
