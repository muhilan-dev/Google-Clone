import { Link } from "@mui/material";
import "./Home.css"
import React from "react";
import { RxAvatar } from "react-icons/rx";
import { IoApps } from "react-icons/io5";


function Home() {
    return(
       
        <div className="home">
                
            <div className="home_header">
                <div className="home_headerright">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <IoApps  className="iconsheader appsicon"/>
                    <RxAvatar className="iconsheader avataricon"/>
                </div>
            </div>
            <div className="home_body">

            </div>  
        </div>
    )
}

export default Home;