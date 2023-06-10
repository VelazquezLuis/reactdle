import React from 'react';
import { PropTypes } from 'prop-types';
import './tile.css';

const Tile = ({ tileNumber }) => <div className="tile">{tileNumber}</div>;

Tile.propTypes = {
  tileNumber: PropTypes.number.isRequired,
};

export default Tile;
