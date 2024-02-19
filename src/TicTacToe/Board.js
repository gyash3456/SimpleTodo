import React from "react";
import Square from "./Square";

const Board = ({
  currentMoveIndex,
  isNextX,
  currentSquares,
  setCurrentSquares,
  setCurrentMoveIndex,
}) => {
  const currentsymbol = isNextX ? "X" : "O";
  const handleClick = (i) => {
    if (checkWinner() || currentSquares[i]) {
      return;
    }
    // console.log(checkWinner(i));
    const newSquares = [...currentSquares];
    newSquares[i] = currentsymbol;
    setCurrentSquares(newSquares);
    setCurrentMoveIndex((prev) => prev + 1);
  };

  const checkWinner = (newSquares) => {
    const currentsymbol = isNextX ? "X" : "O";

    const winingSeqeuence = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 7],
    ];
    for (let row of winingSeqeuence) {
      if (
        currentSquares[row[0]] &&
        currentSquares[row[0]] === currentSquares[row[1]] &&
        currentSquares[row[0]] === currentSquares[row[2]]
      ) {
        return currentSquares[row[0]];
      }
    }
    return null;
  };
  const winner = checkWinner();
  let status = null;
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Current turn for ${currentsymbol}`;
  }
  let board = [];
  for (let i = 0; i < 3; i++) {
    let col = [];
    for (let j = 0; j < 3; j++) {
      col.push(
        <Square
          value={currentSquares[3 * i + j]}
          key={j}
          handleClickSquare={() => handleClick(3 * i + j)}
        />
      );
    }
    board.push(
      <div style={{ display: "flex", justifyContent: "center" }} key={i}>
        {col}
      </div>
    );
  }
  return (
    <div>
      {status}
      {board}
    </div>
  );
};

export default React.memo(Board);
