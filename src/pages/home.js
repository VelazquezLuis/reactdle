import React from "react";
import Board from "../components/Board/Board";
import Keyboard from "../components/Keyboard/keyboard";
import Howtoplaymodal from "../components/Modals/howtoplaymodal";

const Home = () => {
  return (
    <div>
      <Board />
      <Keyboard />
      <Howtoplaymodal />
    </div>
  );
};

export default Home;
