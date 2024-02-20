import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Board from '../components/Board/Board';
import { ThemeContext } from '../App';
import './home.css';
import Keyboard from '../components/Keyboard/keyboard';
import Howtoplaymodal from '../components/Modals/howtoplaymodal';

const Home = () => {
  const { individualWord } = useContext(ThemeContext);
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
          individualWord={individualWord}
        />
        <Howtoplaymodal />
      </div>
    </div>
  );
};

export default Home;
