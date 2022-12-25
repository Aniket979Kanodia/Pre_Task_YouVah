import React from "react";
import Navbar from "./NavBar";
import "../componentStyles/LandingPage.css"
export default function LandingPage(){
    return(
        <>
            <div className="container">
                <header>
                <Navbar />

                </header>
                <div className="landing-main">
                    <div className="Landing-page-left">

                <div className="Landing-page-text-header">
                    A <span className="unique">unique</span> approach to learning foreign languages online
                </div>

                <div className="Landing-page-text-disc">
                    Learn at your own pace with lifetime access on mobile and desktop
                </div>
                <div className="start-button">
                    <button className="getSButton">Get Started</button>
                </div>
                    </div>
                    <div className="Landing-page-right">
                    
                    <div className="HeadImg1">
                        <img src= {require("./HeaderImg1.png")} className="HImg1"></img>
                    </div>
                     <div className="HeadImg2">
                        <img className="HImg2"src= {require("./HeaderImg2.png")}></img>
                    </div>
                    
                    <div className="HeadImg3">
                        <img className="HImg3" src= {require("./HeaderImg3.png")}></img>
                    </div>
                        <div className="box-tilt">
                        </div>
                        <div className="box-straight"> 
                        
                            {/* <img className="Landing-Page-Image" src="Image.png"></img> */}
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}