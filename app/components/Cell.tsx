import { Dispatch, SetStateAction, useState } from "react";

type CallProps = {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: String[];
  setCells: Dispatch<SetStateAction<any[]>>;
  cell: string;
  winningMessage: String;
};
function Cell({
  id,
  go,
  setGo,
  cells,
  setCells,
  cell,
  winningMessage,
}: CallProps) {
  function handleClick(e: number) {
    if (winningMessage) {
      return;
    }
    const notTaken = !cells[id];
    if (notTaken) {
      handleCellChange(go);
      setGo(go === "circle" ? "cross" : "circle");
    }
    function handleCellChange(cellToChabge: String) {
      let copyCells = [...cells];
      copyCells[id] = cellToChabge;
      setCells(copyCells);
    }
  }
  return (
    <div className="square" onClick={() => handleClick(id)}>
      <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>
  );
}

export default Cell;
