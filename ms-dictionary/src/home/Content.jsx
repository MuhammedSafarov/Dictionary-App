import React from "react";
import {FaPlay} from 'react-icons/fa';

const Content = () => {
  return (
    <div className="home-content">
      <form>
        <input type="text" className="search" />
      </form>
      <div className="first-part">
        <div>
          <h3>Searched Input</h3>
          <p>[ ko; ]</p>
        </div>
        <button className='play-btn'><FaPlay/></button>
      </div>
    </div>
  );
};

export default Content;
