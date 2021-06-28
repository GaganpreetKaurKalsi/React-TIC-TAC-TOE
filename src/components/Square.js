import React from 'react';

const Square = ({ value, onClick, isWinSquare, history}) => {
  console.log(history)
  return (
    <button className = "square" style={{backgroundColor : isWinSquare?"#1E40AF":"#1D4ED8", color : value==='X'?'#22C55E':'#FACC15'}} type="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
