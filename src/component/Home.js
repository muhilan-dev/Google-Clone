import { Link } from "@mui/material";
import "./Home.css";
import React from "react";
import { RxAvatar } from "react-icons/rx";
import { IoApps } from "react-icons/io5";
import imageName from "./google-name.png";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerright">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <IoApps className="iconsheader appsicon" />
          <RxAvatar className="iconsheader avataricon" />
        </div>
      </div>
      <div className="home_body">
        <img src={imageName} alt="description" className="google-image" />
        <div className="homeinput-container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
