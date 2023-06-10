import React, { useContext } from 'react';
import './navbar.css';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';

import { ThemeContext } from '../../App';

const Navbar = () => {
  const { show, handleClose, handleShow } = useContext(ThemeContext);
  return (
    <div className="navbar-css">
      <div className="row">
        <div className="col-lg-2">
          <GoThreeBars />
        </div>
        <div className="col-lg-8">Wordle</div>
        <div className="col-lg-2 navrside">
          <AiOutlineQuestionCircle onClick={handleShow} />
          <span> </span>

          <BsFillGearFill onClick={handleShow} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
