import React from "react";
import "../componentStyles/Student.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Student(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div className="container-student">
        <div className="Header">
            <div className="header-sub">
            TOP STUDIYING
            </div>
            <div className="header-main">
            Our students say
            </div>
            <Carousel 
swipeable={false}
draggable={false}
showDots={true}
responsive={responsive}
infinite={true}
keyBoardControl={true}
containerClass="carousel-container"
removeArrowOnDeviceType={["tablet", "mobile"]}
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40-px"
arrows={false}
>
<div className="description">

<div className="student-image">
                    <img src={require("./Student1.png")} />
                </div>
                <div className="student-data">
                    <div className="student-data-name">
                    Martin Watson
                    </div>
                    <div className="student-data-course">
                        <img src = { require("./Ellipse 325 (1).png")} /> 
                        <div className="course-detail">
                        B2 course student
                        </div>
                    </div>
                    <div className="student-data-discription">
                    There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.
                    </div>
                </div>
            </div>
<div className="description">

<div className="student-image">
                    <img src={require("./Student1.png")} />
                </div>
                <div className="student-data">
                    <div className="student-data-name">
                    Martin Watson
                    </div>
                    <div className="student-data-course">
                        <img src = { require("./Ellipse 325 (1).png")} /> 
                        <div className="course-detail">
                        B2 course student
                        </div>
                    </div>
                    <div className="student-data-discription">
                    There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.
                    </div>
                </div>
            </div>
<div className="description">

<div className="student-image">
                    <img src={require("./Student1.png")} />
                </div>
                <div className="student-data">
                    <div className="student-data-name">
                    Martin Watson
                    </div>
                    <div className="student-data-course">
                        <img src = { require("./Ellipse 325 (1).png")} /> 
                        <div className="course-detail">
                        B2 course student
                        </div>
                    </div>
                    <div className="student-data-discription">
                    There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.
                    </div>
                </div>
            </div>
<div className="description">

<div className="student-image">
                    <img src={require("./Student1.png")} />
                </div>
                <div className="student-data">
                    <div className="student-data-name">
                    Martin Watson
                    </div>
                    <div className="student-data-course">
                        <img src = { require("./Ellipse 325 (1).png")} /> 
                        <div className="course-detail">
                        B2 course student
                        </div>
                    </div>
                    <div className="student-data-discription">
                    There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.
                    </div>
                </div>
            </div>
<div className="description">

<div className="student-image">
                    <img src={require("./Student1.png")} />
                </div>
                <div className="student-data">
                    <div className="student-data-name">
                    Martin Watson
                    </div>
                    <div className="student-data-course">
                        <img src = { require("./Ellipse 325 (1).png")} /> 
                        <div className="course-detail">
                        B2 course student
                        </div>
                    </div>
                    <div className="student-data-discription">
                    There is no way I could have made the same progress learning Spanish without using Lingua. The best part is now learning Spanish has become one of my biggest hobbies.
                    </div>
                </div>
            </div>
</Carousel>
                

        
        </div>
        </div>
    );
}