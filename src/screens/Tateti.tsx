import { useEffect, useState } from "react";

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
const INITIAL_STATE = new Array(9).fill("");

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
  const [cells, setCells] = useState<(Player | "")[]>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>(Status.Jugando);
  function handleClick(index: number) {
    if (status !== Status.Jugando) return;
    const draft = [...cells];
    if (draft[index] == "") {
      draft[index] = turn;
    }
    setTurn((turn) => (turn == Player.X ? Player.O : Player.X));
    setCells(draft);
  }
  function handleReset() {
    setCells(INITIAL_STATE);
    setStatus(Status.Jugando);
  }
  useEffect(() => {
    let winner: Player | undefined;
    for (let player of [Player.X, Player.O]) {
      const hasWon = WINNING_COMPS.some((comp) =>
        comp.every((cell) => player == cells[cell])
      );
      if (hasWon) {
        winner = player;
      }
      console.log(winner);
      if (winner == Player.X) {
        setStatus(Status.XGANO);
      } else if (winner == Player.O) {
        setStatus(Status.OGANO);
      } else if (
        cells.every((cell) => [Player.O, Player.X].includes(cell as any))
      ) {
        setStatus(Status.Empate);
      }
    }
  }, [cells]);

  return (
    <main>
      <div className="board">
        {cells.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      {status !== Status.Jugando && (
        <section>
          <article role="alert">
            {status == Status.Empate && "Empate!"}
            {status == Status.XGANO && "Gano X!"}
            {status == Status.OGANO && "Gano O!"}
          </article>
          <button onClick={handleReset}>Reiniciar</button>
        </section>
      )}
    </main>
  );
}
