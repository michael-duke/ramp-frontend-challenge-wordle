export default function WordleInput({
  currentGuess,
  handleKeyDown,
  onInputChange,
  disabled,
}) {
  return (
    <input
      autoFocus
      name="wordle-guess"
      className="wordle-input"
      maxLength="5"
      type="text"
      onChange={onInputChange}
      value={currentGuess}
      onKeyDown={handleKeyDown}
      placeholder={disabled ? "Game Over" : "Guess the word..."}
      disabled={disabled}
    />
  );
}
