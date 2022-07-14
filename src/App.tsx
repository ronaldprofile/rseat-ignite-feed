import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./styles/App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/filipedeschamps.png',
      name: 'Filipe Deschamps',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link', content: 'ignite-feed/demo' },
    ],
    publishedAt: new Date('2022-07-13 13:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            console.log(post);

            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
