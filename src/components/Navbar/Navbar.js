import React, { useContext, useState, useRef, useEffect } from 'react';
import './navbar.css';
import ReactSwitch from 'react-switch';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa6';
import { HiOutlineSpeakerXMark } from 'react-icons/hi2';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import music from '../../backgroundmusic.mp3';
import { ThemeContext } from '../../App';


import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = () => {
  const { theme, toggleTheme, handleShow } = useContext(ThemeContext);

  const audioRef = useRef(null);

  const [sound, setSound] = useState();

  const handlePlaySoundOn = () => setSound(true);
  const handlePlaySoundOff = () => setSound(false);

  if (sound === true) {
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

  const [showSidebar, setSidebarShow] = useState(false);

  const handleSidebarClose = () => setSidebarShow(false);
  const handleSidebarShow = () => setSidebarShow(true);

  return (
    <nav>
      <div className="navbar-css row ">
        <div className="col-xs-1 col-sm-2 col-md-3 col-lg-3 font-size">
          <div className=" hide-on-tablet hide-on-mobile">
            Dark Theme:<span> </span>
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === 'dark'} // may serve another purpose. more research needed.
            />
          </div>
          <FaBars
            className="d-md-none"
            onMouseOver={() => {
              setIsHovered(true);
            }}
            onMouseOut={() => {
              setIsHovered(false);
            }}
            onClick={handleSidebarShow}
          />
          <Offcanvas
            className="bootstrap-side-bar"
            show={showSidebar}
            onHide={handleSidebarClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                Dark Theme:<span> </span>
                <ReactSwitch
                  onChange={toggleTheme}
                  checked={theme === 'dark'} // may serve another purpose. more research needed.
                />
              </div>
              <div className="bootstrap-side-bar-font">
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
              </div>
              <div className="bootstrap-side-bar-font">
                <AiOutlineQuestionCircle
                  onClick={handleShow}
                  onMouseOver={() => {
                    setIsHovered(true);
                  }}
                  onMouseOut={() => {
                    setIsHovered(false);
                  }}
                />
              </div>{' '}
              <div className="bootstrap-side-bar-font">
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
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className="col-xs-2 col-sm-3 col-md-6 col-lg-6 ">Wordle</div>
        <div className="col-xs-9 col-sm-6 col-md-3 col-lg-3 nav-icons-right-side">
          <audio ref={audioRef} src={music}>
            <track kind="captions" srcLang="en" label="English captions" />
          </audio>

          {/* // Below code handles sound icon change */}

          {!sound ? (
            <HiOutlineSpeakerXMark
              className="hide-on-mobile"
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
              className="hide-on-mobile"
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
            className="hide-on-mobile"
            onClick={handleShow}
            onMouseOver={() => {
              setIsHovered(true);
            }}
            onMouseOut={() => {
              setIsHovered(false);
            }}
          />
          <BsFillGearFill
            className="hide-on-mobile"
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
    </nav>
  );
};
export default Navbar;
