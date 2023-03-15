import { Route, Routes } from "react-router-dom";

import WordPerMinute from "./screens/WordsPerMinute";
import Pokemon from "./screens/Pokemon";
import Memotest from "./screens/Memotest";

function App() {
  return (
    <Routes>
      <Route element={<Memotest />} path="/memotest" />
      <Route element={<Pokemon />} path="/pokemon" />
      <Route element={<WordPerMinute />} path="/wpm" />
    </Routes>
  );
}
export default App;
