# Ramp Frontend Challenge - Wordle Game

This is a React-based implementation of a Wordle-style game, created for the Ramp Frontend Challenge. The game is built using modern React (v19) and Vite.

## Features

- **Wordle Clone**: Guess the hidden 5-letter word within 5 attempts.
- **Visual Feedback**: The game provides color-coded feedback for each letter guessed:
  - 🟩 **Green (Correct)**: The letter is in the word and in the correct spot.
  - 🟨 **Yellow (Present)**: The letter is in the word but in the wrong spot.
  - 🟥 **Red (Absent)**: The letter is not in the word.
- **Win/Loss States**: The game automatically detects if you've guessed the word correctly or if you've run out of attempts, showing appropriate messages.
- **Play Again**: Easy reset functionality to start a new game.

## Technologies Used

- **React 19**: Modern functional components and hooks (`useState`, `useEffect`).
- **Vite**: Fast frontend build tool for a smooth development experience.
- **Vanilla CSS**: Custom styling for the game grid and UI components.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd ramp-frontend-challenge-wordle-game
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App Locally

To start the development server, run:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the game.

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to catch potential issues in the code.
