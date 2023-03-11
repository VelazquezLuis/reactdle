import React, { useContext } from 'react';
import Board from '../components/Board/Board';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';
import './home.css';

const Home = () => {
  const infoByContext = useContext(ThemeContext);
  return (
    <div className="boardBackground">
      Dark Theme:{' '}
      <ReactSwitch
        onChange={infoByContext.toggleTheme}
        checked={infoByContext.theme === 'dark'} // may serve another purpose. more research needed.
      />
      <div>
        <div className="title-wordle">Wordle</div>
        <Board />
        <div className="Settings">Testing settings</div>
      </div>
    </div>
  );
};

export default Home;
