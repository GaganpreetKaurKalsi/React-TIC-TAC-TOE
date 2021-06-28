export function calculateWinner(squares) {
  const winMoves = ['012', '345', '678', '036', '147', '258', '048', '246'];
  let winnerP = null
  let winCombo = []
  winMoves.forEach(move => {
    const [a, b, c] = move.split('');
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      winnerP = squares[a]
      winCombo = [Number(a), Number(b), Number(c)]
    }
  });
  return ({ winner: winnerP, winCombination: winCombo });
}
