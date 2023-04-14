import React from 'react';
import './navbar.css';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';

const Navbar = () => (
  <div className="navbar-css title-wordle">
    <div className="row">
      <div className="col-lg-2">
        <GoThreeBars />
      </div>
      <div className="col-lg-8">Wordle</div>
      <div className="col-lg-2 navrside">
        <AiOutlineQuestionCircle />
        <span> </span>
        <BsFillGearFill />
      </div>
    </div>
  </div>
);
export default Navbar;
