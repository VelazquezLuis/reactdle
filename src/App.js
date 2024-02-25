import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import PuzzleSolved from './pages/puzzleSolved';
import GetWordleWord from './api/wordleWord';
import { array, object } from 'prop-types';

export const ThemeContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(false);
  let { wordleWordDB } = GetWordleWord();
  let singleword;

  const [masterFinalWord, setMasterFinalWord] = useState('');

  if (Array.isArray(wordleWordDB)) {
    singleword = wordleWordDB[count].word;
  }
  useEffect(() => {
    if (win) {
      setCount((count) => count + 1);
      setWin(false);
    }
  }, [win, count]);

  const [theme, setTheme] = useState('light');

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dataBaseWWTest = wordleWordDB;
  console.log(dataBaseWWTest);
  console.log(typeof dataBaseWWTest);

  useEffect(() => {
    if (Array.isArray(dataBaseWWTest)) {
      console.log('this is a database');
      const dataBaseWWTest2 = dataBaseWWTest.map(
        (object) => object.word === masterFinalWord
      );

      console.log(dataBaseWWTest2);

      if (!dataBaseWWTest2.includes(true)) {
        console.log('this word is not in the database');
        alert('this word is not in the database');
      }
    }
  }, [masterFinalWord]);

  console.log('Inside App.js - here is MasterFinalWord', masterFinalWord);

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
      setMasterFinalWord,
    }),
    [theme, setTheme, toggleTheme, show, singleword, setWin, setMasterFinalWord]
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
