import React from 'react';
import Tile from '../Tile/Tile';
import './board.css';

const Board = () => {
  const tiles = [];
  let tileNumber = 0;
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      row.push(
        <Tile key={tileNumber} tileNumber={tileNumber} row={j} col={i} />
      );
      tileNumber++;
    }
    tiles.push(
      <div key={Math.random()} className="board-row">
        {row}
      </div>
    );
  }
  return <div className="board">{tiles}</div>;
};

export default Board;
