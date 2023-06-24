import React from 'react';
import { PropTypes } from 'prop-types';
import KeyboardRow from './KeyboardRow/KeyboardRow';
import './keyboard.css';

const Keyboard = ({ row, setRow, col, setCol, grid, setGrid }) => {
  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const enter = {
    class: 'enterdeletekey',
    value: 'enter',
  };
  const del = {
    class: 'enterdeletekey',
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
