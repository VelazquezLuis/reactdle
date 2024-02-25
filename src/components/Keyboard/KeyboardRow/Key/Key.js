import { React, useContext } from 'react';
import { ThemeContext } from '../../../../App';
import { PropTypes } from 'prop-types';
import {
  greenifyLetters,
  yellowifyLetters,
  addLetter,
  removeLetter,
} from '../../../../helpers/helpers';
import useSound from 'use-sound';
import clickSound from './clickSound.mp3';

const Key = ({
  value,
  classValue,
  row,
  setRow,
  col,
  setCol,
  grid,
  setGrid,
  setMasterFinalWord,
}) => {
  const { singleword, setWin, win } = useContext(ThemeContext);

  const [playClickSound] = useSound(clickSound);

  return (
    <button
      type="button"
      data-key="q"
      className={classValue ? `${classValue} thekey` : 'thekey'}
      onClick={(event) => {
        event.preventDefault();
        if (!win && row < 5) {
          if (classValue === 'enterdeletekey delete') {
            removeLetter(row, col, grid, setCol, setGrid);
          } else if (
            classValue === 'enterdeletekey enter' &&
            row >= 0 &&
            col >= 5
          ) {
            let enteredWord = grid[row].reduce((total, letterObj) => {
              total = total + letterObj.value;
              return total;
            }, '');
            if (enteredWord === singleword) {
              console.info('>>>YOU WIN!!! 🎉');
              yellowifyLetters(
                greenifyLetters(singleword, grid, row, setMasterFinalWord),
                grid,
                row
              );
              setGrid(grid);
              setWin(true);
            } else {
              let newRow = row + 1;
              let newCol = 0;
              setRow(newRow);
              setCol(newCol);
              yellowifyLetters(
                greenifyLetters(singleword, grid, row, setMasterFinalWord),
                grid,
                row
              );
              setGrid(grid);
            }
          } else {
            if (value.length === 1) {
              addLetter(
                value,
                row,
                col,
                grid,
                setRow,
                setCol,
                setGrid,
                playClickSound
              );
            }
          }
        }
      }}
      onMouseDown={(event) => event.preventDefault()}
    >
      {value}
    </button>
  );
};

Key.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  classValue: PropTypes.string,
  row: PropTypes.number,
  setRow: PropTypes.func,
  col: PropTypes.number,
  setCol: PropTypes.func,
  grid: PropTypes.array,
  setGrid: PropTypes.func,
};

export default Key;
