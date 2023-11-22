"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Header() {
  return (
    <header className="primary-header content-grid">
      <div className="primary-header__layout breakout">
        <h1 className="site-title">
          <Image priority src={logo} alt="logo" className="logo" />
          Ordine Periti Industriali Provincia di Benevento
        </h1>

        <nav>
          <ul>
            <li>
              <Link href="/">Ordine</Link>
            </li>
            <li>
              <Link href="/albo">Albo</Link>
            </li>
            <li>
              <Link href="/bacheca">Bacheca</Link>
            </li>
            <li>
              <Link href="/contatti">Contatti</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
