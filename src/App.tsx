import { Route, Routes } from "react-router-dom";

import WordPerMinute from "./screens/WordsPerMinute";
import Memotest from "./screens/Memotest";
import WpmApi from "./screens/WpmApi";
import Tateti from "./screens/Tateti";

function App() {
  return (
    <Routes>
      <Route element={<Memotest />} path="/memotest" />
      <Route element={<Tateti />} path="/tateti" />
      <Route element={<WordPerMinute />} path="/wpm" />
      <Route element={<WpmApi />} path="wpmapi" />
    </Routes>
  );
}
export default App;
