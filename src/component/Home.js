import { Link } from "@mui/material";
import "./Home.css"
import React from "react";


function Home() {
    return(
       
        <div className="home">
                
            <div className="home_header">
                <div className="home_headerright">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                   
                </div>
            </div>
            <div className="home_body">

            </div>  
        </div>
    )
}

export default Home;