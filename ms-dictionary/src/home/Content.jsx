import React, { useState } from "react";
import "./Content.scss";
import { FaPlay, FaSearch } from "react-icons/fa";
import axios from "axios";

const Content = () => {
  let [keyWord, setKeyWord] = useState([]);
  let [searchedKeyWord, setSearchedKeyWord] = useState("");

  const findWord = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`
    );
    let data = res?.data[0];
    setSearchedKeyWord(data);
  };

  console.log(searchedKeyWord);
  return (
    <div className="home-content">
      <form onSubmit={findWord}>
        <input
          type="text"
          className="search-input"
          placeholder="Search ..."
          onChange={(e) => setKeyWord(e.target.value.toString())}
        />
        <button className="search-btn">
          <FaSearch className="search-icon" />
        </button>
      </form>
      <div className="first-part">
        <div>
          <h3>{searchedKeyWord?.word}</h3>
          <p>{searchedKeyWord?.phonetic}</p>
        </div>
        <button className="play-btn">
          <FaPlay />
        </button>
      </div>
      <div className="second-part">
        {/* <b>{searchedKeyWord?.meanings[0]?.definitions[0]}</b> */}
        <h3>Meaning</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          quisquam.
        </p>
      </div>
      <div className="synonims">
        <p>
          <b>Synonims:</b> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default Content;
