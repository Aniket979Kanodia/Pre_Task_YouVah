import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
import LensIcon from '@mui/icons-material/Lens';
import LensOutlinedIcon from '@mui/icons-material/LensOutlined';
import "../componentStyles/Values.css"
export default function Values() {
    return (
        <>
            <div className="main-container">
                <div className="Header">
                    <div className="sub-head">
                        WHY CHOOSE US
                    </div>
                    <div className="main-head">
                        Our values
                    </div>
                </div>
                <div className="Value-Items">

                    <div className="value-card">
                        <img src={ require("./Icon1.png")} className="value-card-img" style={{ height: "60px" , width:"60px"}} />
                        <div className="value-card-txt">
                            <div className="value-card-txt-head">
                            Speaking clubs
                            </div>
                            <div className="value-card-text-disc">
                            <p className="pa">In our school you will practice your speaking skills and just get a lot of positive emotions!
                            </p>
                            </div>

                        </div>
                    </div>
                    <div className="value-card">
                        <img src={ require("./Icon2.png")} className="value-card-img" style={{ height: "60px" , width:"60px"}} />
                        <div className="value-card-txt">
                            <div className="value-card-txt-head">
                            Quality control
                            </div>
                            <div className="value-card-text-disc">
                            <p className="pa">A huge work has been done with the teachers and their work has been monitored thoroughly. 
                            </p>
                            </div>

                        </div>
                    </div>
                    <div className="value-card">
                        <img src={ require("./Icon3.png")} className="value-card-img" style={{ height: "60px" , width:"60px"}} />
                        <div className="value-card-txt">
                            <div className="value-card-txt-head">
                            Progress analysis
                            </div>
                            <div className="value-card-text-disc">
                            <p className="pa">The CEF of Reference has been used at our school. It allows to control our students’ success in studying.
                            </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}