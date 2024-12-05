import "./theme.css";
import "./globals.css";
import "./fonts.css";
import Link from "next/link.js";
import styles from "./layout.module.css";
import ThemeToggle from "@/components/ThemeToggle.js";
import { ThemeProvider } from "@/contexts/ThemeContext.js";

export const metadata = {
  title: "Tubeflix",
  description: "E melhor seleção do YouTube você assiste aqui",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="pt">
        <body className={styles.body}>
          <header className={styles.header}>
            <h1 className="tourney-font"><Link href="/">Tubeflix</Link></h1>
            <nav>
              <Link href="/videos">Vídeos</Link>
              <Link href="/musics">Músicas</Link>
            </nav>
          </header>
          <main className={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
            <p>&copy; 2024 Tubeflix - Todos os direitos reservados</p>
            <ThemeToggle />
          </footer>
        </body>
      </html>
    </ThemeProvider>
  );
}
