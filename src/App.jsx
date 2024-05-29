import './style.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);

  const nextPlayer = isXNext ? 'X' : '0';
  const statusMessage = winner
    ? `Winner is  ${winner}`
    : `Next player is ${nextPlayer}`;

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsNext(currentIsXNext => !currentIsXNext);
  };
  return (
    <div className="app">
      <h2> {statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick}></Board>
    </div>
  );
}

export default App;
