import React from 'react';
import { PropTypes } from 'prop-types';
import Key from './Key/Key';

const KeyboardRow = ({
  values,
  spacer,
  row,
  setRow,
  col,
  setCol,
  grid,
  setGrid,
}) => {
  const keyboardRow = values.map((value) => {
    if (typeof value === 'string') {
      return (
        <Key
          key={value}
          value={value}
          row={row}
          setRow={setRow}
          col={col}
          setCol={setCol}
          grid={grid}
          setGrid={setGrid}
        />
      );
    }
    if (typeof value === 'object') {
      return (
        <Key
          key={Math.random()}
          classValue={value.class}
          value={value.value}
          row={row}
          setRow={setRow}
          col={col}
          setCol={setCol}
          grid={grid}
          setGrid={setGrid}
        />
      );
    }
    return null;
  });
  return (
    <div className="keyrow">
      {spacer ? <div data-testid="spacer" className="spacer" /> : ''}
      {keyboardRow}
      {spacer ? <div data-testid="spacer" className="spacer" /> : ''}
    </div>
  );
};

KeyboardRow.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  spacer: PropTypes.bool,
  row: PropTypes.number,
  setRow: PropTypes.func,
  col: PropTypes.number,
  setCol: PropTypes.func,
  grid: PropTypes.array,
  setGrid: PropTypes.func,
};

export default KeyboardRow;
