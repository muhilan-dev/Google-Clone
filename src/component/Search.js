import React from "react";
import { useState } from "react";
import "./Search.css";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search() {
  const [{},dispatch] = useStateValue();

  const [input, setinput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("you hit the search button", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search-input">
        <IoSearch className="search-icon" />
        <input value={input} onChange={(e) => setinput(e.target.value)} />
        <FaMicrophone className="mic-icon" />
        <SiGooglelens />
      </div>

      <div className="search-buttons">
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
