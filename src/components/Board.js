// rafce
import React from 'react';
import Square from './Square';

const Board = ({handleSquareClick, board, winCombination, historyLength}) => {

  const renderSquare = position => {
    const isWinSquare = winCombination.includes(position)
    return (
      <Square
        value={board[position]}
        isWinSquare = {isWinSquare}
        onClick={() => {
          handleSquareClick(position);
        }}
      />
    );
  };

  return (
    <div className={`board ${historyLength === 10?'draw':''}`}>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
