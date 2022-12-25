import React from "react";
import "../componentStyles/NavBar.css"
import Crop32SharpIcon from '@mui/icons-material/Crop32Sharp';
import { borderRadius } from "@mui/system";
export default function Navbar(){
    return(
        <nav className="nav-content">
            {/* <div className="nav-content"> */}

            <div className="logo">
                <div className="logo-left"></div>
                <div className="logo-right"></div>
                <div className="logo-text">
                    Lingua</div>

            </div>
            
            <ul>
                <li>Courses</li>
                <li>About Us</li>
                <li>Teachers</li>
                <li>Pricing</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>

            <div className="getStarted">
                <button className="nav-button">
                    Get Started
                </button>
            </div>
            {/* </div> */}
        </nav>
    )
}