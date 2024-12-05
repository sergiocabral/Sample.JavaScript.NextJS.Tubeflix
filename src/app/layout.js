import Link from "next/link";
import style from "./layout.module.css";
import "./globals.css";
import "./theme.css";

export const metadata = {
  title: "Tubeflix",
  description: "A melhor seleção de vídeos do YouTube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={style.body}>
        <header className={style.header}>
          <h1><Link href="/">Tubeflix</Link></h1>
          <nav>
            <Link href="/videos">Vídeos</Link>
            <Link href="/musics">Músicas</Link>
          </nav>
        </header>
        <main className={style.main}>
          {children}
        </main>
        <footer className={style.footer}>
          <p>&copy; 2024 Tubeflix</p>
        </footer>
      </body>
    </html>
  );
}
