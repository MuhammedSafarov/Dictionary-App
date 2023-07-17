import React from "react";
import './Content.scss';
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
      <div className="second-part">
          <b>Noun</b>
          <h3>Meaning</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quisquam.</p>
      </div>
      <div className='synonims'>
          <p><b>Synonims:</b> Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Content;
