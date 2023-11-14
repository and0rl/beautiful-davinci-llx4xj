import "./globals.css";
import Image from "next/image";

//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ordine dei Periti Industriali di Benevento",
  description:
    "Sito dell&amp; Ordine dei Periti Industriali della Provincia di Benevento, ultimi Avvisi, modulistica e altre informazioni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="primary-header content-grid">
          <div className="primary-header__layout breakout">
            <h1 className="site-title">
              {/* <Image src="/logo.svg" width={50} height={50}></Image> */}
              <img className="logo" src="/logo.svg" alt="logo" />
              Ordine Periti Industriali Provincia di Benevento
            </h1>

            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
