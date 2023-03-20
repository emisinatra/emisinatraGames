import { useState } from "react";

const WINNING_COMPS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

enum Player {
  X = "X",
  O = "O",
}

enum Status {
  Jugando = "JUGANDO",
  Empate = "Empate",
  XGANO = "X Gano",
  OGANO = "O Gano",
}

export default function Tateti() {
  const [turn, setTurn] = useState<Player>(Player.X);
  const [cells, setCells] = useState<(Player | "")[]>([
    Player.X,
    Player.O,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [status, setStatus] = useState<Status>(Status.Jugando);
  function handleClick(index: number) {
    const draft = [...cells];
    if (draft[index] == "") {
      draft[index] = turn;
    }
    setTurn((turn) => (turn == Player.X ? Player.O : Player.X));
    setCells(draft);
  }

  return (
    <div className="board">
      {cells.map((cell, index) => (
        <div key={index} className="cell" onClick={() => handleClick(index)}>
          {cell}
        </div>
      ))}
    </div>
  );
}
