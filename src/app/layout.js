import "./globals.css";

export const metadata = {
  title: "Tubeflix",
  description: "E melhor seleção do YouTube você assiste aqui",
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
          <p>&copy; 2024 Tubeflix - Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  );
}
