import AlboTable from "./AlboTable";

/* import albo from '../../public/albo.json' */
export default async function Albo() {
  interface Albo {
    Nr: string;
    Cognome: string;
    Nome: string;
    Iscrizione: string;
    Ramo: string;
  }

  type Props = {
    albo: Albo[];
  };

  const res = await fetch("https://sheetdb.io/api/v1/8yxg5dy97o3nh", {
    next: {
      revalidate: 3600000,
    },
  });
  let albo = await res.json();

  return (
    <div className="holy-grail-container">
      <main className="flow content-grid">
        <h2 className="title">Elenco Iscritti all&apos;Albo</h2>
        <AlboTable albo={albo} />
        <p>
          Aggiornata a{" "}
          {new Date().toLocaleDateString("it-IT", {
            month: "long",
          })}{" "}
          {new Date().getFullYear()}. Visita{" "}
          <a href="https://www.albounicoperind.it/" target="_blank">
            albounicoperind.it
          </a>{" "}
          per l&apos;albo nazionale.{" "}
        </p>
      </main>
    </div>
  );
}
