import "./globals.css";

export const metadata = {
  title: "Tubeflix",
  description: "A melhor seleção de vídeos do YouTube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <header>
          <h1>Tubeflix</h1>
          <nav>
            <a href="/">Início</a>
            <a href="/videos">Vídeos</a>
            <a href="/musics">Músicas</a>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>&copy; 2024 Tubeflix</p>
        </footer>
      </body>
    </html>
  );
}
