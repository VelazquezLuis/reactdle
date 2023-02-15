import React from 'react';
import Board from '../components/Board/Board';
import './home.css';

const Home = () => {
  return (
    <div className="boardBackground">
      <div>
        <div className="title-wordle">Wordle</div>
        <Board />
        <div className="Settings">Testing settings</div>
      </div>
    </div>
  );
};

export default Home;
