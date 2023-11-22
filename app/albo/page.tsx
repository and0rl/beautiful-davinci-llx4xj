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
    <main className="flow content-grid">
      <h2 className="title">Elenco Iscritti all&apos;Albo</h2>
      <AlboTable albo={albo} />
    </main>
  );
}
