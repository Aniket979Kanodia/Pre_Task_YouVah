
import React from "react";
import "../componentStyles/Teaches.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { pink } from '@mui/material/colors';
// import image from "Image.png";
export default function Teachers() {
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group">
                <button className={currentSlide === 0 ? 'disable' : 'button-prev'} onClick={() => previous()} ><ArrowBackIosIcon sx={{ color: pink[50] }} /></button>
                <button className="button-prev" onClick={() => next()} ><ArrowForwardIosIcon sx={{ color: pink[50] }} /></button>
                {/* <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button> */}
            </div>
        );
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (

        <>
            <div className="teachers-container">
                <div className="teachers-header">
                    <div className="teachers-header-sub">
                        key persons
                    </div>
                    <div className="teachers-header-main">
                        Meet our teachers
                    </div>
                </div>

                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
                >
                    <div className="teacher-card">
                        <div className="teacher-img">

                            <img src={require("./Teacher2.png")} alt="Hello" />
                        </div>
                        <div className="teacher-card-disc">
                            <div className="disc-name">
                                Christian Howard
                            </div>
                            <div className="disc-data">
                                <img src={require("./Ellipse 325 (1).png")} />
                                Italian teacher
                            </div>

                        </div>


                    </div><div className="teacher-card">
                        <div className="teacher-img">

                            <img src={require("./Teacher1.png")} alt="Hello" />
                        </div>
                        <div className="teacher-card-disc">
                            <div className="disc-name">
                                Christian Howard
                            </div>
                            <div className="disc-data">
                                <img src={require("./Ellipse 325 (2).png")} />
                                Italian teacher
                            </div>

                        </div>


                    </div>
                    <div className="teacher-card">
                        <div className="teacher-img">

                            <img src={require("./Teacher3.png")} alt="Hello" />
                        </div>
                        <div className="teacher-card-disc">
                            <div className="disc-name">
                                Christian Howard
                            </div>
                            <div className="disc-data">
                                <img src={require("./Ellipse 325.png")} />
                                Italian teacher
                            </div>

                        </div>


                    </div>
                    <div className="teacher-card">
                        <div className="teacher-img">

                            <img src={require("./Teacher2.png")} alt="Hello" />
                        </div>
                        <div className="teacher-card-disc">
                            <div className="disc-name">
                                Christian Howard
                            </div>
                            <div className="disc-data">
                                <img src={require("./Ellipse 325 (1).png")} />
                                Italian teacher
                            </div>

                        </div>


                    </div>
                    <div className="teacher-card">
                        <div className="teacher-img">

                            <img src={require("./Teacher3.png")} alt="Hello" />
                        </div>
                        <div className="teacher-card-disc">
                            <div className="disc-name">
                                Christian Howard
                            </div>
                            <div className="disc-data">
                                <img src={require("./Ellipse 325.png")} />
                                Italian teacher
                            </div>

                        </div>


                    </div>
                    <div className="teacher-card">
                        <div className="teacher-img">

                            <img src={require("./Teacher1.png")} alt="Hello" />
                        </div>
                        <div className="teacher-card-disc">
                            <div className="disc-name">
                                Christian Howard
                            </div>
                            <div className="disc-data">
                                <img src={require("./Ellipse 325 (2).png")} />
                                Italian teacher
                            </div>

                        </div>


                    </div>

                </Carousel>
            </div>
        </>
    )
}