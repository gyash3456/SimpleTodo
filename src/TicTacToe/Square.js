import React from "react";

const Square = ({ value, handleClickSquare }) => {
  // console.log(value);
  return (
    <div className="square" style={{ display: "inline-flex" }}>
      <button
        style={{ minWidth: "25px", minHeight: "25px" }}
        onClick={() => handleClickSquare(value)}
      >
        {value}
      </button>
    </div>
  );
};

export default React.memo(Square);
