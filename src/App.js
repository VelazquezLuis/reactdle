import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PuzzleSolved from "./pages/puzzleSolved";
import Keyboard from "./components/Keyboard/keyboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/puzzleSolved" element={<PuzzleSolved />} />

      </Routes>
      <Keyboard/>
    </Router>
    
  );
}

export default App;
