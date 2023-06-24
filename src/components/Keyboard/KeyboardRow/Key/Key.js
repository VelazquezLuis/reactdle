import React from 'react';
import { PropTypes } from 'prop-types';

const Key = ({
  value,
  classValue,
  row,
  setRow,
  col,
  setCol,
  grid,
  setGrid,
}) => (
  <button
    type="button"
    data-key="q"
    className={classValue ? `${classValue} thekey` : 'thekey'}
    onClick={() => {
      if (row < 5 && col < 5) {
        let newRow = row;
        let newCol = col + 1;
        if (newCol > 4) {
          newRow += 1;
          newCol = 0;
        }

        setRow(newRow);
        setCol(newCol);

        grid[row][col] = value;
        setGrid(grid);
      }
    }}
  >
    {value}
  </button>
);

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
