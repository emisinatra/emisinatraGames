import { Route, Routes } from "react-router-dom";

import WordPerMinute from "./screens/WordsPerMinute";
import Pokemon from "./screens/Pokemon";
import Memotest from "./screens/Memotest";
import WpmApi from "./screens/WpmApi";

function App() {
  return (
    <Routes>
      <Route element={<Memotest />} path="/memotest" />
      <Route element={<Pokemon />} path="/pokemon" />
      <Route element={<WordPerMinute />} path="/wpm" />
      <Route element={<WpmApi />} path="wpmapi" />
    </Routes>
  );
}
export default App;
