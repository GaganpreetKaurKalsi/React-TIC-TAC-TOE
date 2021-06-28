import React from 'react';

const StatusMessage = ({ winner, current, currentMove }) => {
  return (
    <p className="status">
      {winner && (
        <>
        Winner is {'  '}
        <span className = {winner==='X'?'bold text-green':'bold text-yellow'}>{winner}</span>
        </>
      )}
      {!winner &&
        currentMove !== 9 &&
        (
          <>
          Next Player is {'  '}  
          <span className = {`bold ${current.player?'text-green':'text-yellow'}`}>{current.player?'X':'O'}</span>
          </>
        )}
      {!winner && currentMove === 9 && (
        <>
        <span className = 'bold text-green'>X</span> and <span className = 'bold text-yellow'>O</span> tied
        </>
        )}
    </p>
  );
};

export default StatusMessage;


