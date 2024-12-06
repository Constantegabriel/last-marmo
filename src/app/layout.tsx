import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar"; // Importando a Navbar
import Footer from "./components/footer"; // Importando o Footer
import Wpp from "./components/wpp";

// Metadata personalizada
export const metadata: Metadata = {
  title: "Marmoraria Florianópolis",
  description:
    "Marmoraria Florianópolis - Transformando espaços com mármores e granitos de alta qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Conteúdo */}
        <main className="flex-grow">{children}</main>
        <Wpp />
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
