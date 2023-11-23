import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://angry-goldwasser-e8c04b.netlify.app/"),
  title: "Ordine dei Periti Industriali di Benevento",
  description:
    "Sito dell'Ordine dei Periti Industriali della Provincia di Benevento, ultimi Avvisi, modulistica e altre informazioni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
