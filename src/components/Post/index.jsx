import styles from './styles.module.css'

export function Post() {

    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/ronaldprofile.png" alt="Ronald Tomaz" className={styles.avatar} />
                
                    <div className={styles.authorInfo}>
                        <strong>Ronald Tomaz</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime='2022-07-13 07:53' title='13 de julho ás 7:53'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea 
                    placeholder='Nossa, adorei amigo! Parabéns' 
                    
                />    


                <button type="submit">Publicar</button>
                
            </form>    
        </article>
    )
}

