import Image from "next/image";
import arcoTraiano from "../public/arco-traiano.jpg";
import young from "../public/young.jpg";

export default function Home() {
  return (
    <main className="flow content-grid">
      <h1 className="site-title-alt">
        Ordine dei Periti Industriali
        <span>
          e dei Periti Industriali Laureati della Provincia di Benevento{" "}
        </span>
      </h1>
      <hr />
      <h2>Storia</h2>
      <p>
        Nel 1923 con la Legge numero 1395, che prevedeva anche la costituzione
        degli Ordini di Ingegneri, Architetti, Periti Agrari, Geometri, e
        Ragionieri, nasceva l’Ordine dei Periti Industriali.
      </p>
      <p>
        A Benevento, l’Ordine dei Periti Industriali nacque nel 1970, a seguito
        di una riunione indetta dal Commissario straordinario Per. Ind. Vincenzo
        Mazzone.
      </p>
      <p>
        Dalla sua nascita l&apos;Ordine di Benevento ha avuto quattro
        Presidenti: Tinessa Gerardo, Palumbo Pietro, Ernesto Botticella e Mario
        Grimaldi.
      </p>

      <section className="full-width bg-primary section-padding flow light-text">
        <h2>Consiglio Direttivo</h2>
        <p>L’Ordine ha un Consiglio Direttivo così composto:</p>
        <ul className="direttivo">
          <li>
            Per.Ind. Mario Grimaldi <span> - Presidente</span>
          </li>
          <li>
            Per.Ind. Antonio Poppa <span> - Vice Presidente</span>
          </li>
          <li>
            Ing.Per.Ind. De Luca Giancarlo <span> - Segretario</span>
          </li>
          <li>
            Per.Ind. Mesisca Ludovico <span> - Tesoriere</span>
          </li>
          <li>
            Per.Ind. Adriano Leoni
            <span> - Consigliere</span>
          </li>
          <li>
            Per.Ind.Dott. Pasquale Mongillo
            <span> - Consigliere</span>
          </li>
          <li>
            Per.Ind. De Vita Valeriano
            <span> - Consigliere</span>
          </li>
        </ul>
      </section>
      {/*  <img className="full-width mt0" src="/arco-traiano.jpg" alt="" /> */}
      <Image
        src={arcoTraiano}
        className="full-width mt0"
        sizes="100vw"
        alt="monumento arco di traiano a benevento"
        style={{ height: "auto" }}
      />
      <h2>Finalità e Normativa</h2>
      <p>
        Ai Periti Industriali, nell’esercizio della professione nell’ambito
        della propria specializzazione, è consentita la progettazione,
        direzione, collaudo, misura, contabilità, estimo e stima di modeste
        costruzioni civili e semplici macchine nonché installazioni meccaniche,
        elettriche, elettroniche, chimiche, informatiche, etc.
      </p>
      <p className="breakout call-to-action">
        <strong>
          L’iscrizione all&apos;Albo è obbligatoria per l’esercizio della
          professione.{" "}
        </strong>
      </p>
      <p>
        Per l&apos;abilitazione all&apos;esercizio della professione è
        necessario sostenere l&apos;esame di Stato come istituito dalla legge
        17/90 e disciplinato dal Ministero della Pubblica Istruzione ai sensi
        del D.M. del 29 Dicembre 1991 num. 445.
      </p>
      {/* <h3>Images as full-bleed works too</h3> */}
      <section className="full-width bg-primary section-padding flow light-text">
        <h2>Requisiti per l&apos;iscrizione all&apos;Albo:</h2>

        <ul className="list-unstyled">
          <li>Conseguimento del diploma di Perito Industriale &#10004;</li>
          <li>
            Svolgimento della pratica professionale per un periodo di diciotto
            mesi &#10004;
          </li>
          <li>Superamento dell’esame di abilitazione &#10004;</li>
        </ul>
      </section>
      {/*  <img className="full-width mt0" src="/young.jpg" alt="" /> */}
      <Image
        src={young}
        className="full-width mt0"
        sizes="100vw"
        style={{ height: "auto" }}
        alt="giovani periti industriali al lavoro"
      />

      <h3>Modulistica</h3>
      <ul className="list-unstyled">
        <li>
          <a href="#" target="_blank">
            Domanda di Iscrizione all&apos;Albo <span>&#10138;</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Domanda di Praticantato <span>&#10138;</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Dich.ne del Professionista inizio Praticantato <span>&#10138;</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Integrazione Dati Anagrafici <span>&#10138;</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Dich.ne Smarrimento Documenti <span>&#10138;</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Domanda di Cancellazione dall&apos;Ordine <span>&#10138;</span>
          </a>
        </li>
      </ul>

      {/* <section className="bg-primary full-width">
        <h3>content</h3>
      </section> */}
      {/* <footer className="content-grid full-width">
        <div className="breakout footer-wrapper">
          <small>&#169;2023</small>
          <small>
            <a href="/">Privacy e Cookie</a>
          </small>
        </div>
      </footer> */}
    </main>
  );
}
