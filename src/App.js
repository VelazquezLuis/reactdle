import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PuzzleSolved from "./pages/puzzleSolved";

function App() {
  // Testing this entry ,seeing if it records in remote robert.
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/puzzleSolved" element={<PuzzleSolved />} />
      </Routes>
    </Router>
  );
}

export default App;
