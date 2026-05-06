import { Fragment, useMemo } from "react";
import { getGuessStatuses } from "../WordleGame.jsx";
const ROWS = 5;
const COLS = 5;

export default function WordleGrid({ guesses, currentGuess }) {
  const pastStatuses = useMemo(() => guesses.map(getGuessStatuses), [guesses]);
  return (
    <div className="wordle-grid">
      {Array.from({ length: ROWS }).map((_, rowIndex) => {
        // ['SPIKE']
        const isPastRow = rowIndex < guesses.length;
        const isCurrentRow = rowIndex === guesses.length;
        const word = isPastRow
          ? guesses[rowIndex]
          : isCurrentRow
            ? currentGuess
            : "";
        const rowStatuses = isPastRow ? pastStatuses[rowIndex] : [];
        return (
          <Fragment key={`row-${rowIndex}-${word}`}>
            {Array.from({ length: COLS }).map((_, colIndex) => {
              const char = word[colIndex] || "";
              const status = rowStatuses[colIndex] || "";

              return (
                <div
                  key={`${rowIndex}-${colIndex}-${char}`}
                  className={`wordle-cell ${status}`}
                >
                  {char}
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}
