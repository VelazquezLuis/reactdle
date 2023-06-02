import React from 'react';
import { PropTypes } from 'prop-types';

const Key = ({ value, classValue }) => (
  <button
    type="button"
    data-key="q"
    className={classValue ? `${classValue} thekey` : 'thekey'}
  >
    {value}
  </button>
);

Key.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  classValue: PropTypes.string,
};

export default Key;
