import { useEffect, useState } from "react";

const WORDS = [
  "arroz",
  "bebida",
  "cactus",
  "danza",
  "espejo",
  "florar",
  "guitarra",
  "helado",
  "isla",
  "jardín",
  "koala",
  "limón",
  "manzana",
  "nadar",
  "océano",
  "pulgar",
  "quesos",
  "rosado",
  "sandía",
  "tomate",
  "unicornio",
  "volcán",
  "wifi",
  "xenón",
  "yogurt",
  "zapato",
];

export default function WordPerMinute() {
  const [word, setWord] = useState(
    () => WORDS[(Math.random() * WORDS.length) | 0]
  );
  const [characterCount, setCharacterCount] = useState(0);
  const [buffer, setBuffer] = useState("");
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (gameOver) {
      return;
    }

    if (buffer === word) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setCharacterCount(characterCount + word.length);
    }

    setBuffer("");

    if (time === 0) {
      setGameOver(true);
    }
  }

  useEffect(() => {
    if (time !== 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timeout);
    }
  }, [time]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {Boolean(time) && <h1 style={{ fontSize: 48 }}>{word}</h1>}
      <h2>Caracteres typeados: {characterCount}</h2>
      <h3>Tiempo restante: {time}</h3>
      {gameOver ? (
        <h1>Juego terminado</h1>
      ) : time ? (
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            type="text"
            value={buffer}
            onChange={(e) => setBuffer(e.target.value)}
          />
          <button type="submit"></button>
        </form>
      ) : (
        <button onClick={() => setTime(60)}>Jugar</button>
      )}
    </div>
  );
}
