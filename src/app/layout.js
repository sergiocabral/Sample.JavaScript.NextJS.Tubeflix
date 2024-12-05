import "./theme.css";
import "./globals.css";
import Link from "next/link.js";
import localFont from "next/font/local";
import styles from "./layout.module.css";
import ThemeToggle from "@/components/ThemeToggle.js";
import { ThemeProvider } from "@/contexts/ThemeContext.js";

export const metadata = {
  title: "Tubeflix",
  description: "E melhor seleção do YouTube você assiste aqui",
  openGraph: {
    title: "Tubeflix",
    description: "E melhor seleção do YouTube você assiste aqui",
    images: [
      '/opengraph.webp'
    ]
  }
};

const tourney = localFont({
  src: "../fonts/tourney.woff2",
  variable: "--tourney-font",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="pt">
        <body className={`${styles.body} ${tourney.variable}`}>
          <header className={styles.header}>
            <h1><Link href="/">Tubeflix</Link></h1>
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
