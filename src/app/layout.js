import "./globals.css";

export const metadata = {
  title: "Tubeflix",
  description: "A melhor seleção de vídeos do YouTube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
