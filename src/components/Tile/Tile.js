import React from 'react';
import { PropTypes } from 'prop-types';
import './tile.css';

const Tile = ({ value, color }) => (
  <div className={`tile tile-${color}`}>{value}</div>
);

Tile.propTypes = {
  value: PropTypes.string,
};

export default Tile;
