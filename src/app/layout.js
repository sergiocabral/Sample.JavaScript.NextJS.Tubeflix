import localFont from "next/font/local";
import Link from "next/link";
import style from "./layout.module.css";
import "./globals.css";
import "./theme.css";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata = {
  title: "Tubeflix",
  description: "A melhor seleção de vídeos do YouTube",
  openGraph: {
    title: "Tubeflix",
    description: "A melhor seleção de vídeos do YouTube",
    images: [
      '/opengraph.webp'
    ]
  }
};

const toruney = localFont({
  src: '../fonts/tourney.woff2',
  variable: '--tourney-font',
  weight: '100 900'
})

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="pt">
        <body className={`${style.body} ${toruney.variable}`}>
          <header className={style.header}>
            <h1 className="tourney-font"><Link href="/">Tubeflix</Link></h1>
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
            <ThemeToggle />
          </footer>
        </body>
      </html>
    </ThemeProvider>
  );
}
