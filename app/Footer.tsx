import Link from "next/link";

export default function Footer() {
  return (
    <footer className="content-grid full-width">
      <div className="breakout footer-wrapper">
        <small>&#169;2023</small>
        <small>
          <Link href="/">Privacy e Cookie</Link>
        </small>
      </div>
    </footer>
  );
}
