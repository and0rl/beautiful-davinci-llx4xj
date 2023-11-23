import Link from "next/link";

export default function Footer() {
  return (
    <footer className="content-grid full-width">
      <div className="breakout footer-wrapper">
        <small className="year">&#169;2023</small>

        <small>
          <a href="https://www.cnpi.eu">CNPI</a>
        </small>
        <small>
          <a href="https://www.fondazioneopificium.it/">Opificium</a>
        </small>
        <small>
          <a href="https://www.eppi.it/">Eppi</a>
        </small>

        <small>
          <Link href="/">Privacy e Cookie</Link>
        </small>
      </div>
    </footer>
  );
}
