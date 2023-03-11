import React from "react";
import Board from "../components/Board/Board";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="board-wrapper">
        <Board />
      </div>
    </div>
  );
};

export default Home;
