import React from "react";
import "./Search.css";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";


function Search() {
    return (
      <div className="search">
        <div className="search-input">
        <IoSearch  className="serch-icon"/>
        <input />
        <FaMicrophone className="mic-icon" />
        <SiGooglelens />
        </div>
      </div>
    );
  }
  
  export default Search;