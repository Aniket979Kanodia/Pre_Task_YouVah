import React from "react";
import "../componentStyles/Footer.css"
export default function Footer(){
    return(
        <div className="container-footer">
            <div className="Footer-head">
                <div className="Footer-head-main">
                Get a free trial lesson today
                </div>
                <div className="Footer-head-sub">
               <p> Start fulfilling your language dreams with our school</p>
                </div>
            </div>
            <div className="Footer-contactme">
                <div className="Footer-contactme-email">
                    <input type={"email"} className="email-input" placeholder={"Enter your email"}/>
                </div>
                <div className="Footer-contactme-button">
                    <button type="submit" className="email-submit">Submit</button>
                </div>
            </div>
            <div className="Footer-end">
                <div className="Footer-end-logo">
                <div className="logo">
                <div className="logo-left"></div>
                <div className="logo-right"></div>
                <div className="logo-text">
                    Lingua</div>

            </div>
                    <div className="end-address">
                    20 Osgood Rd, Milford, NH 03055, USA
+1283871239190213021
                    </div>
                </div>
                <div className="Footer-end-company">
                <div className="Footer-end-company-header">
                    Company
                </div>
                <div className="Footer-end-company-sub">
                    <ul className="company-list">
                        <li>Careers</li>
                        <li>Teachers</li>
                        <li>Spport</li>
                        <li>Contact</li>
                    </ul>
                </div>
                    
                </div>
                <div className="Footer-end-product">
                <div className="Footer-end-product-header">Product</div>
                <div className="product-list">
                    <ul>
                        <li>Courses</li>
                        <li>pricing</li>
                        <li>Blog</li>
                    </ul>
                </div>

                </div>
                <div className="Footer-end-legal">
                <div className="Footer-end-legal-header">Legal</div>
                <div className="Legal-list">
                    <ul>
                        <li>Terms & conditions</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                </div>
                <div className="Footer-end-socials">
                    <img className="social" src={require("./instagram.png")}></img>
                    <img className="social" src={require("./f.png")}></img>
                    <img className="social" src={require("./twitter.png")}></img>
                </div>
            </div>
        </div>
    )
}