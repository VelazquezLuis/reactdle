import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import PuzzleSolved from "./pages/puzzleSolved";
import Keyboard from "./components/Keyboard/keyboard";
import GetWordleWord from "./api/wordleWord";

// import ReactSwitch from 'react-switch';
export const ThemeContext = createContext(null);

function App() {
  const { wordleWord } = GetWordleWord();
  console.log(">>>wordlWord", wordleWord);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div id={theme}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/puzzleSolved" element={<PuzzleSolved />} />
          </Routes>
        </Router>
        {/* <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
