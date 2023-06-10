import React from 'react';
import { PropTypes } from 'prop-types';
import Key from './Key/Key';

const KeyboardRow = ({ values, spacer }) => {
  const keyboardRow = values.map((value) => {
    if (typeof value === 'string') {
      return <Key key={value} value={value} />;
    }
    if (typeof value === 'object') {
      return (
        <Key key={Math.random()} classValue={value.class} value={value.value} />
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
};

export default KeyboardRow;
