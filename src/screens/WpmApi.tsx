import React, { useState, useEffect } from "react";

export default function WordPerMinute() {
  const [word, setWord] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [buffer, setBuffer] = useState("");
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => {
        setWord(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (buffer === word) {
      setWord("");
      setCharacterCount(characterCount + word.length);
      fetch("https://random-word-api.herokuapp.com/word")
        .then((res) => res.json())
        .then((data) => {
          setWord(data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setBuffer("");
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
      {time ? (
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
