import React from 'react';
import Tile from '../Tile/Tile';
import './board.css';

const Board = () => {
  let tiles = [];
  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      row.push(<Tile row={j} col={i} />);
    }
    tiles.push(<div className="board-row">{row}</div>);
  }
  return <div className="board">{tiles}</div>;
};

export default Board;
