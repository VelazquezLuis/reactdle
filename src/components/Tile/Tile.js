import React from 'react';
import { PropTypes } from 'prop-types';
import './tile.css';

const Tile = ({ value }) => <div className="tile">{value}</div>;

Tile.propTypes = {
  value: PropTypes.string,
};

export default Tile;
