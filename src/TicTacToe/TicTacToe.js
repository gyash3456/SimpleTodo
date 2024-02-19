import React from "react";
import Square from "./Square";
import Board from "./Board";
import { useState } from "react";

const TicTacToe = () => {
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [currentSquares, setCurrentSquares] = useState(Array(9).fill(null));
  const isNextX = currentMoveIndex % 2 === 0;
  return (
    <div>
      <Board
        isNextX={isNextX}
        currentMoveIndex={currentMoveIndex}
        currentSquares={currentSquares}
        setCurrentSquares={setCurrentSquares}
        setCurrentMoveIndex={setCurrentMoveIndex}
      />
    </div>
  );
};

export default TicTacToe;
