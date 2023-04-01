import React, { useContext, useRef, useCallback, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Board from '../components/Board/Board';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';
import './home.css';
import music from '../backgroundmusic.mp3';
import Keyboard from '../components/Keyboard/keyboard';
import Howtoplaymodal from '../components/Modals/howtoplaymodal';

const Home = () => {
  const infoByContext = useContext(ThemeContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const play = useCallback(() => {
    setIsPlaying(true);
    // access the audio element's play method using audioRef.current.play()
    audioRef.current.play();
  }, [audioRef]);

  const pause = useCallback(() => {
    setIsPlaying(false);
    // access the audio element's pause method using audioRef.current.pause()
    audioRef.current.pause();
  }, [audioRef]);

  return (
    <div className="boardBackground">
      <Navbar className="navbar-css" />
      Dark Theme:
      <ReactSwitch
        onChange={infoByContext.toggleTheme}
        checked={infoByContext.theme === 'dark'} // may serve another purpose. more research needed.
      />
      <audio ref={audioRef} src={music}></audio>
      Play Sound:
      <ReactSwitch onChange={isPlaying ? pause : play} checked={isPlaying} />
      <div>
        <Board />
        <Keyboard />
        <Howtoplaymodal />
      </div>
    </div>
  );
};

export default Home;
