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
    console.log('sound is set to FALSE');
    audioRef.current.pause();
  }

  useEffect(() => {
    console.log('Should only run once');
    handlePlaySoundOff();
  }, []);

  return (
    <div className="navbar-css">
      <div className="row">
        <div className="col-lg-2">
          <GoThreeBars />
        </div>
        <div className="col-lg-3">Wordle</div>
        <div className="col-lg-7 navrside">
          <audio ref={audioRef} src={music}>
            <track kind="captions" srcLang="en" label="English captions" />
          </audio>

          {/* // Below code handles sound icon change */}
          <div className="icon-container">
            {!sound ? (
              <HiOutlineSpeakerXMark onClick={handlePlaySoundOn} />
            ) : (
              // <HiOutlineSpeakerWave onClick={handlePlaySoundOff} />
              // <HiOutlineSpeakerXMark onClick={handlePlaySoundOn} />
              <HiOutlineSpeakerWave onClick={handlePlaySoundOff} />
            )}

            <AiOutlineQuestionCircle onClick={handleShow} />
            <BsFillGearFill onClick={handleShow} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
