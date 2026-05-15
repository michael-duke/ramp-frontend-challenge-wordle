import { SECRET_WORD } from '../WordleGame';

// returns an array of 'correct', 'present', 'absent' for each char in the guess
// for example, for 'SPIKE' it would return ['correct', 'present', 'absent', 'absent', 'absent']
export default function getGuessStatuses(guess) {
  if (!guess) return [];
  const upperGuess = guess.toUpperCase();
  return upperGuess.split('').map((char, idx) => {
    if (char === SECRET_WORD[idx]) return 'correct'; // Green
    if (SECRET_WORD.includes(char)) return 'present'; // Yellow
    return 'absent'; // Red
  });
}
