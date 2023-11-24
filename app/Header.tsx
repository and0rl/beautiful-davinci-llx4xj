"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Header() {
  const currentPath = usePathname();
 
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
              <Link href="/" className={currentPath === "/" ? "active" : ""}>
                Ordine
              </Link>
            </li>
            <li>
              <Link
                href="/albo"
                className={currentPath === "/albo" ? "active" : ""}
              >
                Albo
              </Link>
            </li>
            <li>
              <Link
                href="/bacheca"
                className={currentPath === "/bacheca" ? "active" : ""}
              >
                Bacheca
              </Link>
            </li>
            <li>
              <Link
                href="/contatti"
                className={currentPath === "/contatti" ? "active" : ""}
              >
                Contatti
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
