import React from 'react';
import './tile.css';

const Tile = (props) => (
  <div className="tile">
    r:{props.row} c:{props.col}
  </div>
);

export default Tile;
