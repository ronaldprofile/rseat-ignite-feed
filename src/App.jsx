import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./styles/App.module.css";

export function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    <Post author="Ronald Tomaz" content="I am developer web" />
                    <Post author="Ronald Tomaz" content="I am developer web" />
                </main>
            </div>
        </>
    );
}
