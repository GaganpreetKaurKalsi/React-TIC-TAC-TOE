import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';
import History from './components/History';
import StatusMessage from './components/StatusMessage'


const App = () => {

  // Player true for X and false for O
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), player: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const {winner, winCombination} = calculateWinner(current.board);
  console.log(winner);

  const handleSquareClick = position => {
    if (winner || current.board[position] || current!==history[history.length-1]) {
      return;
    }
    setHistory(prev => {
      const last = prev[currentMove];
      const newBoard = last.board.map((value, index) => {
        if (index === position) {
          return last.player ? 'X' : 'O';
        }
        return value;
      });
      return prev.concat({ board: newBoard, player: !last.player });
    });
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move)
  }

  const startNewGame = () => {
    setHistory([
      { board: Array(9).fill(null), player: true },
    ]);
    setCurrentMove(0)
  }

  return (
    <div className="app">
      <h1>TIC <span style = {{color : '#22C55E'}}>TAC</span> <span style = {{color : '#FACC15'}}>TOE</span></h1>
      <StatusMessage winner = {winner} current = {current} currentMove = {currentMove} />
      <Board handleSquareClick={handleSquareClick} board={current.board} winCombination = {winCombination} historyLength = {history.length}/>
      <button type="button" onClick = {startNewGame} className = {`new-game ${history.length===10||winner?'active-back':''}`}>Start new game</button>
      <History history={history} moveTo = {moveTo} currentMove = {currentMove} />
    </div>
  );
};

export default App;
