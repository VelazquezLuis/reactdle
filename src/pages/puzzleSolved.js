import React, { useContext } from 'react';
import './puzzleSolved.css';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';

const PuzzleSolved = () => {
  const infoByContext = useContext(ThemeContext);
  return (
    <div className="puzzle-solved-css">
      *** Congratulations *** The puzzle has been solved.
      <ReactSwitch
        onChange={infoByContext.toggleTheme}
        checked={infoByContext.theme === 'dark'} // may serve another purpose. more research needed.
      />
    </div>
  );
};

export default PuzzleSolved;
