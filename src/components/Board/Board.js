import React from 'react';
import { PropTypes } from 'prop-types';
import Tile from '../Tile/Tile';
import './board.css';

const Board = ({ grid }) => {
  const tiles = [];
  let tileNumber = 0;
  for (let i = 0; i < grid[0].length; i += 1) {
    const row = [];
    for (let j = 0; j < grid[0].length; j += 1) {
      row.push(<Tile key={tileNumber} row={i} col={j} value={grid[i][j]} />);
      tileNumber += 1;
    }
    tiles.push(
      <div key={Math.random()} className="board-row">
        {row}
      </div>
    );
  }
  return <div className="board">{tiles}</div>;
};

Board.propTypes = {
  grid: PropTypes.array,
};

export default Board;
