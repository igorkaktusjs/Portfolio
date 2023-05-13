import React, { useRef, useContext } from "react";
import Slider from "react-slick/lib/slider";
import Project from "./Project";
import ProjectsContext from "../Data/ProjectsContext";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

const SliderComp = () => {

    const data = useContext(ProjectsContext);

    let sliderProject = '';
    sliderProject = data.map((item,i) => (
      <Project item = {item} key={i}/>
    ))

    const arrowRef = useRef(null);

    return (
    <Conteiner>
    <Slider ref={arrowRef} {...settings}>
            {sliderProject}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                className="back"><IoIosArrowBack/></button>

                <button 
                onClick={() => arrowRef.current.slickNext()}
                className="next"><IoIosArrowForward/></button>
            </Buttons>
    </Conteiner>
    )    
}

export default SliderComp;

const Conteiner = styled.div `
    position: relative;
`

const Buttons = styled.div`

    button{
        width: 2rem;
        height: 2rem;
        background-color: rgba(255,255,255,0.100);
        cursor: pointer;
        color: #01be96;
        border: none;
        position: absolute;
        top: 45%;
        right: -1rem;

    }
    
    .back{
        left: -1rem;
    }

    .next{
        right: 1rem;
    }
`


