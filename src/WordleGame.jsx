import { useState } from 'react';
import WordleGrid from './components/WordleGrid';
import WordleInput from './components/WordleInput';
import './index.css';

export const SECRET_WORD = 'SPEND';
const MAX_GUESSES = 5;

export default function WordleGame() {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameState, setGameState] = useState('playing'); // 'playing', 'won', 'lost'


  const handleInputChange = (e) => {
    if (gameState !== 'playing') return;
    // Sanitize input to allow only letters
    const nextGuess = e.target.value.replace(/[^A-Za-z]/g, '');
    if (nextGuess.length <= 5) {
      setCurrentGuess(nextGuess);
    }
  };

  const handleKeyDown = (e) => {
    if (gameState !== 'playing') return;
    if (e.key === 'Enter' && currentGuess.length === 5) {
      const formattedGuess = currentGuess.toUpperCase();
      const nextGuesses = [...guesses, formattedGuess];

      setGuesses(nextGuesses);
      setCurrentGuess('');

      // Check Win/Loss
      if (formattedGuess === SECRET_WORD) setGameState('won');
      else if (nextGuesses.length === MAX_GUESSES) setGameState('lost');
    }
  };

  const handleResetGame = () => {
    setGuesses([]);
    setCurrentGuess('');
    setGameState('playing');
  };

  const message =
    gameState === 'won'
      ? "Congratulations! You've guessed the word!"
      : gameState === 'lost'
      ? `Game Over! The word was ${SECRET_WORD}.`
      : '';

  const isInputDisabled = gameState !== 'playing';
  return (
    <div className="wordle-game">
      <WordleGrid guesses={guesses} currentGuess={currentGuess.toUpperCase()} />
      <WordleInput
        currentGuess={currentGuess}
        handleKeyDown={handleKeyDown}
        onInputChange={handleInputChange}
        disabled={isInputDisabled}
      />
      {gameState !== 'playing' && (
        <div className="action-panel">
          <span className={`message ${gameState}`}>{message}</span>
          <button className="play-again-button" onClick={handleResetGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
