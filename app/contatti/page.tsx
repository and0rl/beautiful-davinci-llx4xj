import Image from "next/image";
import mappa from "../../public/mappa-ordine-periti-benevento.jpg";

export default function Bacheca() {
  return (
    <div className="holy-grail-container">
      <main className="flow content-grid">
        <a
          href="https://www.google.com/maps/place/Collegio+Periti+Industriali/@41.13117,14.76902,15z/data=!4m6!3m5!1s0x133a3a0e0d278eab:0x7575b5961fe5803b!8m2!3d41.13117!4d14.76902!16s%2Fg%2F1td80v5t?entry=ttu"
          target="_blank"
          title="Apri in Google Maps"
        >
          <Image
            src={mappa}
            className="mappa"
            /* sizes="100vw" */
            alt="mappa"
            style={{ height: "auto" }}
          />
        </a>
        <h2>Contatti </h2>
        <address>
          Ordine dei Periti Industriali e dei Periti Industriali Laureati della
          Provincia di Benevento
          <br />
          Via San Cristiano 124, Benevento
          <br />
          C.F. 80003610625
        </address>
        <p>
          <b>&#9990;</b> <a href="tel:082447049">0824 47049</a>{" "}
        </p>
        <p>
          &#9993;{" "}
          <a href="mailto:perind.bn@virgilio.it">perind.bn@virgilio.it</a>
        </p>
        <p>
          &#9998;{" "}
          <a href="mailto:ordinedibenevento@pec.cnpi.it">
            ordinedibenevento@pec.cnpi.it
          </a>
        </p>
      </main>
    </div>
  );
}
