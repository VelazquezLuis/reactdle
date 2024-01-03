import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import KeyboardRow from './KeyboardRow/KeyboardRow';
import { ThemeContext } from '../../App';
import './keyboard.css';

const Keyboard = ({ row, setRow, col, setCol, grid, setGrid }) => {
  const { singleword, setWin, win } = useContext(ThemeContext);
  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const enter = {
    class: 'enterdeletekey enter',
    value: 'enter',
  };
  // console.log('Inside keyboard.js - singleword is: ', singleword);
  const del = {
    class: 'enterdeletekey delete',
    value: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        className="game-icon"
        data-testid="icon-backspace"
      >
        <path
          fill="var(--color-tone-1)"
          d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
        />
      </svg>
    ),
  };
  const row3 = [enter, 'z', 'x', 'c', 'v', 'b', 'n', 'm', del];

  const addLetter = (value) => {
    // console.log(">>>addLetter", row + " " + col);
    if (row < 5 && col < 5) {
      let newRow = row;
      let newCol = col + 1;

      // KEEP THIS TO REMEMBER WHAT WAS DELETED
      // if (newCol > 4) {
      //   newRow += 1;
      //   newCol = 0;
      // }

      setRow(newRow);
      setCol(newCol);

      grid[row][col] = value;
      setGrid(grid);
    }
  };

  const removeLetter = () => {
    if (row > 0 || col > 0) {
      let newCol = col - 1;
      if (newCol === -1) {
        newCol = 0;
      }
      setCol(newCol);

      grid[row][newCol] = '';
      setGrid(grid);
    }
  };

  const handleWindowResize = (e) => {
    if (
      ((e.keyCode >= 65 && e.keyCode <= 90) ||
        e.keyCode === 8 ||
        e.keyCode === 13) &&
      !win &&
      row < 5
    ) {
      if (e.key === 'Backspace') {
        removeLetter();
      } else if (e.key === 'Enter' && row >= 0 && col >= 5) {
        /* TODO: Compare against Word of Day before moving on */
        /* Things to consider: */
        /* Enter only works if row is filled so words are compared */
        /* Entered word must validate if it is an actual word */
        /* No backspace to previous line */
        /* Also think about virtual keyboard implementation of this logic */
        /* Need game done/game over condition, which prevents user input */
        // console.log('>>>grid', grid);
        // console.log('>>>row', row);
        // console.log('>>>col', col);
        if (grid[row].join('') === singleword) {
          console.info('>>>YOU WIN!!! 🎉');
          setWin(true);
          //TODO: TURN ALL LETTERS GREEN
        } else {
          //TODO: COMPARE TO GET GREEN/YELLOW LETTERS
          let newRow = row + 1;
          let newCol = 0;
          setRow(newRow);
          setCol(newCol);
        }
      } else if (e.keyCode >= 65 && e.keyCode <= 90) {
        addLetter(e.key.toLowerCase());
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleWindowResize);
    return () => {
      window.removeEventListener('keydown', handleWindowResize);
    };
  });

  return (
    <div>
      <div
        className="keyboard-module-keyboard"
        role="group"
        aria-label="Keyboard"
      >
        <KeyboardRow
          values={row1}
          row={row}
          setRow={setRow}
          col={col}
          setCol={setCol}
          grid={grid}
          setGrid={setGrid}
        />
        <KeyboardRow
          values={row2}
          spacer
          row={row}
          setRow={setRow}
          col={col}
          setCol={setCol}
          grid={grid}
          setGrid={setGrid}
        />
        <KeyboardRow
          values={row3}
          row={row}
          setRow={setRow}
          col={col}
          setCol={setCol}
          grid={grid}
          setGrid={setGrid}
        />
      </div>
    </div>
  );
};

Keyboard.propTypes = {
  row: PropTypes.number,
  setRow: PropTypes.func,
  col: PropTypes.number,
  setCol: PropTypes.func,
  grid: PropTypes.array,
  setGrid: PropTypes.func,
};

export default Keyboard;
