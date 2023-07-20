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
          placeholder="Search word..."
          onChange={(e) => setKeyWord(e.target.value.toString())}
        />
        <button className="search-btn">
          <FaSearch className="search-icon" />
        </button>
      </form>
      <div className="first-part">
        <h3>{searchedKeyWord?.word}</h3>
        <div>
          {searchedKeyWord?.phonetics?.map((el) => {
            return (
              <div key={el?.id}>
                <b>{el?.id + 1}</b>
                <p>{el?.text}</p>
                <button className="play-btn">
                  <a href={el?.audio}>
                    <FaPlay className="play-icon" />
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="second-part">
        {searchedKeyWord?.meanings?.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item?.partOfSpeech}</h3>
              <p>
                <h3>Definitions</h3>
                {item?.definitions?.map((el) => {
                  return (
                    <p key={el.id} className="definition">
                      {el?.definition}
                    </p>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
