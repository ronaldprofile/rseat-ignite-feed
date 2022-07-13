import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./styles/App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Instructor at @Rocketseat'
    },

    content: [
      { type: 'paragraph', content:'Fala galeraa 👋',},
      { type: 'paragraph', content:' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz',},
      { type: 'paragraph', content:'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}
    ],

    publishedAt: new Date("2022-07-12 13:20:00")
  }
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          { posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
