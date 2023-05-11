import React from 'react';
import './tile.css';

const Tile = (props) => {
  return <div className="tile">{props.tileNumber}</div>;
};

export default Tile;
