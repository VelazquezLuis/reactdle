import { React, useContext } from 'react';
import { ThemeContext } from '../../../../App';
import { PropTypes } from 'prop-types';
import { greenifyLetters, yellowifyLetters } from '../../../../helpers/helpers';

const Key = ({
  value,
  classValue,
  row,
  setRow,
  col,
  setCol,
  grid,
  setGrid,
}) => {
  const { singleword, setWin, win } = useContext(ThemeContext);
  const addLetter = () => {
    if (row < 5 && col < 5) {
      let newRow = row;
      let newCol = col + 1;

      setRow(newRow);
      setCol(newCol);

      grid[row][col] = { value: value };
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

  return (
    <button
      type="button"
      data-key="q"
      className={classValue ? `${classValue} thekey` : 'thekey'}
      onClick={(event) => {
        event.preventDefault();
        if (!win && row < 5) {
          if (classValue === 'enterdeletekey delete') {
            removeLetter();
          } else if (
            classValue === 'enterdeletekey enter' &&
            row >= 0 &&
            col >= 5
          ) {
            //TODO: resolve enter button click
            let enteredWord = grid[row].reduce((total, letterObj) => {
              total = total + letterObj.value;
              return total;
            }, '');
            if (enteredWord === singleword) {
              console.info('>>>YOU WIN!!! 🎉');
              yellowifyLetters(
                greenifyLetters(singleword, grid, row),
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
                greenifyLetters(singleword, grid, row),
                grid,
                row
              );
              setGrid(grid);
            }
          } else {
            addLetter();
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
