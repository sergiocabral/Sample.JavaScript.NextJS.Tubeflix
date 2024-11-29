import MusicsPage from "./musics/page.js";
import styles from "./page.module.css";
import VideosPage from "./videos/page.js";

export default function HomePage() {
  return (
    <>
      <h2 className={styles.title}>Inicio</h2>
      <VideosPage />
      <MusicsPage />
    </>
  );
}
