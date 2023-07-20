import React, { useState } from "react";
import "./Content.scss";
import { FaSearch } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
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
        <h1 className="searched-word">{searchedKeyWord?.word}</h1>
        <div className="phonetics">
          {searchedKeyWord?.phonetics?.map((el) => {
            return (
              <div className="phonetic-boxes" key={el?.id}>
                <div className="phonetic-box">
                  <p className="pronunciation">{el?.text}</p>
                  <button className="play-btn">
                    <a href={el?.audio}>
                      <AiOutlinePlayCircle className="play-icon" />
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="second-part">
        {searchedKeyWord?.meanings?.map((item) => {
          return (
            <div className="definition-box" key={item.id}>
              <h3 className="partOfSpeech">( as {item?.partOfSpeech} )</h3>
              <p>
                {item?.definitions?.map((el) => {
                  return (
                    <p key={el?.id} className="definition">
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
