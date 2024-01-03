import React, { useContext, useState, useRef, useEffect } from 'react';
import './navbar.css';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';
import { HiOutlineSpeakerXMark } from 'react-icons/hi2';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import music from '../../backgroundmusic.mp3';
import { ThemeContext } from '../../App';

const Navbar = () => {
  const { handleShow } = useContext(ThemeContext);

  const audioRef = useRef(null);

  ////////////////

  const [sound, setSound] = useState();

  const handlePlaySoundOn = () => setSound(true);
  const handlePlaySoundOff = () => setSound(false);

  if (sound === true) {
    // console.log('sound is set to TRUE');
    audioRef.current.play();
  }
  if (sound === false) {
    audioRef.current.pause();
  }

  useEffect(() => {
    handlePlaySoundOff();
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = isHovered ? 'pointer' : 'auto';
  }, [isHovered]);

  return (
    <div className="navbar-css row ">
      <div className="col-xs-1 col-sm-2 col-md-3 col-lg-3 font-size">
        <GoThreeBars
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseOut={() => {
            setIsHovered(false);
          }}
        />
      </div>
      <div className="col-xs-2 col-sm-3 col-md-6 col-lg-6 ">Wordle</div>
      <div className="col-xs-9 col-sm-6 col-md-3 col-lg-3 nav-icons-right-side">
        <audio ref={audioRef} src={music}>
          <track kind="captions" srcLang="en" label="English captions" />
        </audio>

        {/* // Below code handles sound icon change */}

        {!sound ? (
          <HiOutlineSpeakerXMark
            onClick={handlePlaySoundOn}
            onMouseOver={() => {
              setIsHovered(true);
            }}
            onMouseOut={() => {
              setIsHovered(false);
            }}
          />
        ) : (
          // <HiOutlineSpeakerWave onClick={handlePlaySoundOff} />
          // <HiOutlineSpeakerXMark onClick={handlePlaySoundOn} />
          <HiOutlineSpeakerWave
            onClick={handlePlaySoundOff}
            onMouseOver={() => {
              setIsHovered(true);
            }}
            onMouseOut={() => {
              setIsHovered(false);
            }}
          />
        )}

        <AiOutlineQuestionCircle
          onClick={handleShow}
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseOut={() => {
            setIsHovered(false);
          }}
        />
        <BsFillGearFill
          onClick={handleShow}
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseOut={() => {
            setIsHovered(false);
          }}
        />
      </div>
    </div>
  );
};
export default Navbar;
