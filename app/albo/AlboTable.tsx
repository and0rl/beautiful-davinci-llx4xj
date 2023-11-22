"use client";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";

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

type column = string;
export default function AlboTable({ albo }: Props) {
  const columns = Object.keys(albo[0]);
  const perPage = 10;
  const [data, setData] = useState(albo);
  const [start, setStart] = useState(0);
  const [results, setResults] = useState(albo.length);

  const nextPage = (): void => {
    if (start < results - perPage) {
      setStart((prev) => prev + perPage);
    }
  };

  const prevPage = (): void => {
    if (start !== 0) {
      setStart((prev) => prev - perPage);
    }
  };

  const handleSearch = (term: string): void => {
    setStart(0);
    const filteredData = [...albo].filter((item) =>
      item.Cognome.startsWith(term.toUpperCase()),
    );
    setResults(filteredData.length);
    setData(filteredData);
  };

  return (
    <>
      <SearchBar
        nextPage={nextPage}
        prevPage={prevPage}
        start={start}
        nextDisabled={!(start < results - perPage)}
        handleSearch={handleSearch}
      />
      <section className="albo-table">
        <table id="iscritti">
          <thead>
            <tr>
              {columns.map((column) => {
                return <th key={column}>{column}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.slice(start, start + perPage).map((iscritti) => {
              return (
                <>
                  <tr key={iscritti.Nr}>
                    {columns.map((column) => {
                      return (
                        <td key={column} title={iscritti[column as keyof Albo]}>
                          {iscritti[column as keyof Albo].slice(0, 15)}
                        </td>
                      );
                    })}
                  </tr>
                </>
              );
            })}

            {!(start < results - perPage) &&
              [...Array(perPage - (results % perPage))].map((vuoto, i) => {
                return (
                  <tr key={i}>
                    {columns.map((column, i) => {
                      return <td key={i}>&nbsp;</td>;
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </>
  );
}
