"use client";
import { useEffect, useState } from "react";
import Cell from "./components/Cell";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");
  const [undos, setUndos] = useState(0);

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setWinningMessage("Circle Wins!");
      } else if (crossWins) {
        setWinningMessage("Cross Wins!");
      }
    });
  }, [cells]);

  useEffect(() => {
    if (cells.every((cell) => cell != "") && !winningMessage) {
      setWinningMessage("Draw!");
    }
  }, [cells, winningMessage]);

  function restart() {
    setCells(Array(9).fill(""));
    setWinningMessage("");
  }

  return (
    <div className="container">
      <div>
        <button className="restart" onClick={restart}>
          Restart
        </button>
      </div>
      <div className="gameboard">
        {cells.map((cell, index) => {
          return (
            <Cell
              id={index}
              go={go}
              setGo={setGo}
              key={index}
              cells={cells}
              setCells={setCells}
              cell={cell}
              winningMessage={winningMessage}
            />
          );
        })}
      </div>
      <div>{winningMessage}</div>
      {!winningMessage && <div>{`its now ${go} turn!`}</div>}
    </div>
  );
}
