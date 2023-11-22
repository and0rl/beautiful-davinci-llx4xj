"use client";

type Props = {
  nextPage: () => void;
  prevPage: () => void;
  start: number;
  nextDisabled: boolean;
  handleSearch: (term: string) => void;
};

export default function SearchBar({
  nextPage,
  prevPage,
  start,
  nextDisabled,
  handleSearch,
}: Props) {
  return (
    <section className="utility">
      <input
        type="text"
        placeholder="Cerca"
        /* onChange={() => handleSearch(search.current.value)} */
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="button-group">
        <button onClick={prevPage} disabled={start === 0}>
          &#10094;
        </button>
        <button onClick={nextPage} disabled={nextDisabled}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
