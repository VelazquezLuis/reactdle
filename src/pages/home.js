import React, { useContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import Navbar from '../components/Navbar/Navbar';
import Board from '../components/Board/Board';
import { ThemeContext } from '../App';
import './home.css';
import Keyboard from '../components/Keyboard/keyboard';
import Howtoplaymodal from '../components/Modals/howtoplaymodal';

const Home = () => {
  const { theme, toggleTheme, individualWord } = useContext(ThemeContext);
  // const [win, setWin] = useState(false); //  moved to App.js
  const [grid, setGrid] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);

  return (
    <div>
      <Navbar className="navbar-css" />
      Dark Theme:
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === 'dark'} // may serve another purpose. more research needed.
      />
      {/* <audio ref={audioRef} src={music}>
        <track kind="captions" srcLang="en" label="English captions" />
      </audio>
      Play Sound:
      <ReactSwitch onChange={isPlaying ? pause : play} checked={isPlaying} /> */}
      <div>
        <div className="board-wrapper">
          <Board grid={grid} />
        </div>
        <Keyboard
          row={row}
          setRow={setRow}
          col={col}
          setCol={setCol}
          grid={grid}
          setGrid={setGrid}
          // wordleWord={wordleWord} // moved through context ***
          // win={win}
          // setWin={setWin}
          individualWord={individualWord}
        />
        <Howtoplaymodal />
      </div>
    </div>
  );
};

export default Home;
