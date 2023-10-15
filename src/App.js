import { createContext, useState, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import PuzzleSolved from './pages/puzzleSolved';
import GetWordleWord from './api/wordleWord';

// import ReactSwitch from 'react-switch';
export const ThemeContext = createContext(null);

function App() {
  const [win, setWin] = useState(false);

  let { wordleWordDB } = GetWordleWord();

  let singleword;

  if (Array.isArray(wordleWordDB)) {
    singleword = wordleWordDB[0].word;
    console.log(singleword);
  }

  const [theme, setTheme] = useState('light');

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleTheme = useCallback(() => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      show,
      handleClose,
      handleShow,
      singleword,
      setWin,
    }),
    [theme, setTheme, toggleTheme, show, singleword, setWin]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div id={theme}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/puzzleSolved" element={<PuzzleSolved />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
